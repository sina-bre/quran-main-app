import { Route, Routes } from "react-router-dom";
import AudioQuran from "../Components/Pages/AudioQuran";
import MainPage from "../Components/Pages/MainPage";
import Cover from "../Components/UI/Cover";
import Page from "../Components/Pages/Page";
import PageContext from "../Components/Pages/PageContext";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Cover />}>
        <Route index element={<MainPage />} />
        <Route path="/audioQuran" element={<AudioQuran />} />
        <Route path="/audioQuran/page" element={<Page />}>
          <Route path=":index" element={<PageContext />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default Pages;
