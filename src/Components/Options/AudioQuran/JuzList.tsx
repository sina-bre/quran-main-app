import "../../../Styles/Components/Options/AudioQuran/JuzList.scss";
import quranJuzes from "../../../Resources/QuranMetaData/quranJuzes";
import quranSurahs2 from "../../../Resources/QuranMetaData/quranSurahs2";
import toFaNumber from "../../../Functions/toFa";
import findSurahByAyah from "../../../Functions/findSurahByAyah";
import findAyahInSurah from "../../../Functions/findAyahInSurah";
import AddLogo from "../../../Images/addLogo.png";
import useSetCurrent from "../../../Hooks/useSetCurrent";
const JuzList = () => {
  const setCurrent = useSetCurrent();

  const juzOnClickHandler = (index: number) => {
    setCurrent(quranJuzes[index].start);
  };
  return (
    <div className="juzList-container">
      <div className="search-juz-div">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          className="search-juz-input"
          placeholder="شماره جزء مورد نظر را وارد کنید"
        />
      </div>
      {quranJuzes.map(
        (item, index) =>
          !(index == 0) && (
            <div
              className="juzList-item"
              key={index}
              onClick={() => juzOnClickHandler(index)}
            >
              <div className="juzList-item-right">
                <div className="juzList-item-number">
                  {toFaNumber(index.toString())}
                </div>
                <div className="juzList-item-desc">
                  {"سوره" +
                    " " +
                    quranSurahs2[Number(findSurahByAyah(item.start))].name +
                    " "}
                  {"آیه" + findAyahInSurah(item.start)}
                </div>
              </div>
              <div className="juzList-item-left">
                <div className="juzList-add">
                  <img src={AddLogo} alt="AddLogo" />
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default JuzList;
