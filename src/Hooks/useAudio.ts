import { useEffect, useState, useRef } from "react";
import useSetCurrent from "./useSetCurrent";
import { useAppSelector } from "./useAppSelector";
import { useAppDispatch } from "./useAppDispatch";
import checkIsSurahBegins from "../Functions/checkIsSurahBegins";
import { currentActions } from "../store/currentSlice";
import { globalOrdersActions } from "../store/globalOrdersSlice";
const useAudio = () => {
  const dispatch = useAppDispatch();
  const setCurrent = useSetCurrent();

  const isPlaying = useAppSelector((state) => state.globalOrders.isPlaying);
  const bisHasBeenPlayed = useAppSelector(
    (state) => state.globalOrders.bisHasBeenPlayed
  );
  const currentAyah: number | string = useAppSelector(
    (state) => state.current.currentAyah
  );
  const isChanging = useAppSelector((state) => state.globalOrders.isCahnging);
  const isAudioOpen = useAppSelector((state) => state.globalOrders.isAudioOpen);

  const audioRef = useRef<HTMLAudioElement>(null);
  const bismillahAudioRef = useRef<HTMLAudioElement>(null);

  // const [isPlaying, setIsPlaying] = useState(false);
  // const [bisHasBeenPlayed, setBisHasBeenPlayed] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      if (!isAudioOpen) {
        dispatch(globalOrdersActions.setIsAudioOpen(true));
      }
      if (checkIsSurahBegins(Number(currentAyah))) {
        if (Number(currentAyah) != 1236) {
          if (bisHasBeenPlayed) {
            audioRef.current?.play();
          } else {
            bismillahAudioRef.current?.play();
          }
        } else {
          audioRef.current?.play();
        }
      } else {
        dispatch(currentActions.setCurrentBisAudio("025001"));
        audioRef.current?.play();
        bismillahAudioRef.current?.pause();
      }
    } else {
      if (checkIsSurahBegins(Number(currentAyah))) {
        bismillahAudioRef.current?.pause();
        audioRef.current?.pause();
      } else {
        dispatch(currentActions.setCurrentBisAudio("025001"));
        audioRef.current?.pause();
      }
    }
  }, [isPlaying, isChanging]);

  useEffect(() => {
    // setBisHasBeenPlayed(false);
    dispatch(globalOrdersActions.setBisHasBeenPlayed(false));
  }, [isChanging]);

  const prevOnClickHandler = () => {
    if (currentAyah === 1) {
      dispatch(globalOrdersActions.setIsPlaying(false));
    } else {
      dispatch(currentActions.setCurrentBisAudio("025001"));
      setCurrent(Number(currentAyah) - 1);
      dispatch(globalOrdersActions.setIsBackToEndOfPrevPage(true));
    }
  };
  const nextOnClickHandler = () => {
    if (currentAyah === 6236) {
      dispatch(globalOrdersActions.setIsPlaying(false));
    } else {
      dispatch(currentActions.setCurrentBisAudio("025001"));
      setCurrent(Number(currentAyah) + 1);
    }
  };
  const audioRefOnEndedHandler = () => {
    if (currentAyah === 6236) {
      dispatch(globalOrdersActions.setIsPlaying(false));
    } else {
      dispatch(currentActions.setCurrentBisAudio("025001"));
      setCurrent(Number(currentAyah) + 1);
      dispatch(globalOrdersActions.setBisHasBeenPlayed(false));
    }
  };

  const bismillahAudioRefOnEndedHandler = () => {
    audioRef.current?.play();
    dispatch(globalOrdersActions.setBisHasBeenPlayed(true));
  };
  const toggle = () => dispatch(globalOrdersActions.setIsPlaying(!isPlaying));
  const audioOutput = {
    audioRef,
    bismillahAudioRef,
    toggle,
    isPlaying,
    prevOnClickHandler,
    nextOnClickHandler,
    audioRefOnEndedHandler,
    bismillahAudioRefOnEndedHandler,
  };
  return audioOutput;
};
export default useAudio;
