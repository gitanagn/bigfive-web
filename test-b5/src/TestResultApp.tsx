import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { BarChart } from './components/BarChart';
import type { DomainShort, DomainReport, FinalReport, TestResult } from './types';
import { generateReport } from '@/lib/report';
import { ConsultationCTA } from './components/ConsultationCTA';

interface AppTestResultsProps {
  results: TestResult,
  product: any
}

interface DomainSectionProps {
  domain: DomainReport;
  isExpanded: boolean;
  onToggle: () => void;
  onInView: (domain: DomainShort) => void;
}

function DomainSection({ domain, isExpanded, onToggle, onInView }: DomainSectionProps) {
  const { ref } = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) {
        onInView(domain.domain);
      }
    },
  });

  return (
    <section 
      ref={ref}
      id={`domain-${domain.domain}`}
      className="border-t border-gray-200 pt-8 scroll-mt-4"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">{domain.title}</h2>
      <p className="text-gray-600 leading-relaxed">{domain.shortDescription}</p>
      <button
        onClick={onToggle}
        className="mt-3 text-brand hover:underline hover:cursor-pointer text-sm font-medium transition-colors"
      >
        {isExpanded ? 'Rodyti mažiau' : 'Rodyti daugiau'}
      </button>
      {isExpanded && (
        <div 
          className="mt-4 text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: domain.description }}
        />
      )}

      <div className="flex items-center gap-4 mt-6 mb-4">
        <div className="h-px flex-1 bg-gray-200"></div>
        <span className="text-sm text-gray-500 font-medium">Jūsų rezultatai {domain.title} srityje</span>
        <div className="h-px flex-1 bg-gray-200"></div>
      </div>
      
      <div>
        <div>{domain?.scoreText}</div>
        <BarChart 
          max={20} 
          results={[...domain.facets].sort((a, b) => a.title.localeCompare(b.title))} 
        />
      </div>

      <div data-id="domain-detail" className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...domain.facets].sort((a, b) => a.title.localeCompare(b.title)).map((facet, index) => {
          const level = facet.scoreText as 'low' | 'neutral' | 'high';
          const dots = {
            low: ['●', '○', '○'],
            neutral: ['●', '●', '○'],
            high: ['●', '●', '●'],
          };
          const colors = ['#9353d3', '#006FEE', '#f31260', '#f5a524', '#17c964', '#E2711D'];
          const borderColor = colors[index % colors.length];

          const scoreLabel = facet.scoreText === 'low' ? 'Žemas' : facet.scoreText === 'neutral' ? 'Vidutinis' : 'Aukštas';
          
          return (
            <div 
              key={facet.facet}
              className="bg-white rounded-lg p-4 shadow-sm border-l-4"
              style={{ borderLeftColor: borderColor }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h4 className="text-lg font-semibold text-gray-900">{facet.title}</h4>
                <span className="flex items-center gap-2 px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                  <span className="flex gap-0.5 text-gray-400">
                    {dots[level].map((dot, i) => (
                      <span key={i} className={dot === '●' ? 'text-gray-700' : ''}>{dot}</span>
                    ))}
                  </span>
                  <span>{scoreLabel}</span>
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{facet.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function App({ results, product }: AppTestResultsProps) {
  const report: FinalReport = generateReport(results)
  const [expandedDomains, setExpandedDomains] = useState<Record<DomainShort, boolean>>({} as Record<DomainShort, boolean>)
  const [activeSection, setActiveSection] = useState<DomainShort | null>(null)

  const toggleDomain = (domain: DomainShort) => {
    setExpandedDomains(prev => ({
      ...prev,
      [domain]: !prev[domain]
    }))
  }

  const scrollToSection = (domain: DomainShort) => {
    const element = document.getElementById(`domain-${domain}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div>
    

               <ConsultationCTA
        emoji="🤝"
        theme="brand-green"
        text={<div className='space-y-2'>
          <h3 className="text-lg font-semibold mb-2">
          Norite palyginti testo rezultatus su draugais ar šeima?   
          </h3>
          <div>
            Jūsų testo kodas yra <strong>{results.code}</strong>
          </div>
        </div>}
        ctaTheme='button'
        ctaLink={`#/tests/b5/compare/${results.code}`}
        ctaLabel='Palyginti dabar'
        className='mb-8' />

      {/* Floating Navigation */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-2 hidden md:block">
        <ul className="space-y-1 m-0 p-0!">
          {report.map((domain) => (
            <li key={domain.domain}>
              <button
                onClick={() => scrollToSection(domain.domain)}
                className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                  activeSection === domain.domain
                    ? 'bg-brand-accent-2 text-brand-dark font-medium'
                    : 'text-gray-600 hover:text-brand-dark hover:bg-brand-accent-2'
                }`}
                title={domain.title}
              >
                {domain.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <BarChart max={120} results={report} />
      </div>

      <div className="mt-8 space-y-12">
        {report.map((domain, index) => {
         return <>
           {product && (index+1) % 2 == 0 && (
        <div className='mb-8'>
       <ConsultationCTA
        emoji="🧠"
        theme="brand-green"
        ctaTheme='button'
        ctaLabel={`Įsigyti psichologo analizę už ${product.price} €`}
        text={<div className='space-y-2'>
          <h3 className="text-lg font-semibold mb-2">
            {product.name}
          </h3>
          <div>
            {product.short_description}
          </div>
        </div>}
        ctaLink={`/produktas/${product.slug}?test_result=${results.code}`}
        className='mb-8' /></div>)}
         <DomainSection
            key={domain.domain}
            domain={domain}
            isExpanded={expandedDomains[domain.domain] ?? false}
            onToggle={() => toggleDomain(domain.domain)}
            onInView={setActiveSection}
          />
         </>
        })}
      </div>

              {product && (
        <div className='mt-8'>
       <ConsultationCTA
        emoji="🧠"
        theme="brand-green"
        ctaTheme='button'
        ctaLabel={`Įsigyti psichologo analizę už ${product.price} €`}
        text={<div className='space-y-2'>
          <h3 className="text-lg font-semibold mb-2">
            {product.name}
          </h3>
          <div>
            {product.short_description}
          </div>
        </div>}
        ctaLink={`/produktas/${product.slug}?test_result=${results.code}`}
        className='mb-8' /></div>)}
    </div>
  )
}

export default App
