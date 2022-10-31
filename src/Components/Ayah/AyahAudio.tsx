import { Icon } from "@iconify/react";
import playFill from "@iconify/icons-bi/play-fill";
import pauseIcon from "@iconify/icons-fe/pause";
import next24Regular from "@iconify/icons-fluent/next-24-regular";
import { useAppSelector } from "../../Hooks/useAppSelector";
import useSetCurrent from "../../Hooks/useSetCurrent";
import { useEffect, useState, useRef } from "react";
import checkIsSurahBegins from "../Functions/checkIsSurahBegins";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import "../../Styles/Components/Ayah/AyahAudio.scss";
import { globalOrdersActions } from "../../store/globalOrdersSlice";
import { currentActions } from "../../store/currentSlice";
const AyahAudio = () => {
  const dipatch = useAppDispatch();
  const setCurrent = useSetCurrent();
  const currentAyah: number | string = useAppSelector(
    (state) => state.current.currentAyah
  );
  const currentAudio = useAppSelector((state) => state.current.currentAudio);
  const currentBisAudio = useAppSelector(
    (state) => state.current.currentBisAudio
  );
  const onClickChanging = useAppSelector(
    (state) => state.globalOrders.onClickChanging
  );
  const isChanging = useAppSelector((state) => state.globalOrders.isCahnging);
  const url = `http://www.everyayah.com/data/Alafasy_64kbps/${currentAudio}.mp3`;
  const bisUrl = `http://www.everyayah.com/data/Alafasy_64kbps/${currentBisAudio}.mp3`;

  const audioRef = useRef<HTMLAudioElement>(null);
  const bimillahAudioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bisHasBeenPlayed, setBisHasBeenPlayed] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      if (checkIsSurahBegins(Number(currentAyah))) {
        if (Number(currentAyah) != 1236) {
          if (bisHasBeenPlayed) {
            audioRef.current?.play();
          } else {
            bimillahAudioRef.current?.play();
          }
        } else {
          audioRef.current?.play();
        }
      } else {
        dipatch(currentActions.setCurrentBisAudio("025001"));
        audioRef.current?.play();
        bimillahAudioRef.current?.pause();
      }
    } else {
      if (checkIsSurahBegins(Number(currentAyah))) {
        bimillahAudioRef.current?.pause();
        audioRef.current?.pause();
      } else {
        dipatch(currentActions.setCurrentBisAudio("025001"));
        audioRef.current?.pause();
      }
    }
  }, [isPlaying, isChanging, onClickChanging]);

  useEffect(() => {
    setBisHasBeenPlayed(false);
  }, [isChanging]);

  const prevOnClickHandler = () => {
    dipatch(currentActions.setCurrentBisAudio("025001"));
    setCurrent(Number(currentAyah) - 1);
  };
  const nextOnClickHandler = () => {
    dipatch(currentActions.setCurrentBisAudio("025001"));
    setCurrent(Number(currentAyah) + 1);
  };
  const audioRefOnEndedHandler = () => {
    dipatch(currentActions.setCurrentBisAudio("025001"));
    setCurrent(Number(currentAyah) + 1);
    setBisHasBeenPlayed(false);
  };

  const bimillahAudioRefOnEndedHandler = () => {
    audioRef.current?.play();
    setBisHasBeenPlayed(true);
  };

  const toggle = () => setIsPlaying(!isPlaying);

  return (
    <div className="AyahAudio-container">
      <div className="audio-controls">
        <div className="nextprev-div">
          <div className="next-icon-div" onClick={nextOnClickHandler}>
            <Icon icon={next24Regular} className="next-icon" />
          </div>
          <div className="prev-icon-div" onClick={prevOnClickHandler}>
            <Icon icon={next24Regular} hFlip={true} className="prev-icon" />
          </div>
        </div>
        {isPlaying ? (
          <div className="pauseIcon-div">
            <Icon
              icon={pauseIcon}
              width="50"
              onClick={toggle}
              className="pauseIcon"
            />
          </div>
        ) : (
          <div className="playFill-div">
            <Icon
              icon={playFill}
              width="50"
              onClick={toggle}
              className="playFill"
            />
          </div>
        )}
      </div>
      <audio src={url} ref={audioRef} onEnded={audioRefOnEndedHandler} />
      <audio
        ref={bimillahAudioRef}
        src={bisUrl}
        onEnded={bimillahAudioRefOnEndedHandler}
      />
    </div>
  );
};

export default AyahAudio;
