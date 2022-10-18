import BookmarksOptionLogo from "../../../Images/bookmark.png";
import "../../../Styles/Components/Options/MainPage/BookmarksOption.scss";
const BookmarksOption = () => {
  return (
    <div className="BookmarksOption-container">
      <div className="BookmarksOption-img-div">
        <img src={BookmarksOptionLogo} alt="pagingQuranLogo" />
      </div>
      <div className="BookmarksOption-text">
        <div className="BookmarksOption-text-title">
          <p>نشان ها</p>
        </div>
        <div className="BookmarksOption-text-subtitle">
          <p>آیات نشان شده قرآن کریم</p>
        </div>
      </div>
    </div>
  );
};
export default BookmarksOption;
