import { questions } from '@/data/questions';
import { choices } from '@/data/choices';
import type { QuestionItem } from '@/types';

export function getQuestions(): QuestionItem[] {
    return questions.map((question, i) => ({
      ...question,
      num: ++i,
      choices: choices[question.keyed as keyof typeof choices]
    }))
}