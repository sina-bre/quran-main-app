import "../../Styles/Components/Setting/TextSize.scss";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { settingActions } from "../../store/settingSlice";

const TextSize = () => {
  const dispatch = useAppDispatch();
  const textSize = useAppSelector((state) => state.setting.textSize);
  const changeOnClickHandler = (input: string) => {
    dispatch(settingActions.setTextSize(input));
    localStorage.setItem("textSize", input);
  };
  return (
    <div className="TextSize-container">
      <div className="TextSize-title">انتخاب سایز:</div>
      <div className="TextSize-range-container">
        <div className="TextSize-range-shape">
          <div className="TextSize-range-line"></div>
          <div className="TextSize-range-items">
            <div
              className="TextSize-range-item"
              onClick={() => changeOnClickHandler("22px")}
            >
              <div className="TextSize-firstdot">
                <div className="TextSize-before-firstdot"></div>
                <div
                  className={`TextSize-range-dot ${
                    textSize === "22px" && ["active"]
                  }`}
                ></div>
              </div>
              <div
                className={`TextSize-range-title ${
                  textSize === "22px" && ["active"]
                }`}
              >
                بسیار کوچک
              </div>
            </div>

            <div
              className="TextSize-range-item"
              onClick={() => changeOnClickHandler("24px")}
            >
              <div
                className={`TextSize-range-dot ${
                  textSize === "24px" && ["active"]
                }`}
              ></div>
              <div
                className={`TextSize-range-title ${
                  textSize === "24px" && ["active"]
                }`}
              >
                کوچک
              </div>
            </div>

            <div
              className="TextSize-range-item"
              onClick={() => changeOnClickHandler("26px")}
            >
              <div
                className={`TextSize-range-dot ${
                  textSize === "26px" && ["active"]
                }`}
              ></div>
              <div
                className={`TextSize-range-title ${
                  textSize === "26px" && ["active"]
                }`}
              >
                متوسط
              </div>
            </div>

            <div
              className="TextSize-range-item"
              onClick={() => changeOnClickHandler("28px")}
            >
              <div
                className={`TextSize-range-dot ${
                  textSize === "28px" && ["active"]
                }`}
              ></div>
              <div
                className={`TextSize-range-title ${
                  textSize === "28px" && ["active"]
                }`}
              >
                بزرگ
              </div>
            </div>

            <div
              className="TextSize-range-item"
              onClick={() => changeOnClickHandler("30px")}
            >
              <div className="TextSize-lastdot">
                <div className="TextSize-after-lastdot"></div>
                <div
                  className={`TextSize-range-dot ${
                    textSize === "30px" && ["active"]
                  }`}
                ></div>
              </div>
              <div
                className={`TextSize-range-title ${
                  textSize === "30px" && ["active"]
                }`}
              >
                بسیار بزرگ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextSize;
