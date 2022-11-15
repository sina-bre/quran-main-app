import "../../Styles/Components/Ayah/AyahOptionsNav.scss";
import { Icon } from "@iconify/react";
import copy20Regular from "@iconify/icons-fluent/copy-20-regular";
import documentCopy20Regular from "@iconify/icons-fluent/document-copy-20-regular";
import channelShare48Regular from "@iconify/icons-fluent/channel-share-48-regular";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { globalOrdersActions } from "../../store/globalOrdersSlice";
import useCopyToClipboard from "../../Hooks/useCopyToClipboard";
import { useState } from "react";
import SuccessMessage from "./SuccessMessage";
const AyahOptionsNav = () => {
  const dispatch = useAppDispatch();
  const [value, copy] = useCopyToClipboard();
  const [successCopyAyah, setSuccessCopyAyah] = useState(false);
  const [successCopyTranslation, setSuccessCopyTranslation] = useState(false);
  const isAyahOptionsOpen = useAppSelector(
    (state) => state.globalOrders.isAyahOptionsOpen
  );

  const textType = useAppSelector((state) => state.setting.textType);
  const translationName = useAppSelector(
    (state) => state.setting.translationName
  );
  const selectedAyah = useAppSelector(
    (state) => state.globalOrders.selectedAyah
  );

  const quranSimpleText = useAppSelector(
    (state) => state.resources.quranSimpleText
  );
  const quranSimpleMinText = useAppSelector(
    (state) => state.resources.quranSimpleMinText
  );
  const quranUthmaniText = useAppSelector(
    (state) => state.resources.quranUthmaniText
  );
  const quranSafaviTranslation = useAppSelector(
    (state) => state.resources.quranSafaviTranslation
  );
  const quranFooladVandTranslation = useAppSelector(
    (state) => state.resources.quranFooladVandTranslation
  );
  const quranGhomsheiTranslation = useAppSelector(
    (state) => state.resources.quranGhomsheiTranslation
  );
  const quranMakaremTranslation = useAppSelector(
    (state) => state.resources.quranMakaremTranslation
  );

  const ayahCopyOnClickHandler = () => {
    switch (textType) {
      case "quranSimple":
        copy(quranSimpleText[selectedAyah]);
        break;
      case "quranSimpleMin":
        copy(quranSimpleMinText[selectedAyah]);
        break;
      case "quranUthmani":
        copy(quranUthmaniText[selectedAyah]);
        break;
    }
    dispatch(globalOrdersActions.setIsAyahOptionsOpen(false));
    setSuccessCopyAyah(true);
    setTimeout(() => {
      setSuccessCopyAyah(false);
    }, 2500);
  };

  const translationCopyOnClickHandler = () => {
    switch (translationName) {
      case "safavi":
        copy(quranSafaviTranslation[selectedAyah]);
        break;
      case "fooladvand":
        copy(quranFooladVandTranslation[selectedAyah]);
        break;
      case "ghomshei":
        copy(quranGhomsheiTranslation[selectedAyah]);
        break;
      case "makarem":
        copy(quranMakaremTranslation[selectedAyah]);
        break;
    }
    dispatch(globalOrdersActions.setIsAyahOptionsOpen(false));
    setSuccessCopyTranslation(true);
    setTimeout(() => {
      setSuccessCopyTranslation(false);
    }, 2000);
  };

  return (
    <>
      <SuccessMessage
        successCopy={successCopyAyah}
        message="آیه با موفقیت کپی شد!"
      />
      <SuccessMessage
        successCopy={successCopyTranslation}
        message="ترجمه با موفقیت کپی شد!"
      />
      <div
        className={`AyahOptionsNav  ${
          isAyahOptionsOpen ? ["open"] : ["close"]
        }`}
      >
        <div className={`AyahOptionsNav-container`}>
          <div className="AyahOptionsNav-container-options">
            <div
              className="AyahOptionsNav-container-option"
              onClick={ayahCopyOnClickHandler}
            >
              <div>
                <Icon icon={copy20Regular} width={40} color="#444444" />
              </div>
              <div className="AyahOptionsNav-container-title">کپی آیه</div>
            </div>
            <div className="AyahOptionsNav-container-option">
              <div>
                <Icon icon={channelShare48Regular} width={40} color="#444444" />
              </div>
              <div className="AyahOptionsNav-container-title">
                {" "}
                اشتراک گذاری
              </div>
            </div>
            <div
              className="AyahOptionsNav-container-option"
              onClick={translationCopyOnClickHandler}
            >
              <div>
                <Icon icon={documentCopy20Regular} width={40} color="#444444" />
              </div>
              <div className="AyahOptionsNav-container-title">کپی ترجمه</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AyahOptionsNav;
