import "../../../Styles/Components/Options/AudioQuran/FavoritesList.scss";
import { useAppDispatch } from "../../../Hooks/useAppDispatch";
import { useAppSelector } from "../../../Hooks/useAppSelector";
import { favoritesActions } from "../../../store/favoritesSlice";
import toFaNumber from "../../../Functions/toFa";
import MeccanLogo from "../../../Images/kaaba.png";
import MedinanLogo from "../../../Images/nabawi-mosque.png";
import checkLogo from "../../../Images/check-box.png";
import findSurahByAyah from "../../../Functions/findSurahByAyah";
import findAyahInSurah from "../../../Functions/findAyahInSurah";
import quranSurahs2 from "../../../Resources/QuranMetaData/quranSurahs2";
import quranJuzes from "../../../Resources/QuranMetaData/quranJuzes";
import { resourcesActions } from "../../../store/resourcesSlice";
import useSetCurrent from "../../../Hooks/useSetCurrent";
import { globalOrdersActions } from "../../../store/globalOrdersSlice";

const FavoritesList = () => {
  const dispatch = useAppDispatch();
  const setCurrent = useSetCurrent();
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const surahs = useAppSelector((state) => state.resources.surahs);
  const juzes = useAppSelector((state) => state.resources.juzes);
  const pages = useAppSelector((state) => state.resources.pages);

  const checkSurahType = (type: string | number) => {
    if (type === "meccan") {
      return true;
    } else {
      return false;
    }
  };

  const favoriteOnClickHandler = (index: number) => {
    switch (favorites[index].type) {
      case "surah":
        dispatch(globalOrdersActions.setIsNavigateToSurah(true));
        setCurrent(surahs[favorites[index].index].start);
        break;
      case "juz":
        setCurrent(juzes[favorites[index].index].start);
        break;
      case "page":
        setCurrent(pages[favorites[index].index].start);
    }
  };

  const removeOnClickHandler = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    e.stopPropagation();
    if (favorites[id]) {
      dispatch(favoritesActions.removeFormFavorites(id));
      switch (favorites[id].type) {
        case "surah":
          const nextSurahs = surahs.map((surah, index) => {
            if (index === favorites[id].index) {
              return { ...surah, isAdded: false };
            } else {
              return surah;
            }
          });
          dispatch(resourcesActions.setSurahs(nextSurahs));
          break;
        case "juz":
          const nextJuzes = juzes.map((juz, index) => {
            if (index === favorites[id].index) {
              return { ...juz, isAdded: false };
            } else {
              return juz;
            }
          });
          dispatch(resourcesActions.setJuzes(nextJuzes));
          break;
        case "page":
          const nextPages = pages.map((page, index) => {
            if (index === favorites[id].index) {
              return { ...page, isAdded: false };
            } else {
              return page;
            }
          });
          dispatch(resourcesActions.setPages(nextPages));
          break;
      }
    }
  };
  return (
    <div className="FavoritesList-container">
      {(favorites[0] && favorites[0].index !== -1) || favorites[0] ? (
        favorites.map((item, index) => (
          <div
            className="FavoritesList-item"
            key={index}
            onClick={() => favoriteOnClickHandler(Number(index))}
          >
            <div className="FavoritesList-item-right">
              <div
                className={`FavoritesList-item-number ${
                  item.type === "surah" && ["surah"]
                } ${item.type === "juz" && ["juz"]} ${
                  item.type === "page" && ["page"]
                }`}
              >
                {item.index !== -1 && toFaNumber(item.index.toString())}
              </div>
              <div className="FavoritesList-item-desc">
                {item.type === "surah" && quranSurahs2[item.index].name}
                {item.type === "page" &&
                  "صفحه" + " " + toFaNumber(item.index.toString())}
                {item.type === "juz" &&
                  "سوره" +
                    " " +
                    quranSurahs2[
                      Number(findSurahByAyah(quranJuzes[item.index].start))
                    ].name +
                    " " +
                    "آیه" +
                    findAyahInSurah(quranJuzes[item.index].start)}
              </div>
            </div>
            <div className="FavoritesList-item-left">
              {item.type === "surah" && (
                <div className="SurahList-type">
                  {checkSurahType(quranSurahs2[item.index].type) ? (
                    <img src={MeccanLogo} alt="MeccanLogo" />
                  ) : (
                    <img src={MedinanLogo} alt="MedinanLogo" />
                  )}
                </div>
              )}
              <div
                className="FavoritesList-remove"
                onClick={(e) => removeOnClickHandler(e, index)}
              >
                <img src={checkLogo} alt="checkLogo" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="FavoritesList-empty"> هنوز هیچ منتخبی وجود ندارد.</div>
      )}
    </div>
  );
};
export default FavoritesList;
