import SearchOption from "../Options/AudioQuran/SearchOption";
import "../../Styles/Components/Pages/AudioQuran.scss";
import AudioQuranNavbar from "../Options/AudioQuran/AudioQuranNavbar";
import SurahList from "../Options/AudioQuran/SurahList";

const AudioQuran = () => {
  return (
    <div className="AudioQuran-container">
      <div className="AudioQuran-title">
        <p>قرآن صوتی</p>
      </div>
      <SearchOption />
      <AudioQuranNavbar />
      <SurahList />
    </div>
  );
};
export default AudioQuran;
