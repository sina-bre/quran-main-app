import { useAppSelector } from "../../Hooks/useAppSelector";
import useSetCurrent from "../../Hooks/useSetCurrent";
import { useEffect, useState, useRef } from "react";
import checkIsSurahBegins from "../Functions/checkIsSurahBegins";
const AyahAudio: React.FC<{ url: string; bisUrl: string }> = (props) => {
  const setCurrent = useSetCurrent();
  const currentAyah: number | string = useAppSelector(
    (state) => state.current.currentAyah
  );
  const currentAudio = useAppSelector((state) => state.current.currentAudio);
  const url = props.url;
  const bisUrl = props.bisUrl;

  const audioRef = useRef<HTMLAudioElement>(null);
  const bimillahAudioRef = useRef<HTMLAudioElement>(null);
  const [isplaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isplaying) {
      if (checkIsSurahBegins(Number(currentAyah))) {
        bimillahAudioRef.current?.play();
      } else {
        audioRef.current?.play();
        bimillahAudioRef.current?.pause();
      }
    } else {
      bimillahAudioRef.current?.pause();
      audioRef.current?.pause();
    }
  }, [isplaying, currentAyah]);

  const prevOnClickHandler = () => {
    setCurrent(Number(currentAyah) - 1);
  };
  const nextOnClickHandler = () => {
    setCurrent(Number(currentAyah) + 1);
  };
  const audioRefOnEndedHandler = () => {
    setCurrent(Number(currentAyah) + 1);
  };
  const bimillahAudioRefOnEndedHandler = () => {
    audioRef.current?.play();
  };

  const toggle = () => setIsPlaying(!isplaying);

  return (
    <div>
      <button onClick={nextOnClickHandler}>next</button>
      {isplaying ? (
        <button onClick={toggle}>pause</button>
      ) : (
        <button onClick={toggle}>play</button>
      )}
      <button onClick={prevOnClickHandler}>prev</button>
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
