import "../../Styles/Components/Setting/AudioSetting.scss";
import AutoNextAyahPlay from "./AutoNextAyahPlay";
import ReciterName from "./ReciterName";
const AudioSetting = () => {
  return (
    <div className="AudioSetting-container">
      <ReciterName />
      <div className="moreSetting-title">تنظیمات بیشتر</div>
      <AutoNextAyahPlay />
    </div>
  );
};
export default AudioSetting;
