import { useState } from "react";
import { useAppSelector } from "../../Hooks/useAppSelector";
import "../../Styles/Components/Audio/Audio.scss";
import AudioControls from "./AudioControls";
import ReciterName from "./ReciterName";
import TranslationName2 from "./TranslationName2";

const Audio = () => {
  const reciterName = useAppSelector((state) => state.setting.reciterName);
  const translationName = useAppSelector(
    (state) => state.setting.translationName
  );
  const [openReciters, setOpenReciters] = useState(false);
  const [openTranslations, setOpenTranslations] = useState(false);
  const reciterNameOnClick = () => {
    setOpenReciters(!openReciters);
    setOpenTranslations(false);
  };
  const translationNameOnClick = () => {
    setOpenTranslations(!openTranslations);
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
      {openTranslations && (
        <div
          className="Audio-BackgundShadow"
          onClick={translationNameOnClick}
        ></div>
      )}
      <div className="Audio-container">
        <ReciterName openReciters={openReciters} />
        <TranslationName2 openTranslations={openTranslations} />
        <div className="Audio-container-inner">
          <div
            className={`translation-option ${
              openTranslations && ["active"]
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
