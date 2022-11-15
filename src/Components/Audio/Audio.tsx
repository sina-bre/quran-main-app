import { useState } from "react";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { globalOrdersActions } from "../../store/globalOrdersSlice";
import { Icon } from "@iconify/react";
import closeFill from "@iconify/icons-eva/close-fill";
import "../../Styles/Components/Audio/Audio.scss";
import AudioControls from "./AudioControls";
import ReciterName from "./ReciterName";
import TranslationName2 from "./TranslationName2";
import AyahOptionsNav from "../Ayah/AyahOptionsNav";

const Audio = () => {
  const dispatch = useAppDispatch();
  const isAudioOpen = useAppSelector((state) => state.globalOrders.isAudioOpen);
  const reciterName = useAppSelector((state) => state.setting.reciterName);
  const translationName = useAppSelector(
    (state) => state.setting.translationName
  );
  const [openReciters, setOpenReciters] = useState(false);
  const [openTranslations, setOpenTranslations] = useState(false);
  const isAyahOptionsOpen = useAppSelector(
    (state) => state.globalOrders.isAyahOptionsOpen
  );
  const reciterNameOnClick = () => {
    setOpenReciters(!openReciters);
    setOpenTranslations(false);
  };
  const translationNameOnClick = () => {
    setOpenTranslations(!openTranslations);
    setOpenReciters(false);
  };
  const ayahOptionsNavOnClick = () => {
    dispatch(globalOrdersActions.setIsAyahOptionsOpen(false));
    // setOpenReciters(false);
    // setOpenTranslations(false);
  };
  const closeAudioOnClickHandler = () => {
    dispatch(globalOrdersActions.setIsAudioOpen(false));
    dispatch(globalOrdersActions.setIsPlaying(false));
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
      {isAyahOptionsOpen && (
        <div
          className="AyahOptionsNav-backgroundShadow"
          onClick={ayahOptionsNavOnClick}
        ></div>
      )}
      <ReciterName openReciters={openReciters} />
      <TranslationName2 openTranslations={openTranslations} />
      <AyahOptionsNav />
      <div className={`Audio-container ${isAudioOpen ? ["open"] : ["close"]}`}>
        <div className="Audio-container-inner">
          <div className="close-Audio-btn" onClick={closeAudioOnClickHandler}>
            <Icon icon={closeFill} height="20" color="#686868" />
          </div>
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
