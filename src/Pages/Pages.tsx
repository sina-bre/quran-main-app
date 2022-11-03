import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../Components/Pages/MainPage";
import Cover from "../Components/UI/Cover";
import Page from "../Components/Pages/Page";
import PageContext from "../Components/Pages/PageContext";
import Loading1 from "../Components/UI/Loasing1";
const AudioQuran = React.lazy(() => import("../Components/Pages/AudioQuran"));
const Setting = React.lazy(() => import("../Components/Setting/Setting"));

const Pages = () => {
  return (
    <Suspense fallback={<Loading1 />}>
      <Routes>
        <Route path="/" element={<Cover />}>
          <Route index element={<MainPage />} />
          <Route path="/setting" element={<Setting />} />
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
