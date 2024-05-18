import OpenPage from '@/pages/OpenPage';
import Layout01 from '@/pages/Layout01';
import Layout02 from '@/pages/Layout02';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Content = () => {
  return (
    <div className="content">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<OpenPage />}></Route>
            <Route path="/page01" element={<Layout01 />}></Route>
            <Route path="/page02" element={<Layout02 />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Content;
