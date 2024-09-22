import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const OpenPage = lazy(() => import("@/pages/OpenPage"));
const Layout01 = lazy(() => import("@/pages/Layout01"));
const Layout02 = lazy(() => import("@/pages/Layout02"));

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
