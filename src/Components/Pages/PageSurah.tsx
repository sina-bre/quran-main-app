import "../../Styles/Components/Pages/PageSurah.scss";
import { useAppSelector } from "../../Hooks/useAppSelector";
const PageSurah = () => {
  const currentSurah = useAppSelector((state) => state.current.currentSurah);
  return (
    <div className={`PageSurah-container`}>
      <div className={`PageSurah-surah Surah${currentSurah}`}></div>
    </div>
  );
};
export default PageSurah;
