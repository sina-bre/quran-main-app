import TafsirQuranOptionLogo from "../../Images/law-book.png";
import "../../Styles/Components/Options/TafsirQuranOption.scss";
const TafsirQuranOption = () => {
  return (
    <div className="TafsirQuranOption-container">
      <div className="TafsirQuranOption-img-div">
        <img src={TafsirQuranOptionLogo} alt="pagingQuranLogo" />
      </div>
      <div className="TafsirQuranOption-text">
        <div className="TafsirQuranOption-text-title">
          <p>تفسیر قرآن کریم</p>
        </div>
        <div className="TafsirQuranOption-text-subtitle">
          <p>آیات قرآن کریم به همراه معنی و تفسیر</p>
        </div>
      </div>
    </div>
  );
};
export default TafsirQuranOption;
