import "../../Styles/Components/Setting/Setting.scss";
import React from "react";
const AyahTextSetting = React.lazy(() => import("./AyahTextSetting"));
const TranslationTextSetting = React.lazy(
  () => import("./TranslationTextSetting")
);

const Setting = () => {
  return (
    <div className="Setting-container">
      <div className="AyahTextSetting-head">متن آیه</div>
      <AyahTextSetting />
      <div className="TranslationTextSetting-head">متن ترجمه</div>
      <TranslationTextSetting />
    </div>
  );
};

export default Setting;
