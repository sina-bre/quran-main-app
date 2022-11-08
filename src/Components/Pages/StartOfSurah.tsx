import "../../Styles/Components/Pages/StartOfSurah.scss";
import quranSurahs2 from "../../Resources/QuranMetaData/quranSurahs2";
import toFaNumber from "../../Functions/toFa";

const StartOfSurah: React.FC<{
  index: number;
  juzIndex: number;
  ayahIndex: number;
  bis: boolean;
}> = (props) => {
  return (
    <div className="StartOfSurah-container">
      <div className={`QuranSurah Surah${props.index}`}></div>
      <div className="startOfSurah-details">
        <div>سوره {toFaNumber(props.index.toString())}</div>
        <div>
          {quranSurahs2[props.index].type === "meccan" ? "مکی" : "مدنی"}
        </div>
        <div>جزء {toFaNumber(props.juzIndex.toString())}</div>
      </div>
      {props.bis && <div className="startOfSurah-bis"></div>}
    </div>
  );
};
export default StartOfSurah;
