import "../../Styles/Components/MainPage.scss";
import Cover from "../UI/Cover";
import AudioQuraOption from "../Options/AudioQuraOption";
import PagingQuranOption from "../Options/PagingQuranOption";
import TafsirQuranOption from "../Options/TafsirQuranOption";
import BookmarksOption from "../Options/BookmarksOption";
import AboutAppOption from "../Options/AboutAppOption";
const MainPage = () => {
  return (
    <Cover>
      <AudioQuraOption />
      <div className="options-row1">
        <PagingQuranOption />
        <TafsirQuranOption />
        <BookmarksOption />
        <AboutAppOption />
      </div>
    </Cover>
  );
};
export default MainPage;
