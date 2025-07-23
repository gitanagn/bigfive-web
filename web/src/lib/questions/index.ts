import { Language } from '@/types';
import languages from './data/languages';
// Static import mapping for all available languages

const questionFiles: Record<string, () => Promise<{ default: any[] }>> = {
  ar: () => import('./data/ar/questions'),
  da: () => import('./data/da/questions'),
  de: () => import('./data/de/questions'),
  en: () => import('./data/en/questions'),
  es: () => import('./data/es/questions'),
  et: () => import('./data/et/questions'),
  fa: () => import('./data/fa/questions'),
  fi: () => import('./data/fi/questions'),
  fr: () => import('./data/fr/questions'),
  he: () => import('./data/he/questions'),
  hi: () => import('./data/hi/questions'),
  hr: () => import('./data/hr/questions'),
  hu: () => import('./data/hu/questions'),
  id: () => import('./data/id/questions'),
  is: () => import('./data/is/questions'),
  it: () => import('./data/it/questions'),
  ja: () => import('./data/ja/questions'),
  ko: () => import('./data/ko/questions'),
  lt: () => import('./data/lt/questions'),
  nl: () => import('./data/nl/questions'),
  no: () => import('./data/no/questions'),
  pl: () => import('./data/pl/questions'),
  'pt-br': () => import('./data/pt-br/questions'),
  ro: () => import('./data/ro/questions'),
  ru: () => import('./data/ru/questions'),
  sq: () => import('./data/sq/questions'),
  sv: () => import('./data/sv/questions'),
  th: () => import('./data/th/questions'),
  uk: () => import('./data/uk/questions'),
  ur: () => import('./data/ur/questions'),
  'zh-cn': () => import('./data/zh-cn/questions'),
  'zh-hk': () => import('./data/zh-hk/questions'),
};

const choiceFiles: Record<string, () => Promise<{ default: ChoiceKeyed }>> = {
  ar: () => import('./data/ar/choices'),
  da: () => import('./data/da/choices'),
  de: () => import('./data/de/choices'),
  en: () => import('./data/en/choices'),
  es: () => import('./data/es/choices'),
  et: () => import('./data/et/choices'),
  fa: () => import('./data/fa/choices'),
  fi: () => import('./data/fi/choices'),
  fr: () => import('./data/fr/choices'),
  he: () => import('./data/he/choices'),
  hi: () => import('./data/hi/choices'),
  hr: () => import('./data/hr/choices'),
  hu: () => import('./data/hu/choices'),
  id: () => import('./data/id/choices'),
  is: () => import('./data/is/choices'),
  it: () => import('./data/it/choices'),
  ja: () => import('./data/ja/choices'),
  ko: () => import('./data/ko/choices'),
  lt: () => import('./data/lt/choices'),
  nl: () => import('./data/nl/choices'),
  no: () => import('./data/no/choices'),
  pl: () => import('./data/pl/choices'),
  'pt-br': () => import('./data/pt-br/choices'),
  ro: () => import('./data/ro/choices'),
  ru: () => import('./data/ru/choices'),
  sq: () => import('./data/sq/choices'),
  sv: () => import('./data/sv/choices'),
  th: () => import('./data/th/choices'),
  uk: () => import('./data/uk/choices'),
  ur: () => import('./data/ur/choices'),
  'zh-cn': () => import('./data/zh-cn/choices'),
  'zh-hk': () => import('./data/zh-hk/choices'),
};

export async function getItems(languageCode: string = 'en'): Promise<Question[]> {
  try {
    if (!questionFiles[languageCode] || !choiceFiles[languageCode]) {
      throw new Error(`Language ${languageCode} not supported.`);
    }
    const questions: Question[] = (await questionFiles[languageCode]()).default;
    const choices: ChoiceKeyed = (await choiceFiles[languageCode]()).default;

    return questions.map((question, i) => {
      return {
      ...question,
      num: ++i,
      choices: choices[question.keyed as keyof ChoiceKeyed]
    }
    })
  } catch (error) {
    console.log(error);
    throw new Error(`Inventory ./data/${languageCode}/questions not found. Try another language input.`);
  }
}

export function getInfo(): Info {
  return {
    name: "Johnson's IPIP NEO-PI-R",
    id: 'johnson-120-ipip-neo-pi-r',
    shortId: 'b5-120',
    time: 10,
    questions: 120,
    languages
  }
}

export type Question = {
  domain: string;
  facet: number;
  id: string;
  keyed: string;
  num: number;
  text: string;
  choices: Choice[];
};

export type Choice = {
  color: number;
  score: number;
  text: string;
};

type ChoiceKeyed = {
  plus: Choice[];
  minus: Choice[];
}

export type Info = {
  name: string;
  id: string;
  shortId: string;
  time: number;
  questions: number;
  languages: Language[]
};

