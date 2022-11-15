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
        سوره
      </button>
      <button
        type="button"
        className={`QuranNavbar-item ${showPageList && ["active"]}`}
        onClick={pageOnClickHandler}
      >
        صفحه
      </button>
      <button
        type="button"
        className={`QuranNavbar-item ${showJuzList && [`active`]}`}
        onClick={juzOnClickHandler}
      >
        جزء
      </button>
      <button
        type="button"
        className={`QuranNavbar-item ${showFavorites && ["active"]}`}
        onClick={FavoritesOnClickHandler}
      >
        منتخب
      </button>
    </div>
  );
};
export default AudioQuranNavbar;
