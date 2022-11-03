import useSetCurrent from "../../../Hooks/useSetCurrent";
import quranSurahs2 from "../../../Resources/QuranMetaData/quranSurahs2";
import "../../../Styles/Components/Options/AudioQuran/SurahList.scss";
import MeccanLogo from "../../../Images/kaaba.png";
import MedinanLogo from "../../../Images/nabawi-mosque.png";
import AddLogo from "../../../Images/addLogo.png";
import toFaNumber from "../../../Functions/toFa";

const SurahList = () => {
  const setCurrent = useSetCurrent();
  const checkSurahType = (type: string | number) => {
    if (type === "meccan") {
      return true;
    } else {
      return false;
    }
  };

  const surahOnclickHandler = (index: number) => {
    setCurrent(quranSurahs2[index].start);
  };
  return (
    <div className="SurahList-container">
      <div className="search-surah-div">
        <input
          type="text"
          className="search-surah-input"
          placeholder="نام سوره مورد نظر را وارد کنید"
        />
      </div>
      {quranSurahs2.map(
        (item, index) =>
          !(index == 0) && (
            <div
              className="SurahList-item"
              key={index}
              onClick={() => surahOnclickHandler(index)}
            >
              <div className="SurahList-item-right">
                <div className="SurahList-index">
                  {toFaNumber(index.toString())}
                </div>
                <div className="SurahList-name">{item.name}</div>
              </div>
              <div className="SurahList-item-left">
                <div className="SurahList-type">
                  {checkSurahType(item.type) ? (
                    <img src={MeccanLogo} alt="MeccanLogo" />
                  ) : (
                    <img src={MedinanLogo} alt="MedinanLogo" />
                  )}
                </div>
                <div className="SurahList-add">
                  <img src={AddLogo} alt="AddLogo" />
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default SurahList;
