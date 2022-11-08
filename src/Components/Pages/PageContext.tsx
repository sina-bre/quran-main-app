import "../../Styles/Components/Pages/PageContext.scss";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { useEffect } from "react";
import quranPages from "../../Resources/QuranMetaData/quranPages";
import Ayah from "../Ayah/Ayah";
import StartOfSurah from "./StartOfSurah";
import checkIsSurahBegins from "../../Functions/checkIsSurahBegins";
import findSurahByAyah from "../../Functions/findSurahByAyah";
import findjuzByAyah from "../../Functions/findJuzByAyah";
import useSetCurrent from "../../Hooks/useSetCurrent";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { globalOrdersActions } from "../../store/globalOrdersSlice";

// import { useEffect } from "react";

const PageContext = () => {
  const setCurrent = useSetCurrent();
  const dispatch = useAppDispatch();
  const { index } = useParams<{ index: any }>();
  const currentPage = useAppSelector((state) => state.current.currentPage);
  const isNavigateToSurah = useAppSelector(
    (state) => state.globalOrders.isNavigateToSurah
  );
  let tempIndexArray = [];
  // for (let i = quranPages[index].start; i <= quranPages[index].end; i++) {
  //   tempIndexArray.push(i);
  // }
  // const indexArray = tempIndexArray;
  for (
    let i = quranPages[Number(currentPage)].start;
    i <= quranPages[Number(currentPage)].end;
    i++
  ) {
    tempIndexArray.push(i);
  }
  const indexArray = tempIndexArray;
  const checkBis = (ayahIndex: number) => {
    if (ayahIndex === 1 || ayahIndex === 1236) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    if (!isNavigateToSurah) {
      setCurrent(quranPages[index].start);
    } else {
      dispatch(globalOrdersActions.setIsNavigateToSurah(false));
    }
  }, [index]);

  return (
    <div className="PageContext-container">
      {indexArray.map((ayahIndex, index) => (
        <div key={index}>
          <div className="StartOfSurah-div">
            {checkIsSurahBegins(ayahIndex) && (
              <StartOfSurah
                index={Number(findSurahByAyah(ayahIndex))}
                juzIndex={Number(findjuzByAyah(ayahIndex))}
                ayahIndex={ayahIndex}
                bis={checkBis(ayahIndex)}
              />
            )}
          </div>
          <Ayah index={ayahIndex} />
        </div>
      ))}
    </div>
  );
};
export default PageContext;
