import { useState } from "react";
import { useAppSelector } from "../../Hooks/useAppSelector";
import "../../Styles/Components/Audio/Audio.scss";
import AudioControls from "./AudioControls";
import ReciterName from "./ReciterName";

const Audio = () => {
  const reciterName = useAppSelector((state) => state.setting.reciterName);
  const translationName = useAppSelector(
    (state) => state.setting.translationName
  );
  const [openReciters, setOpenReciters] = useState(false);
  const [openTranslation, setOpenTranslation] = useState(false);
  const reciterNameOnClick = () => {
    setOpenReciters(!openReciters);
    setOpenTranslation(false);
  };
  const translationNameOnClick = () => {
    setOpenTranslation(!openTranslation);
    setOpenReciters(false);
  };
  return (
    <>
      {openReciters && (
        <div
          className="Audio-BackgundShadow"
          onClick={reciterNameOnClick}
        ></div>
      )}
      {openTranslation && (
        <div
          className="Audio-BackgundShadow"
          onClick={translationNameOnClick}
        ></div>
      )}
      <div className="Audio-container">
        <ReciterName openReciters={openReciters} />
        <div className="Audio-container-inner">
          <div
            className={`translation-option ${
              openTranslation && ["active"]
            } ${translationName}`}
            onClick={translationNameOnClick}
          ></div>
          <AudioControls />
          <div
            className={`reciter-option ${
              openReciters && ["active"]
            } ${reciterName}`}
            onClick={reciterNameOnClick}
          ></div>
        </div>
      </div>
    </>
  );
};
export default Audio;
