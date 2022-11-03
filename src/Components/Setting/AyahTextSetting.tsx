import "../../Styles/Components/Setting/AyahTextSetting.scss";
import TextFont from "./TextFont";
import TextType from "./TextType";
const AyahTextSetting = () => {
  return (
    <div className="AyahTextSetting-container">
      <TextFont />
      <TextType />
    </div>
  );
};
export default AyahTextSetting;
