import OpenPage from '@/pages/OpenPage';
import Page01 from '@/pages/Page01';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavHeader from './common/NavHeader';
import { PathList } from '@/models/path';

const Content = () => {
  const pathInfo: PathList = [
    { path: '/', label: 'Open Page' },
    { path: '/page01', label: 'Page01' },
  ];
  return (
    <div className="content">
      <BrowserRouter>
        <NavHeader pathList={pathInfo} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<OpenPage />}></Route>
            <Route path="/page01" element={<Page01 />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Content;
