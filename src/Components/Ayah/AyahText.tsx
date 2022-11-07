import React, { useEffect, useState } from "react";
import "../../Styles/Components/Ayah/AyahText.scss";
import { useAppSelector } from "../../Hooks/useAppSelector";
const Ayahtext: React.FC<{ index: number }> = (props) => {
  const [ayahTextTemp, setAyahTextTemp] = useState("");
  const textFont = useAppSelector((state) => state.setting.textFont);
  const textType = useAppSelector((state) => state.setting.textType);
  const textWeight = useAppSelector((state) => state.setting.textWeight);
  const textSize = useAppSelector((state) => state.setting.textSize);
  const ayahTextStyle = {
    fontSize: textSize,
  };

  useEffect(() => {
    switch (textType) {
      case "quranSimple":
        import("../../Resources/Texts/quranSimple")
          .then((res) => res.default)
          .then((res) => {
            setAyahTextTemp(res[props.index]);
          });
        break;
      case "quranSimpleMin":
        import("../../Resources/Texts/quranSimpleMin")
          .then((res) => res.default)
          .then((res) => {
            setAyahTextTemp(res[props.index]);
          });
        break;
      case "quranUthmani":
        import("../../Resources/Texts/quranUthmani")
          .then((res) => res.default)
          .then((res) => {
            setAyahTextTemp(res[props.index]);
          });
        break;
    }
  }, [textType]);

  return (
    <div
      style={ayahTextStyle}
      className={`ayahText ${textFont}-${textWeight} ${
        textFont !== "Simple2" && textFont !== "Simple" && ["textAlign"]
      }`}
    >
      {ayahTextTemp}
    </div>
  );
};
export default Ayahtext;
