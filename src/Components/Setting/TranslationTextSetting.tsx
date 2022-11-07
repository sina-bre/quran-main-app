import React from "react";
import "../../Styles/Components/Setting/TranslationTextSetting.scss";
import TranslationFont from "./TranslationFont";
import TranslationName from "./TranslationName";
import TranslationSize from "./TranslationSize";
import TranslationWeight from "./TranslationWeight";
const AyahTranslation = React.lazy(() => import("../Ayah/AyahTranslation"));

const TranslationTextSetting = () => {
  return (
    <div className="TranslationTextSetting-container">
      <TranslationFont />
      <TranslationName />
      <TranslationWeight />
      <TranslationSize />
      <div className="TranslationTextSetting-AyahTranslation-container">
        <AyahTranslation index={4314} />
      </div>
    </div>
  );
};
export default TranslationTextSetting;
