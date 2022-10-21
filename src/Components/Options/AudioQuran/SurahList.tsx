import { useEffect, useState } from "react";
import quranSurahs2 from "../../../Resources/QuranMetaData/quranSurahs2";
import "../../../Styles/Components/Options/AudioQuran/SurahList.scss";
import MeccanLogo from "../../../Images/kaaba.png";
import MedinanLogo from "../../../Images/nabawi-mosque.png";
import AddLogo from "../../../Images/addLogo.png";
import { useAppDispatch } from "../../../Hooks/useAppDispatch";
import { useAppSelector } from "../../../Hooks/useAppSelector";
import { currentActions } from "../../../store/currentSlice";
import useSetCurrent from "../../Functions/useSetCurrent";
import { useNavigate } from "react-router-dom";
import findPageByAyah from "../../Functions/findPageByAyah";
import setCurrentData from "../../Functions/useSetCurrent";

const SurahList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isClickSurah, setIsClickSurah] = useState(false);
  const setCurrent = useSetCurrent();
  const currentAyah = useAppSelector((state) => state.current.currentAyah);
  const currentPage = useAppSelector((state) => state.current.currentPage);
  const checkSurahType = (type: string | number) => {
    if (type === "meccan") {
      return true;
    } else {
      return false;
    }
  };

  // useEffect(() => {
  //   console.log(currentAyah, findPageByAyah(currentAyah));
  //   if (isClickSurah) {
  //     navigate(`/audioQuran/page/${currentPage}`);
  //     setIsClickSurah(false);
  //   }
  // }, [isClickSurah]);
  const surahOnclickHandler = (index: number) => {
    setCurrent(index);
  };
  return (
    <div className="SurahList-container">
      {quranSurahs2.map((item, index) => (
        <div
          className="SurahList-item"
          key={index}
          onClick={() => surahOnclickHandler(index)}
        >
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
