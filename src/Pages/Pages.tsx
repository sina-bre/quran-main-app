import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Cover from "../Components/UI/Cover";
import Loading1 from "../Components/UI/Loasing1";
const MainPage = React.lazy(() => import("../Components/Pages/MainPage"));
const AudioQuran = React.lazy(() => import("../Components/Pages/AudioQuran"));
const Setting = React.lazy(() => import("../Components/Setting/Setting"));
const Page = React.lazy(() => import("../Components/Pages/Page"));
const PageContext = React.lazy(() => import("../Components/Pages/PageContext"));
const Search = React.lazy(() => import("../Components/Search/Search"));
const SearchPage = React.lazy(() => import("../Components/Search/SearchPage"));

const Pages = () => {
  return (
    <Suspense fallback={<Loading1 />}>
      <Routes>
        <Route path="/" element={<Cover />}>
          <Route index element={<MainPage />} />
          <Route path="/setting" element={<Setting />} />
          {/* <Route path="/search" element={<Search />}>
            <Route path="/page">
              <Route path=":index2" element={<SearchPage />} />
            </Route>
          </Route> */}
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
