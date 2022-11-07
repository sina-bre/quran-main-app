import "../../Styles/Components/Setting/AyahTextSetting.scss";
import React from "react";
import TextFont from "./TextFont";
import TextSize from "./TextSize";
import TextType from "./TextType";
import TextWeight from "./TextWeight";
const AyahText = React.lazy(() => import("../Ayah/AyahText"));

const AyahTextSetting = () => {
  return (
    <div className="AyahTextSetting-container">
      <TextFont />
      <TextType />
      <TextWeight />
      <TextSize />
      <div className="AyahTextSetting-AyahText-container">
        <AyahText index={4314} />
      </div>
    </div>
  );
};
export default AyahTextSetting;
