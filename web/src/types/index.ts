import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type BaseAnswer = {
  score: number;
  domain: string;
  facet: number;
};

export type Answer = BaseAnswer & { id: string };

export type DbResult = {
  testId: string;
  lang: string;
  invalid: boolean;
  timeElapsed: number;
  dateStamp: string;
  answers: Answer[];
};

export type Feedback = {
  name: string;
  email: string;
  message: string;
};

type ErrorName = 'NotFoundError' | 'SavingError';

class ErrorBase<T extends string> extends Error {
  name: T;
  message: string;
  cause: any;

  constructor({
    name,
    message,
    cause
  }: {
    name: T;
    message: string;
    cause?: any;
  }) {
    super();
    this.name = name;
    this.message = message;
    this.cause = cause;
  }
}

export class B5Error extends ErrorBase<ErrorName> {}

export interface Language {
  code: string;
  name: string;
}

export type LanguageCode =
  | "en"
  | "lt"
  | "zh-cn"
  | "zh-hk"
  | "hi"
  | "es"
  | "fr"
  | "ru"
  | "id"
  | "ur"
  | "de"
  | "ja"
  | "it"
  | "th"
  | "uk"
  | "da"
  | "no"
  | "is"
  | "fi"
  | "nl"
  | "ro"
  | "sq"
  | "sv"
  | "hr"
  | "et"
  | "pt-br"
  | "ar"
  | "he"
  | "pl"
  | "ko"
  | "hu"
  | "pt"
  | "zh"
  | "fa";


 export type Score = 'low' | 'neutral' | 'high';
type DomainShort = 'O' | 'C' | 'E' | 'A' | 'N';

export interface Result {
  score: Score;
  text: string;
}

export interface Facet {
  facet: number;
  title: string;
  text: string;
}

export interface TemplateDomain {
  domain: DomainShort;
  title: string;
  shortDescription: string;
  description: string;
  results: Result[];
  facets: Facet[];
}

export interface FacetResult {
  facet: number;
  title: string;
  text: string;
  score: number;
  count: number;
  scoreText: string;
}

export interface Domain {
    domain: string;
    title: string;
    shortDescription: string;
    description: string;
    scoreText: string;
    count: number;
    score: number;
    facets: FacetResult[];
    text: string;
}

export interface FacetInput {
  score: number;
  count: number;
  result: Score;
}

export interface DomainInput {
  score: number;
  count: number;
  result: Score;
  facet: Record<string, FacetInput>;
}

export type Scores = Record<string, DomainInput>;

// export type Template = Record<string, Domain>;


export interface ResultOptions {
  language: string;
  scores: Scores;
}


export interface FacetOptions {
  language: LanguageCode
  domain: string
  facet: string
}


export interface DomainOptions {
  language: LanguageCode
  domain: string
}