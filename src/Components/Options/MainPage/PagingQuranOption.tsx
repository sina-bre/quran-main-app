import "../../../Styles/Components/Options/MainPage/PagingQuranOption.scss";
import PagingQuranLogo from "../../../Images/open-book.png";
const PagingQuranOption = () => {
  return (
    <div className="PagingQuranOption-container">
      <div className="PagingQuranOption-img-div">
        <img src={PagingQuranLogo} alt="pagingQuranLogo" />
      </div>
      <div className="PagingQuranOption-text">
        <div className="PagingQuranOption-text-title">
          <p>قرآن صفحه ای</p>
        </div>
        <div className="PagingQuranOption-text-subtitle">
          <p>قرآن صفحه به صفحه به همراه صوت</p>
        </div>
      </div>
    </div>
  );
};
export default PagingQuranOption;
