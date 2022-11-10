import { useState } from "react";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { globalOrdersActions } from "../../store/globalOrdersSlice";
import "../../Styles/Components/Audio/Audio.scss";
import AudioControls from "./AudioControls";
import ReciterName from "./ReciterName";
import TranslationName2 from "./TranslationName2";
import AyahOptionsNav from "../Ayah/AyahOptionsNav";

const Audio = () => {
  const dispatch = useAppDispatch();
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
      <div className="Audio-container">
        <div className="Audio-container-inner">
          <div className="close-Audio-btn">&times;</div>
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
