import "../../Styles/Components/Pages/AudioQuran.scss";
import { useAppSelector } from "../../Hooks/useAppSelector";
import AudioQuranNavbar from "../Options/AudioQuran/AudioQuranNavbar";
import SurahList from "../Options/AudioQuran/SurahList";
import JuzList from "../Options/AudioQuran/JuzList";
import PageList from "../Options/AudioQuran/PgaeList";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-akar-icons/arrow-right";
import FavoritesList from "../Options/AudioQuran/FavoritesList";
import { useNavigate } from "react-router-dom";

const AudioQuran = () => {
  const navigate = useNavigate();
  const showSurahList = useAppSelector((state) => state.navbar.showSurahList);
  const showPageList = useAppSelector((state) => state.navbar.showPageList);
  const showJuzList = useAppSelector((state) => state.navbar.showJuzList);
  const showFavorites = useAppSelector((state) => state.navbar.showFavorites);

  const backArrowonClickHandler = () => {
    navigate("/");
  };
  return (
    <div className="AudioQuran-container">
      <div className="AudioQuran-title-div">
        <div
          className="AudioQuran-title-arrow"
          onClick={backArrowonClickHandler}
        >
          <Icon icon={arrowRight} color="#2D3F50" width={27} />
        </div>
        <div className="AudioQuran-title">قرآن صوتی</div>
        <div className="AudioQuran-title-empty"></div>
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
