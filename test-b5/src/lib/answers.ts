// interface Answer {
//   domain: string
//   facet?: number
//   score: number
// }
import type { Answer, Score, Scores } from '@/types';



export function processAnswers (answers: Answer[]): Scores {
  const result: Scores = {
    O: { score: 0, count: 0, result: 'neutral', facet: {} },
    C: { score: 0, count: 0, result: 'neutral', facet: {} },
    E: { score: 0, count: 0, result: 'neutral', facet: {} },
    A: { score: 0, count: 0, result: 'neutral', facet: {} },
    N: { score: 0, count: 0, result: 'neutral', facet: {} },
  }

  answers.forEach(answer => {
    if (result[answer.domain] === undefined) {
      result[answer.domain] = { score: 0, count: 0, result: 'neutral', facet: {} }
    }
    const domain = result[answer.domain]
    domain.score += answer.score
    domain.count++

    if (answer.facet === undefined) return

    if (domain.facet[answer.facet] === undefined) {
      domain.facet[answer.facet] = { score: 0, count: 0, result: 'neutral' }
    }
    const facet = domain.facet[answer.facet]
    facet.score += answer.score
    facet.count++
  })

  Object.values(result).forEach(domain => {
    domain.result = calculateResult(domain.score, domain.count)
    Object.values(domain.facet).forEach(facet => {
      facet.result = calculateResult(facet.score, facet.count)
    })
  })

  return result
}

export function calculateResult (score: number, count: number): Score {
  const avgScore = score / count
  if (avgScore > 3.5) {
    return 'high'
  } else if (avgScore < 2.5) {
    return 'low'
  }
  return 'neutral'
}
