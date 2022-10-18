import quranSurahs from "../../../Resources/QuranMetaData/QuranSurahs";
import "../../../Styles/Components/Options/AudioQuran/SurahList.scss";
import MeccanLogo from "../../../Images/kaaba.png";
import MedinanLogo from "../../../Images/nabawi-mosque.png";
import AddLogo from "../../../Images/addLogo.png";
const SurahList = () => {
  const checkSurahType = (type: string | number) => {
    if (type === "Meccan") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="SurahList-container">
      {quranSurahs.map((item, index) => (
        <div className="SurahList-item" key={index}>
          <div className="SurahList-item-right">
            <div className="SurahList-index">{index + 1}</div>
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
      ))}
    </div>
  );
};

export default SurahList;
