import "../../Styles/Components/Options/AudioQuranOption.scss";
import AudioQuranOptionLogo from "../../Images/12.png";
const AudioQuranOption = () => {
  return (
    <div className="AudioQuranOption-container">
      <div className="AudioQuranOption-right">
        <div className="AudioQuranOption-title">
          <p>قرآن صوتی</p>
        </div>
        <div className="AudioQuranOption-subtitle">
          <p>متن قرآن کریم به همراه ترجمه آیات و امکان پخش آیه</p>
        </div>
      </div>
      <div className="AudioQuranOption-img-div">
        <img src={AudioQuranOptionLogo} alt="quranLogo" />
      </div>
    </div>
  );
};
export default AudioQuranOption;
