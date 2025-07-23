'use server';

import { connectToDatabase } from '@/db';
import { ObjectId } from 'mongodb';
import { B5Error, DbResult, Feedback } from '@/types';
import {processAnswers} from '@/lib/score';
import generateResult, {
  getInfo
} from '@/lib/results';
import {
  Domain
} from '@/types';
import { Language } from '@/types';


const collectionName = process.env.DB_COLLECTION || 'results';
const resultLanguages = getInfo().languages;

export type Report = {
  id: string;
  timestamp: number;
  availableLanguages: Language[];
  language: string;
  results: Domain[];
};


export async function getTestResult(
  id: string,
  language?: string
): Promise<Report | undefined> {
  'use server';

  try {
    const query = { _id: new ObjectId(id) };
    const db = await connectToDatabase();
    const collection = db.collection(collectionName);
    const report = await collection.findOne(query);
    if (!report) {
      console.error(`The test results with id ${id} are not found!`);
      throw new B5Error({
        name: 'NotFoundError',
        message: `Neradome testo rezultatų su ${id} savo duomenų bazėje!`
      });
    }
    const selectedLanguage =
      language ||
      (!!resultLanguages.find((l) => l.code == report.lang) ? report.lang : 'en');
    const scores = processAnswers(report.answers);

    const results = await generateResult({ language: selectedLanguage, scores });
    return {
      id: report._id.toString(),
      timestamp: report.dateStamp,
      availableLanguages: resultLanguages,
      language: selectedLanguage,
      results
    };
  } catch (error) {
    if (error instanceof B5Error) {
      throw error;
    }
    throw new Error('Something wrong happend. Failed to get test result!');
  }
}

export async function saveTest(testResult: DbResult) {
  'use server';
  try {
    const db = await connectToDatabase();
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(testResult);
    return { id: result.insertedId.toString() };
  } catch (error) {
    console.error(error);
    throw new B5Error({
      name: 'SavingError',
      message: 'Nepavyko išsaugoti testo rezultatų!'
    });
  }
}

export type FeebackState = {
  message: string;
  type: 'error' | 'success';
};

export async function saveFeedback(
  prevState: FeebackState,
  formData: FormData
): Promise<FeebackState> {
  'use server';
  const feedback: Feedback = {
    name: String(formData.get('name')),
    email: String(formData.get('email')),
    message: String(formData.get('message'))
  };
  try {
    const db = await connectToDatabase();
    const collection = db.collection('feedback');
    await collection.insertOne({ feedback });
    return {
      message: 'Išsiųsta sėkmingai!',
      type: 'success'
    };
  } catch (error) {
    return {
      message: 'Nepavyko išsiųsti jūsų žinutės!',
      type: 'error'
    };
  }
}
