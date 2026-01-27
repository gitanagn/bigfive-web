import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CompareBarChart } from './components/CompareBarChart';
import { ConsultationCTA } from './components/ConsultationCTA';
import type { DomainShort, DomainReport, TestResult } from './types';
import { generateReport } from '@/lib/report';

interface TestResultCompareProps {
  results: TestResult[];
  product: any;
}

interface DomainSectionProps {
  domain: DomainShort;
  domainTitle: string;
  domainDescription: string;
  domainReports: Array<{
    result: TestResult;
    report: DomainReport;
  }>;
  onInView: (domain: DomainShort) => void;
}

function DomainSection({ domain, domainTitle, domainDescription, domainReports, onInView }: DomainSectionProps) {
  const { ref } = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) {
        onInView(domain);
      }
    },
  });

  // Prepare data for comparison chart
  const facetNames = domainReports[0]?.report.facets
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(f => f.title) || [];
  
  const participants = domainReports.map(({ result, report }) => ({
    name: result.name || result.email || 'Unknown',
    scores: [...report.facets]
      .sort((a, b) => a.title.localeCompare(b.title))
      .map(f => f.score || 0)
  }));

  return (
    <section 
      ref={ref}
      id={`domain-${domain}`}
      className="border-t border-gray-200 pt-8 scroll-mt-4"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">{domainTitle}</h2>
      <p className="text-gray-600 leading-relaxed">{domainDescription}</p>


      
      <div>
        <CompareBarChart 
          max={20} 
          facetNames={facetNames}
          participants={participants}
        />
      </div>
    </section>
  );
}

function TestResultCompare({ results, product }: TestResultCompareProps) {
  const [activeSection, setActiveSection] = useState<DomainShort | null>(null);

  // Generate reports for all test results
  const reportsWithMetadata = results.map(result => ({
    result,
    report: generateReport(result)
  }));

  // Get domain structure from first report (all should have same structure)
  const firstReport = reportsWithMetadata[0]?.report || [];
  const domains: DomainShort[] = firstReport.map(d => d.domain);

  const scrollToSection = (domain: DomainShort) => {
    const element = document.getElementById(`domain-${domain}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  // Prepare overall domain comparison data
  const domainTitles = firstReport.map(d => d.title);
  const overallParticipants = reportsWithMetadata.map(({ result, report }) => ({
    name: result.name || result.email || 'Unknown',
    scores: report.map(d => d.score)
  }));


  return (
    <div>
      {/* Floating Navigation */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-2 hidden md:block">
        <ul className="space-y-1 m-0 p-0!">
          {firstReport.map((domain) => (
            <li key={domain.domain}>
              <button
                onClick={() => scrollToSection(domain.domain)}
                className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                  activeSection === domain.domain
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                title={domain.title}
              >
                {domain.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overall Domain Comparison */}
      <div>
        {/* <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bendras palyginimas</h2> */}
        <CompareBarChart 
          max={120} 
          facetNames={domainTitles}
          participants={overallParticipants}
        />
      </div>

      {/* Individual Domain Sections */}
      <div className="mt-8 space-y-12">
        {domains.map((domainCode) => {
          const domainReports = reportsWithMetadata.map(({ result, report }) => ({
            result,
            report: report.find(d => d.domain === domainCode)!
          }));

          return (
            <DomainSection
              key={domainCode}
              domain={domainCode}
              domainTitle={domainReports[0].report.title}
              domainDescription={domainReports[0].report.shortDescription}
              domainReports={domainReports}
              onInView={setActiveSection}
            />
          );
        })}
      </div>

       {product && (
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
        ctaLink={`/produktas/${product.slug}?test_result=${results.map(r => r.code).join(",")}`}
        className='mb-8' /></div>)}
    </div>
  );
}

export default TestResultCompare;
