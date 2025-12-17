import type { FinalReport, Scores, TestResult } from "@/types";
import { generateResult } from './scroring';
import { processAnswers } from './answers';
import answersTemplate from '@/data/results';


export const generateReport = (result: TestResult): FinalReport => {
  const answersProcessed: Scores = processAnswers(result.answers);

  return generateResult(answersProcessed, answersTemplate);
}
