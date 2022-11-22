import React, { useEffect, useState } from "react";
import "../../Styles/Components/Ayah/AyahText.scss";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { resourcesActions } from "../../store/resourcesSlice";
import { useAppSelector } from "../../Hooks/useAppSelector";

const Ayahtext: React.FC<{ index: number }> = (props) => {
  const dispatch = useAppDispatch();
  const [ayahTextTemp, setAyahTextTemp] = useState("");
  const textFont = useAppSelector((state) => state.setting.textFont);
  const textType = useAppSelector((state) => state.setting.textType);
  const textWeight = useAppSelector((state) => state.setting.textWeight);
  const textSize = useAppSelector((state) => state.setting.textSize);
  const currentAyah = useAppSelector((state) => state.current.currentAyah);
  // const ayahTextStyle = {
  //   fontSize: textSize,
  // };

  const quranSimpleText = useAppSelector(
    (state) => state.resources.quranSimpleText
  );
  const quranSimpleMinText = useAppSelector(
    (state) => state.resources.quranSimpleMinText
  );
  const quranUthmaniText = useAppSelector(
    (state) => state.resources.quranUthmaniText
  );

  useEffect(() => {
    switch (textType) {
      case "quranSimple":
        if (!quranSimpleText) {
          import("../../Resources/Texts/quranSimple")
            .then((res) => res.default)
            .then((res) => dispatch(resourcesActions.setQuranSimpleText(res)))
            .then(() => {
              setAyahTextTemp(quranSimpleText[props.index]);
            });
        } else {
          setAyahTextTemp(quranSimpleText[props.index]);
        }
        break;
      case "quranSimpleMin":
        if (!quranSimpleMinText) {
          import("../../Resources/Texts/quranSimpleMin")
            .then((res) => res.default)
            .then((res) =>
              dispatch(resourcesActions.setQuranSimpleMinText(res))
            )
            .then(() => {
              setAyahTextTemp(quranSimpleMinText[props.index]);
            });
        } else {
          setAyahTextTemp(quranSimpleMinText[props.index]);
        }
        break;
      case "quranUthmani":
        if (!quranUthmaniText) {
          import("../../Resources/Texts/quranUthmani")
            .then((res) => res.default)
            .then((res) => dispatch(resourcesActions.setQuranUthmaniText(res)))
            .then(() => {
              setAyahTextTemp(quranUthmaniText[props.index]);
            });
        } else {
          setAyahTextTemp(quranUthmaniText[props.index]);
        }
        break;
    }
  }, [textType, currentAyah, ayahTextTemp]);

  return (
    <div
      style={{ fontSize: `${textSize}` }}
      className={`ayahText ${textFont}-${textWeight} ${
        textFont !== "Simple2" && textFont !== "Simple" && ["textAlign"]
      } ${props.index === currentAyah && ["active"]}`}
    >
      {ayahTextTemp}
    </div>
  );
};
export default Ayahtext;
