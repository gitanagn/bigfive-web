import type { Scores, DomainShort, TemplateDomain, DomainReport } from '@/types';

export function generateResult(scores: Scores, template: TemplateDomain[]) : DomainReport[] {
  return Object.keys(scores).map((key: string) => {
    const { result, count, score, facet: userFacet } = scores[key as DomainShort];
    const domainTemplate = template.find(template => template.domain === key);

    if (!domainTemplate) {
      throw new Error('Domain template not found for key: ' + key);
    }
    const resultText = domainTemplate.results.find(res => res.score === result)?.text;
    
    const mappedFacets = domainTemplate.facets.map(({ facet: facetId, title, text }) => {
      const { score, count, result } = userFacet[facetId] || {};
      return { facet: facetId, title, text, score, count, scoreText: result };
    }).filter(({ score }) => score);

    return {
      domain: domainTemplate.domain,
      title: domainTemplate.title,
      shortDescription: domainTemplate.shortDescription,
      description: domainTemplate.description,
      scoreText: resultText,
      count,
      score,
      facets: mappedFacets,
      text: resultText
    };
  });
}