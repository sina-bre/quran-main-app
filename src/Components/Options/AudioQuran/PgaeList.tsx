import { useState } from "react";
import "../../../Styles/Components/Options/AudioQuran/PageList.scss";
import toFaNumber from "../../Functions/toFa";
import AddLogo from "../../../Images/addLogo.png";
import { useNavigate } from "react-router-dom";
import useSetCurrent from "../../../Hooks/useSetCurrent";
import quranPages from "../../../Resources/QuranMetaData/quranPages";
const PageList = () => {
  const navigate = useNavigate();
  const setCurrent = useSetCurrent();
  const [page, setPage] = useState<number | string>("");
  const [show, setShow] = useState(false);
  const searchPageOnchangeHandler = (value: number) => {
    if (Number(value) < 605 || Number(value) > 0) {
      setPage(Number(value));
      setShow(true);
    }
    if (Number(value) >= 605) {
      setPage(604);
      setShow(true);
    }
    if (Number(value) <= 0) {
      setPage("");
      setShow(false);
    }
  };
  const pageOnClickHandler = (page: number) => {
    setCurrent(quranPages[page].start);
  };
  return (
    <div className="PageList-container">
      <div className="search-page-div">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="شماره صفحه مورد نظر خود را وارد کنید"
          className="search-page-input"
          onChange={(e) => searchPageOnchangeHandler(Number(e.target.value))}
          value={page}
          dir="rtl"
        />
      </div>
      {show ? (
        <div className="PageList-item-container">
          <div
            className="PageList-item"
            onClick={() => pageOnClickHandler(Number(page))}
          >
            <div className="PageList-item-right">
              <div className="PageList-number">
                {toFaNumber(page.toString())}
              </div>
              <div className="PageList-desc">
                صفحه {toFaNumber(page.toString())}
              </div>
            </div>
            <div className="PageList-item-left">
              <div className="PageList-add">
                <img src={AddLogo} alt="AddLogo" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="PageList-off">
          شماره صفحه مورد نظر خود را وارد کنید تا از طریق لینک آن بتوانید به بخش
          مورد نظر بروید.
        </div>
      )}
    </div>
  );
};

export default PageList;
