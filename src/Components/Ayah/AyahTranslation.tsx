import "../../Styles/Components/Ayah/AyahTranslation.scss";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { resourcesActions } from "../../store/resourcesSlice";

const AyahTranslation: React.FC<{ index: number }> = (props) => {
  const dispatch = useAppDispatch();
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

  useEffect(() => {
    switch (translationName) {
      case "safavi":
        if (!quranSafaviTranslation) {
          import("../../Resources/Translation/safaviTranslation")
            .then((res) => res.default)
            .then((res) =>
              dispatch(resourcesActions.setQuranSafaviTranslation(res))
            )
            .then(() => {
              setAyahTranslationTemp(quranSafaviTranslation[props.index]);
            });
        } else {
          setAyahTranslationTemp(quranSafaviTranslation[props.index]);
        }
        break;
      case "fooladvand":
        if (!quranFooladVandTranslation) {
          import("../../Resources/Translation/fooladvandTranslation")
            .then((res) => res.default)
            .then((res) =>
              dispatch(resourcesActions.setQuranFooladVandTranslation(res))
            )
            .then(() => {
              setAyahTranslationTemp(quranFooladVandTranslation[props.index]);
            });
        } else {
          setAyahTranslationTemp(quranFooladVandTranslation[props.index]);
        }
        break;
      case "ghomshei":
        if (!quranGhomsheiTranslation) {
          import("../../Resources/Translation/ghomsheiTranslation")
            .then((res) => res.default)
            .then((res) =>
              dispatch(resourcesActions.setQuranGhomsheiTranslation(res))
            )
            .then(() => {
              setAyahTranslationTemp(quranGhomsheiTranslation[props.index]);
            });
        } else {
          setAyahTranslationTemp(quranGhomsheiTranslation[props.index]);
        }
        break;
      case "makarem":
        if (!quranMakaremTranslation) {
          import("../../Resources/Translation/makaremTranslation")
            .then((res) => res.default)
            .then((res) =>
              dispatch(resourcesActions.setQuranMakaremTranslation(res))
            )
            .then(() => {
              setAyahTranslationTemp(quranMakaremTranslation[props.index]);
            });
        } else {
          setAyahTranslationTemp(quranMakaremTranslation[props.index]);
        }
        break;
    }
  }, [translationName, currentAyah, ayahTranslationTemp]);
  return (
    <div
      style={{ fontSize: `${translationSize}` }}
      className={`AyahTranslation ${translationFont}-${translationWeight}`}
    >
      {ayahTranslationTemp}
      {}.
    </div>
  );
};
export default AyahTranslation;
