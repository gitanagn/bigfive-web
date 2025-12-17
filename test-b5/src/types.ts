import type { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Question = {
  domain: string;
  facet: number;
  id: string;
  keyed: string;
  text: string;
};

export type QuestionItem = Question & {
  num: number;
  choices: Choice[];
};

export type Choice = {
  color: number;
  score: number;
  text: string;
};

export type ChoiceKeyed = {
  plus: Choice[];
  minus: Choice[];
}

export type BaseAnswer = {
  score: number;
  domain: DomainShort;
  facet: number;
};

export type Answer = BaseAnswer & { id: string };

export type Score = 'low' | 'neutral' | 'high';

export interface Result {
  score: Score;
  text: string;
}

export interface Facet {
  facet: number;
  title: string;
  text: string;
}

export type DomainShort = 'O' | 'C' | 'E' | 'A' | 'N';

export interface DomainInput {
  score: number;
  count: number;
  result: Score;
  facet: Record<string, FacetInput>;
}


export interface FacetInput {
  score: number;
  count: number;
  result: Score;
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
  score: number;
  count: number;
  result: Score;
}

export type DomainScores = {
  score: number
  count: number
  result: string
  facet: Record<string, FacetResult>
}

export type Scores = Record<DomainShort, DomainScores>;

export type DomainReport = {
  domain: DomainShort;
  title: string;
  shortDescription: string;
  description: string;
  scoreText?: string;
  count: number;
  score: number;
  facets: {
    facet: number;
    title: string;
    text: string;
    score?: number;
    count?: number;
    scoreText?: string;
  }[];
  text?: string;
}

export type FinalReport = DomainReport[];

export type TestResult = {
  id: number;
  test_id: number | null;
  reference: string | null;
  user_id: number | null;
  code: string;
  name: string | null;
  email: string | null;
  submitted_at: string;
  time: number;
  answers: Answer[];
  status: string;
}
