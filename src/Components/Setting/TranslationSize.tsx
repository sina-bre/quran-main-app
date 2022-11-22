import "../../Styles/Components/Setting/TranslationSize.scss";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { settingActions } from "../../store/settingSlice";
const TranslationSize = () => {
  const dispatch = useAppDispatch();
  const translationSize = useAppSelector(
    (state) => state.setting.translationSize
  );
  const changeOnClickHandler = (input: string) => {
    dispatch(settingActions.setTranslationSize(input));
    localStorage.setItem("translationSize", input);
  };

  return (
    <div className="TranslationSize-container">
      <div className="TranslationSize-title">انتخاب سایز:</div>
      <div className="TranslationSize-range-container">
        <div className="TranslationSize-range-shape">
          <div className="TranslationSize-range-line"></div>
          <div className="TranslationSize-range-items">
            <div
              className="TranslationSize-range-item"
              onClick={() => changeOnClickHandler("15px")}
            >
              <div className="TranslationSize-firstdot">
                <div className="TranslationSize-before-firstdot"></div>
                <div
                  className={`TranslationSize-range-dot ${
                    translationSize === "15px" && ["active"]
                  }`}
                ></div>
              </div>
              <div
                className={`TranslationSize-range-title ${
                  translationSize === "15px" && ["active"]
                }`}
              >
                بسیار کوچک
              </div>
            </div>

            <div
              className="TranslationSize-range-item"
              onClick={() => changeOnClickHandler("17px")}
            >
              <div
                className={`TranslationSize-range-dot ${
                  translationSize === "17px" && ["active"]
                }`}
              ></div>
              <div
                className={`TranslationSize-range-title ${
                  translationSize === "17px" && ["active"]
                }`}
              >
                کوچک
              </div>
            </div>

            <div
              className="TranslationSize-range-item"
              onClick={() => changeOnClickHandler("19px")}
            >
              <div
                className={`TranslationSize-range-dot ${
                  translationSize === "19px" && ["active"]
                }`}
              ></div>
              <div
                className={`TranslationSize-range-title ${
                  translationSize === "19px" && ["active"]
                }`}
              >
                متوسط
              </div>
            </div>

            <div
              className="TranslationSize-range-item"
              onClick={() => changeOnClickHandler("21px")}
            >
              <div
                className={`TranslationSize-range-dot ${
                  translationSize === "21px" && ["active"]
                }`}
              ></div>
              <div
                className={`TranslationSize-range-title ${
                  translationSize === "21px" && ["active"]
                }`}
              >
                بزرگ
              </div>
            </div>

            <div
              className="TranslationSize-range-item"
              onClick={() => changeOnClickHandler("23px")}
            >
              <div className="TranslationSize-lastdot">
                <div className="TranslationSize-after-lastdot"></div>
                <div
                  className={`TranslationSize-range-dot ${
                    translationSize === "23px" && ["active"]
                  }`}
                ></div>
              </div>
              <div
                className={`TranslationSize-range-title ${
                  translationSize === "23px" && ["active"]
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
export default TranslationSize;
