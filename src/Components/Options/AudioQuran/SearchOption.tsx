import SearchLogo from "../../../Images/search.png";
import "../../../Styles/Components/Options/AudioQuran/SearchOption.scss";
const SearchOption = () => {
  return (
    <div className="searchOption-container">
      <div className="searchOption-img">
        <img src={SearchLogo} alt="SearchLogo" />
      </div>
      <div className="searchOption-text">
        <p>لطفا کلمه مورد نظر خود را وارد کنید</p>
      </div>
    </div>
  );
};
export default SearchOption;
