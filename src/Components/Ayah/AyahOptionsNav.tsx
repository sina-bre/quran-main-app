import "../../Styles/Components/Ayah/AyahOptionsNav.scss";
import { Icon } from "@iconify/react";
import copy20Regular from "@iconify/icons-fluent/copy-20-regular";
import documentCopy20Regular from "@iconify/icons-fluent/document-copy-20-regular";
import channelShare48Regular from "@iconify/icons-fluent/channel-share-48-regular";
import { useAppSelector } from "../../Hooks/useAppSelector";
import useCopyToClipboard from "../../Hooks/useCopyToClipboard";
import { useEffect, useState } from "react";
const AyahOptionsNav = () => {
  const [value, copy] = useCopyToClipboard();
  const [ayahTextTemp, setAyahTextTemp] = useState("");
  const [ayahTranslationTemp, setAyahTranslationTemp] = useState("");
  const isAyahOptionsOpen = useAppSelector(
    (state) => state.globalOrders.isAyahOptionsOpen
  );
  // const currentAyah = useAppSelector((state) => state.current.currentAyah);
  const textType = useAppSelector((state) => state.setting.textType);
  const translationName = useAppSelector(
    (state) => state.setting.translationName
  );
  const selectedAyah = useAppSelector(
    (state) => state.globalOrders.selectedAyah
  );
  const ayahCopyOnClickHandler = () => {
    copy(ayahTextTemp);
  };
  const translationCopyOnClickHandler = () => {
    copy(ayahTranslationTemp);
  };
  useEffect(() => {
    switch (textType) {
      case "quranSimple":
        import("../../Resources/Texts/quranSimple")
          .then((res) => res.default)
          .then((res) => {
            setAyahTextTemp(res[selectedAyah]);
          });
        break;
      case "quranSimpleMin":
        import("../../Resources/Texts/quranSimpleMin")
          .then((res) => res.default)
          .then((res) => {
            setAyahTextTemp(res[selectedAyah]);
          });
        break;
      case "quranUthmani":
        import("../../Resources/Texts/quranUthmani")
          .then((res) => res.default)
          .then((res) => {
            setAyahTextTemp(res[selectedAyah]);
          });
        break;
    }
  }, [textType, selectedAyah]);

  useEffect(() => {
    switch (translationName) {
      case "safavi":
        import("../../Resources/Translation/safaviTranslation")
          .then((res) => res.default)
          .then((res) => {
            setAyahTranslationTemp(res[selectedAyah]);
          });
        break;
      case "fooladvand":
        import("../../Resources/Translation/fooladvandTranslation")
          .then((res) => res.default)
          .then((res) => {
            setAyahTranslationTemp(res[selectedAyah]);
          });
        break;
      case "ghomshei":
        import("../../Resources/Translation/ghomsheiTranslation")
          .then((res) => res.default)
          .then((res) => {
            setAyahTranslationTemp(res[selectedAyah]);
          });
        break;
      case "makarem":
        import("../../Resources/Translation/makaremTranslation")
          .then((res) => res.default)
          .then((res) => {
            setAyahTranslationTemp(res[selectedAyah]);
          });
        break;
    }
  }, [translationName, selectedAyah]);
  return (
    <div
      className={`AyahOptionsNav  ${isAyahOptionsOpen ? ["open"] : ["close"]}`}
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
            <div className="AyahOptionsNav-container-title"> اشتراک گذاری</div>
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
  );
};
export default AyahOptionsNav;
