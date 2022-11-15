import "../../../Styles/Components/Options/AudioQuran/JuzList.scss";
import quranJuzes from "../../../Resources/QuranMetaData/quranJuzes";
import quranSurahs2 from "../../../Resources/QuranMetaData/quranSurahs2";
import toFaNumber from "../../../Functions/toFa";
import findSurahByAyah from "../../../Functions/findSurahByAyah";
import findAyahInSurah from "../../../Functions/findAyahInSurah";
import AddLogo from "../../../Images/addLogo.png";
import checkLogo from "../../../Images/check-box.png";
import useSetCurrent from "../../../Hooks/useSetCurrent";
import { useState } from "react";
import { useAppDispatch } from "../../../Hooks/useAppDispatch";
import { resourcesActions } from "../../../store/resourcesSlice";
import { favoritesActions } from "../../../store/favoritesSlice";
import { useAppSelector } from "../../../Hooks/useAppSelector";

const JuzList = () => {
  const dispatch = useAppDispatch();
  const setCurrent = useSetCurrent();
  const [juz, setJuz] = useState<number | string>("");
  const [show, setShow] = useState(false);
  const juzes = useAppSelector((state) => state.resources.juzes);
  const favorites = useAppSelector((state) => state.favorites.favorites);

  const juzOnClickHandler = (index: number) => {
    setCurrent(quranJuzes[index].start);
  };
  const seacrhJuzOnChangeHandler = (value: string) => {
    if (Number(value) < 31 || Number(value) > 0) {
      setJuz(Number(value));
      setShow(true);
    }
    if (Number(value) >= 31) {
      setJuz(30);
      setShow(true);
    }
    if (Number(value) <= 0) {
      setJuz("");
      setShow(false);
    }
  };
  const addOnClickHandler = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    e.stopPropagation();
    const nextJuzes = juzes.map((juz, index) => {
      if (index === id) {
        return { ...juz, isAdded: !juz.isAdded };
      } else {
        return juz;
      }
    });
    dispatch(resourcesActions.setJuzes(nextJuzes));
    if (juzes[id].isAdded) {
      dispatch(
        favoritesActions.removeFormFavorites(
          favorites.findIndex((item) => {
            return item.index === id && item.type === "juz";
          })
        )
      );
    } else {
      dispatch(favoritesActions.addToFavorites({ index: id, type: "juz" }));
    }
  };

  return (
    <div className="juzList-container">
      <div className="search-juz-div">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          className="search-juz-input"
          placeholder="شماره جزء مورد نظر را وارد کنید :"
          onChange={(e) => seacrhJuzOnChangeHandler(e.target.value)}
          value={juz}
        />
      </div>
      {!show ? (
        quranJuzes.map(
          (item, index) =>
            !(index === 0) && (
              <div
                className="juzList-item"
                key={index}
                onClick={() => juzOnClickHandler(item.id)}
              >
                <div className="juzList-item-right">
                  <div className="juzList-item-number">
                    {toFaNumber(item.id.toString())}
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
                  <div
                    className="juzList-add"
                    onClick={(e) => addOnClickHandler(e, item.id)}
                  >
                    {juzes[item.id].isAdded ? (
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
        <div
          className="juzList-item"
          onClick={() => juzOnClickHandler(Number(juz))}
        >
          <div className="juzList-item-right">
            <div className="juzList-item-number">
              {toFaNumber(juz.toString())}
            </div>
            <div className="juzList-item-desc">
              {"سوره" +
                " " +
                quranSurahs2[
                  Number(findSurahByAyah(quranJuzes[Number(juz)].start))
                ].name +
                " "}
              {"آیه" + findAyahInSurah(quranJuzes[Number(juz)].start)}
            </div>
          </div>
          <div className="juzList-item-left">
            <div
              className="juzList-add"
              onClick={(e) => addOnClickHandler(e, Number(juz))}
            >
              {juzes[Number(juz)].isAdded ? (
                <img src={checkLogo} alt="checkLogo" />
              ) : (
                <img src={AddLogo} alt="AddLogo" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JuzList;
