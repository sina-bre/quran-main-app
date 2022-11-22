import "../../Styles/Components/Pages/MainPage.scss";
import AudioQuraOption from "../Options/MainPage/AudioQuranOption";
import PagingQuranOption from "../Options/MainPage/PagingQuranOption";
import TafsirQuranOption from "../Options/MainPage/TafsirQuranOption";
import BookmarksOption from "../Options/MainPage/BookmarksOption";
import AboutAppOption from "../Options/MainPage/AboutAppOption";
const MainPage = () => {
  return (
    <>
      <div className="MainPage-topic">صفحه اصلی</div>
      <AudioQuraOption />
      <div className="options-row1">
        <PagingQuranOption />
        <TafsirQuranOption />
        <BookmarksOption />
        <AboutAppOption />
      </div>
    </>
  );
};
export default MainPage;
