import "../../Styles/Components/Pages/AudioQuran.scss";
import { useAppSelector } from "../../Hooks/useAppSelector";
import AudioQuranNavbar from "../Options/AudioQuran/AudioQuranNavbar";
import SurahList from "../Options/AudioQuran/SurahList";
import JuzList from "../Options/AudioQuran/JuzList";
import PageList from "../Options/AudioQuran/PgaeList";
import FavoritesList from "../Options/AudioQuran/FavoritesList";

const AudioQuran = () => {
  const showSurahList = useAppSelector((state) => state.navbar.showSurahList);
  const showPageList = useAppSelector((state) => state.navbar.showPageList);
  const showJuzList = useAppSelector((state) => state.navbar.showJuzList);
  const showFavorites = useAppSelector((state) => state.navbar.showFavorites);
  return (
    <div className="AudioQuran-container">
      <div className="AudioQuran-title">
        <p>قرآن صوتی</p>
      </div>
      <AudioQuranNavbar />
      {showSurahList && <SurahList />}
      {showPageList && <PageList />}
      {showJuzList && <JuzList />}
      {showFavorites && <FavoritesList />}
    </div>
  );
};
export default AudioQuran;
