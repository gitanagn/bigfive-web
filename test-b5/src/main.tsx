import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import ContentModal from './components/ContentModal';
import B5Test from './components/B5Test';
import B5TestCompare from './components/B5TestCompare';

createRoot(document.getElementById('test-root')!).render(
  <StrictMode>
    <HashRouter>
          <Routes>
            <Route path="tests" element={<ContentModal />}>
               <Route path="b5">
                  <Route index element={<B5Test />} />
                  <Route path='compare' element={<B5TestCompare />} />
                  <Route path='compare/:myCode' element={<B5TestCompare />} />
               </Route>
            </Route>
          </Routes>
        </HashRouter>
  </StrictMode>
)