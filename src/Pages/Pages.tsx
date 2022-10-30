import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../Components/Pages/MainPage";
import Cover from "../Components/UI/Cover";
import Page from "../Components/Pages/Page";
import PageContext from "../Components/Pages/PageContext";
const AudioQuran = React.lazy(() => import("../Components/Pages/AudioQuran"));

const Pages = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Cover />}>
          <Route index element={<MainPage />} />
          <Route path="/audioQuran" element={<AudioQuran />} />
          <Route path="/audioQuran/page" element={<Page />}>
            <Route path=":index" element={<PageContext />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
export default Pages;
