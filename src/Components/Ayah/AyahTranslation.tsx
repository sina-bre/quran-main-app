import "../../Styles/Components/Ayah/AyahTranslation.scss";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../Hooks/useAppSelector";
const AyahTranslation: React.FC<{ index: number }> = (props) => {
  const [ayahTranslationTemp, setAyahTranslationTemp] = useState("");
  const translationFont = useAppSelector(
    (state) => state.setting.translationFont
  );
  const translationName = useAppSelector(
    (state) => state.setting.translationName
  );
  const translationWeight = useAppSelector(
    (state) => state.setting.translationWeight
  );
  const translationSize = useAppSelector(
    (state) => state.setting.translationSize
  );
  const ayahTranslationStyle = {
    fontSize: translationSize,
  };
  const currentAyah = useAppSelector((state) => state.current.currentAyah);
  useEffect(() => {
    switch (translationName) {
      case "safavi":
        import("../../Resources/Translation/safaviTranslation")
          .then((res) => res.default)
          .then((res) => {
            setAyahTranslationTemp(res[props.index]);
          });
        break;
      case "fooladvand":
        import("../../Resources/Translation/fooladvandTranslation")
          .then((res) => res.default)
          .then((res) => {
            setAyahTranslationTemp(res[props.index]);
          });
        break;
      case "ghomshei":
        import("../../Resources/Translation/ghomsheiTranslation")
          .then((res) => res.default)
          .then((res) => {
            setAyahTranslationTemp(res[props.index]);
          });
        break;
      case "makarem":
        import("../../Resources/Translation/makaremTranslation")
          .then((res) => res.default)
          .then((res) => {
            setAyahTranslationTemp(res[props.index]);
          });
        break;
    }
  }, [translationName, currentAyah]);
  return (
    <div
      style={ayahTranslationStyle}
      className={`AyahTranslation ${translationFont}-${translationWeight}`}
    >
      {ayahTranslationTemp}
      {}.
    </div>
  );
};
export default AyahTranslation;
