import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TestResultReport from './TestResultReport.tsx';
import TestResultCompare from './TestResultCompare.tsx';
import { startTestResultDevMode } from './results-dev.tsx';

import './results.css'

if (import.meta.env.PROD) {
  const testResult = document.getElementById('test-result');

  if (testResult) {
    const results = JSON.parse(testResult.getAttribute('data-result') || '[]');
    const product = JSON.parse(testResult.getAttribute('data-product') || 'null');

    const isCompare = results.length > 1;

    createRoot(testResult).render(
      <StrictMode>
        {isCompare ?
          <TestResultCompare product={product} results={results} /> :
          <TestResultReport product={product} results={results[0]} />
        }
      </StrictMode>
    )
  }
} else {
  startTestResultDevMode()
}


