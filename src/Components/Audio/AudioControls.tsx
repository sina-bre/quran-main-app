import "../../Styles/Components/Audio/AudioControls.scss";
import { Icon } from "@iconify/react";
import playFill from "@iconify/icons-bi/play-fill";
import pauseIcon from "@iconify/icons-fe/pause";
import next24Regular from "@iconify/icons-fluent/next-24-regular";
import { useAppSelector } from "../../Hooks/useAppSelector";
import useAudio from "../../Hooks/useAudio";
const AudioControls = () => {
  const currentAudio = useAppSelector((state) => state.current.currentAudio);
  const currentBisAudio = useAppSelector(
    (state) => state.current.currentBisAudio
  );

  const url = `http://www.everyayah.com/data/Alafasy_64kbps/${currentAudio}.mp3`;
  const bisUrl = `http://www.everyayah.com/data/Alafasy_64kbps/${currentBisAudio}.mp3`;

  const audioOutput = useAudio();
  const {
    audioRef,
    bimillahAudioRef,
    toggle,
    isPlaying,
    prevOnClickHandler,
    nextOnClickHandler,
    audioRefOnEndedHandler,
    bimillahAudioRefOnEndedHandler,
  } = audioOutput;

  return (
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
      <audio src={url} ref={audioRef} onEnded={audioRefOnEndedHandler} />
      <audio
        ref={bimillahAudioRef}
        src={bisUrl}
        onEnded={bimillahAudioRefOnEndedHandler}
      />
    </div>
  );
};

export default AudioControls;
