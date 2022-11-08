import "../../Styles/Components/Setting/Setting.scss";
import React from "react";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-akar-icons/arrow-right";
import { useNavigate } from "react-router-dom";
const AyahTextSetting = React.lazy(() => import("./AyahTextSetting"));
const TranslationTextSetting = React.lazy(
  () => import("./TranslationTextSetting")
);

const Setting = () => {
  const navigate = useNavigate();
  const backArrowOnClick = () => {
    navigate(-1);
  };
  return (
    <div className="Setting-container">
      <div className="Setting-topic-container">
        <div className="Setting-topic-arrow" onClick={backArrowOnClick}>
          <Icon icon={arrowRight} color="#2D3F50" width={27} />
        </div>
        <div className="Setting-topic">تنظیمات</div>
        <div className="Setting-topic-empty"></div>
      </div>
      <div className="AyahTextSetting-head">متن آیه</div>
      <AyahTextSetting />
      <div className="TranslationTextSetting-head">متن ترجمه</div>
      <TranslationTextSetting />
    </div>
  );
};

export default Setting;
