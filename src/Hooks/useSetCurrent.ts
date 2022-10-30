import { useEffect, useState, useRef } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { currentActions } from "../store/currentSlice";
import { globalOrdersActions } from "../store/globalOrdersSlice";
import findPageByAyah from "../Components/Functions/findPageByAyah";
import findSurahByAyah from "../Components/Functions/findSurahByAyah";
import findjuzByAyah from "../Components/Functions/findJuzByAyah";
import createAudioUrlByAyah from "../Components/Functions/createAudioUrlByAyah";
// import findAyahInSurah from "../Components/Functions/findAyahInSurah";
import { useNavigate } from "react-router-dom";

const useSetCurrent = () => {
  const [changeCurrent, setChangeCurrent] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentAyah = useAppSelector((state) => state.current.currentAyah);
  const currentPage = useAppSelector((state) => state.current.currentPage);
  const currentAudio = useAppSelector((state) => state.current.currentAudio);
  const isNavigate = useAppSelector((state) => state.globalOrders.isNavigate);
  const isScroll = useAppSelector((state) => state.globalOrders.isScroll);
  const setCurrent = (index: number) => {
    setChangeCurrent(true);
    dispatch(currentActions.setCurrentAyah(index));
    dispatch(currentActions.setCurrentPage(findPageByAyah(index)));
    dispatch(currentActions.setCurrentSurah(findSurahByAyah(index)));
    dispatch(currentActions.setCurrentJuz(findjuzByAyah(index)));
    dispatch(currentActions.setCurrentAudio(createAudioUrlByAyah(index)));
  };
  // useEffect(() => {
  //   dispatch(globalOrdersActions.setIsNavigate(true));
  // }, [currentPage]);

  useEffect(() => {
    if (changeCurrent) {
      navigate(`/audioQuran/page/${currentPage}`);
      dispatch(globalOrdersActions.setIsNavigate(false));
      console.log("page changes");
      setChangeCurrent(false);
    }
  }, [changeCurrent]);

  // useEffect(() => {
  //   dispatch(globalOrdersActions.setIsScroll(true));
  // }, [currentAyah]);

  useEffect(() => {
    if (changeCurrent) {
      console.log(currentAyah, currentPage, currentAudio);
      setChangeCurrent(false);
    }
  }, [changeCurrent]);

  return setCurrent;
};

export default useSetCurrent;
