import { useEffect, useState } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { currentActions } from "../store/currentSlice";
import findPageByAyah from "../Components/Functions/findPageByAyah";
import findSurahByAyah from "../Components/Functions/findSurahByAyah";
import findjuzByAyah from "../Components/Functions/findJuzByAyah";
import findAyahInSurah from "../Components/Functions/findAyahInSurah";
import { useNavigate } from "react-router-dom";

const useSetCurrent = () => {
  const [changeCurrent, setChangeCurrent] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentAyah = useAppSelector((state) => state.current.currentAyah);
  const currentPage = useAppSelector((state) => state.current.currentPage);
  const setCurrent = (index: number) => {
    setChangeCurrent(true);
    dispatch(currentActions.setCurrentAyah(index));
    dispatch(currentActions.setCurrentPage(findPageByAyah(index)));
    dispatch(currentActions.setCurrentSurah(findSurahByAyah(index)));
    dispatch(currentActions.setCurrentJuz(findjuzByAyah(index)));
    dispatch(currentActions.setCurrentAyahInSurah(findAyahInSurah(index)));
  };
  useEffect(() => {
    if (changeCurrent) {
      console.log(currentAyah, currentPage);
      navigate(`/audioQuran/page/${currentPage}`);
      setChangeCurrent(false);
    }
  }, [changeCurrent]);

  return setCurrent;
};
export default useSetCurrent;
