import { useEffect, useState } from "react";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { currentActions } from "../../store/currentSlice";
import findPageByAyah from "./findPageByAyah";
import findSurahByAyah from "./findSurahByAyah";
import findjuzByAyah from "./findJuzByAyah";
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
  };
  useEffect(() => {
    if (changeCurrent) {
      navigate(`/audioQuran/page/${currentPage}`);
      setChangeCurrent(false);
    }
  }, [changeCurrent]);

  return setCurrent;
};
export default useSetCurrent;
