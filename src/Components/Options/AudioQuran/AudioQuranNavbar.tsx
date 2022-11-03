import "../../../Styles/Components/Options/AudioQuran/AudioQuranNavbar.scss";
import { useAppDispatch } from "../../../Hooks/useAppDispatch";
import { useAppSelector } from "../../../Hooks/useAppSelector";
import { navbarActions } from "../../../store/navbarSlice";
const AudioQuranNavbar = () => {
  const dispatch = useAppDispatch();
  const showSurahList = useAppSelector((state) => state.navbar.showSurahList);
  const showPageList = useAppSelector((state) => state.navbar.showPageList);
  const showJuzList = useAppSelector((state) => state.navbar.showJuzList);
  const showFavorites = useAppSelector((state) => state.navbar.showFavorites);

  const surahOnClickHamdler = () => {
    dispatch(navbarActions.selectSurahList());
  };
  const pageOnClickHandler = () => {
    dispatch(navbarActions.selectPageList());
  };
  const juzOnClickHandler = () => {
    dispatch(navbarActions.selectJuzList());
  };
  const FavoritesOnClickHandler = () => {
    dispatch(navbarActions.selectFavorites());
  };

  return (
    <div className="QuranNavbar-container">
      <button
        type="button"
        className={`QuranNavbar-item ${showSurahList && ["active"]}`}
        onClick={surahOnClickHamdler}
      >
        <a>سوره</a>
      </button>
      <button
        type="button"
        className={`QuranNavbar-item ${showPageList && ["active"]}`}
        onClick={pageOnClickHandler}
      >
        <a>صفحه</a>
      </button>
      <button
        type="button"
        className={`QuranNavbar-item ${showJuzList && [`active`]}`}
        onClick={juzOnClickHandler}
      >
        <a>جزء</a>
      </button>
      <button
        type="button"
        className={`QuranNavbar-item ${showFavorites && ["active"]}`}
        onClick={FavoritesOnClickHandler}
      >
        <a>منتخب</a>
      </button>
    </div>
  );
};
export default AudioQuranNavbar;
