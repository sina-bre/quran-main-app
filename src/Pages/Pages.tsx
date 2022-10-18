import { Route, Routes } from "react-router-dom";
import AudioQuran from "../Components/Pages/AudioQuran";
import MainPage from "../Components/Pages/MainPage";
import Cover from "../Components/UI/Cover";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Cover />}>
        <Route index element={<MainPage />} />
        <Route path="/audioQuran" element={<AudioQuran />} />
      </Route>
    </Routes>
  );
};
export default Pages;
