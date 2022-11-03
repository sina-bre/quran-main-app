import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { currentActions } from "../store/currentSlice";
import { globalOrdersActions } from "../store/globalOrdersSlice";
import findPageByAyah from "../Functions/findPageByAyah";
import findSurahByAyah from "../Functions/findSurahByAyah";
import findjuzByAyah from "../Functions/findJuzByAyah";
import createAudioUrlByAyah from "../Functions/createAudioUrlByAyah";
import createBisAudioUrlByAyah from "../Functions/createBisAudioUrlByAyah";

const useSetCurrent = () => {
  // const [changeCurrent, setChangeCurrent] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isChanging = useAppSelector((state) => state.globalOrders.isCahnging);
  const currentAyah = useAppSelector((state) => state.current.currentAyah);
  const currentPage = useAppSelector((state) => state.current.currentPage);
  const currentAudio = useAppSelector((state) => state.current.currentAudio);
  const isNavigate = useAppSelector((state) => state.globalOrders.isNavigate);
  const isScroll = useAppSelector((state) => state.globalOrders.isScroll);
  const setCurrent = (index: number) => {
    dispatch(globalOrdersActions.setIsChanging(true));
    dispatch(currentActions.setCurrentAyah(index));
    dispatch(currentActions.setCurrentPage(findPageByAyah(index)));
    dispatch(currentActions.setCurrentSurah(findSurahByAyah(index)));
    dispatch(currentActions.setCurrentJuz(findjuzByAyah(index)));
    dispatch(currentActions.setCurrentAudio(createAudioUrlByAyah(index)));
    dispatch(currentActions.setCurrentBisAudio(createBisAudioUrlByAyah(index)));
  };

  useEffect(() => {
    if (isChanging) {
      navigate(`/audioQuran/page/${currentPage}`);
      dispatch(globalOrdersActions.setIsNavigate(false));
      dispatch(globalOrdersActions.setIsChanging(false));
      console.log(currentAyah, currentPage, currentAudio);
    }
  }, [isChanging]);

  // useEffect(() => {
  //   if (isChanging) {
  //     console.log(currentAyah, currentPage, currentAudio);
  //     dispatch(globalOrdersActions.setIsChanging(false));
  //   }
  // }, [isChanging]);

  return setCurrent;
};

export default useSetCurrent;
