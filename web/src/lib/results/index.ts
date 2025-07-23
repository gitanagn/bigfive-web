import languages from "./data/languages";
import { Scores, FacetOptions, ResultOptions, DomainOptions } from "@/types";
import { TemplateDomain } from "@/types";


const resultTemplates: Record<string, () => Promise<{ default: TemplateDomain[] }>> = {
  en: () => import("./data/en"),
  ar: () => import("./data/ar"),
  da: () => import("./data/da"),
  de: () => import("./data/de"),
  el: () => import("./data/el"),
  es: () => import("./data/es"),
  fr: () => import("./data/fr"),
  he: () => import("./data/he"),
  id: () => import("./data/id"),
  is: () => import("./data/is"),
  it: () => import("./data/it"),
  lt: () => import("./data/lt"),
  nl: () => import("./data/nl"),
  no: () => import("./data/no"),
  'pt-br': () => import("./data/pt-br"),
  ro: () => import("./data/ro"),
};

export default async function(options: ResultOptions) {
  const template : TemplateDomain[] = await getTemplate(options.language)
  return generateResult(options.scores, template)
}

export function getInfo() {
  return { languages }
}

export async function getFacet(options: FacetOptions) {
  const domain = await getDomain(options)
  if (!domain) {
    throw new Error('Domain not found')
  }
  const facetId = options.facet.toString()
  const filtered = domain.facets.find((item) => item.facet.toString() === facetId)
  return filtered
}

export async function getDomain(options: DomainOptions) {
  const template = await getTemplate(options.language)
  if (!template) {
    throw new Error('Template not found')
  }
  const domainId = options.domain.toLowerCase()
  return template.find((item) => item.domain.toLowerCase() === domainId)
}

export async function getTemplate(language: string): Promise<TemplateDomain[]> {
  const templateLoader = resultTemplates[language] || resultTemplates.en;
  const { default: template } = await templateLoader(); 
  return template;
}

export function generateResult(scores: Scores, template: TemplateDomain[]) {  
  return Object.keys(scores).map((key: string) => {
    const { result, count, score } = scores[key];
    const domainTemplate = template.find(template => template.domain === key);

    if (!domainTemplate) {
      throw new Error('Domain template not found for key: ' + key);
    }
    const resultText = domainTemplate.results.find(res => res.score === result)?.text;
    const mappedFacets = domainTemplate.facets.map(({ facet, title, text }) => {

      // @ts-ignore
      const { score, count, result } = scores[key].facet[facet] || {};

      return { facet, title, text, score, count, scoreText: result };
    }).filter(({ score }) => score);

    return {
      domain: domainTemplate.domain as string,
      title: domainTemplate.title,
      shortDescription: domainTemplate.shortDescription,
      description: domainTemplate.description,
      scoreText: resultText || '',
      count,
      score,
      facets: mappedFacets,
      text: resultText || ''
    };
  });
}
