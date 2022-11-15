import useSetCurrent from "../../../Hooks/useSetCurrent";
import quranSurahs2 from "../../../Resources/QuranMetaData/quranSurahs2";
import "../../../Styles/Components/Options/AudioQuran/SurahList.scss";
import MeccanLogo from "../../../Images/kaaba.png";
import MedinanLogo from "../../../Images/nabawi-mosque.png";
import AddLogo from "../../../Images/addLogo.png";
import checkLogo from "../../../Images/check-box.png";
import toFaNumber from "../../../Functions/toFa";
import { useAppDispatch } from "../../../Hooks/useAppDispatch";
import { useAppSelector } from "../../../Hooks/useAppSelector";
import { globalOrdersActions } from "../../../store/globalOrdersSlice";
import { favoritesActions } from "../../../store/favoritesSlice";
import { resourcesActions } from "../../../store/resourcesSlice";
import { useState, useEffect } from "react";

const SurahList = () => {
  const setCurrent = useSetCurrent();
  const dispatch = useAppDispatch();
  const [searchField, setSearchField] = useState("");
  const [show, setShow] = useState(false);
  const surahs = useAppSelector((state) => state.resources.surahs);
  const favorites = useAppSelector((state) => state.favorites.favorites);

  const checkSurahType = (type: string | number) => {
    if (type === "meccan") {
      return true;
    } else {
      return false;
    }
  };

  const seacrhSurahOnChangeHandler = (input: string) => {
    setSearchField(input);
  };

  const filteredQuranSurahs = quranSurahs2.filter((surah) => {
    return surah.name.includes(searchField);
  });

  useEffect(() => {
    filteredQuranSurahs.length === 0 ? setShow(true) : setShow(false);
  }, [searchField]);
  const surahOnclickHandler = (index: number) => {
    dispatch(globalOrdersActions.setIsNavigateToSurah(true));
    setCurrent(quranSurahs2[index].start);
  };

  const addOnClickHandler = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    e.stopPropagation();
    const nextSurahs = surahs.map((surah, index) => {
      if (index === id) {
        return { ...surah, isAdded: !surah.isAdded };
      } else {
        return surah;
      }
    });
    dispatch(resourcesActions.setSurahs(nextSurahs));
    if (surahs[id].isAdded) {
      dispatch(
        favoritesActions.removeFormFavorites(
          favorites.findIndex(
            (item) => item.index === id && item.type === "surah"
          )
        )
      );
    } else {
      dispatch(favoritesActions.addToFavorites({ index: id, type: "surah" }));
    }
  };
  return (
    <div className="SurahList-container">
      <div className="search-surah-div">
        <input
          type="text"
          className="search-surah-input"
          placeholder="نام سوره مورد نظر را وارد کنید :"
          onChange={(e) => seacrhSurahOnChangeHandler(e.target.value)}
        />
      </div>
      {!show ? (
        filteredQuranSurahs.map(
          (item, index) =>
            !(index === 0 && filteredQuranSurahs.length === 115) && (
              <div
                className="SurahList-item"
                key={index}
                onClick={() => surahOnclickHandler(item.id)}
              >
                <div className="SurahList-item-right">
                  <div className="SurahList-index">
                    {toFaNumber(item.id.toString())}
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
                  <div
                    className="SurahList-add"
                    onClick={(e) => addOnClickHandler(e, item.id)}
                  >
                    {surahs[item.id].isAdded ? (
                      <img src={checkLogo} alt="checkLogo" />
                    ) : (
                      <img src={AddLogo} alt="AddLogo" />
                    )}
                  </div>
                </div>
              </div>
            )
        )
      ) : (
        <div className="SurahList-off">هیچ سوره ای پیدا نشد !!</div>
      )}
    </div>
  );
};

export default SurahList;
