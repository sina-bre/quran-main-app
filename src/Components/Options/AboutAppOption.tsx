import AboutAppOptionLogo from "../../Images/information.png";
import "../../Styles/Components/Options/AboutAppOption.scss";
const AboutAppOption = () => {
  return (
    <div className="AboutAppOption-container">
      <div className="AboutAppOption-img-div">
        <img src={AboutAppOptionLogo} alt="pagingQuranLogo" />
      </div>
      <div className="AboutAppOption-text">
        <div className="AboutAppOption-text-title">
          <p>درباره نرم افزار</p>
        </div>
        <div className="AboutAppOption-text-subtitle">
          <p>راهنمایی ها و سوالات متداول</p>
        </div>
      </div>
    </div>
  );
};
export default AboutAppOption;
