import "../../Styles/Components/Setting/TranslationName.scss";
import RadioButton from "./RadioButton";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { settingActions } from "../../store/settingSlice";
const TranslationName = () => {
  const dispatch = useAppDispatch();
  const translationName = useAppSelector(
    (state) => state.setting.translationName
  );
  const optionChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(settingActions.setTranslationName(e.target.value));
  };
  const optionOnClickHanlder = (input: string) => {
    dispatch(settingActions.setTranslationName(input));
  };
  return (
    <div className="TranslationName-container">
      <div className="TranslationName-title">انتخاب ترجمه:</div>
      <div className="TranslationName-options">
        <div
          className={`TranslationName-option ${
            translationName === "safavi" && ["active"]
          }`}
          onClick={() => optionOnClickHanlder("safavi")}
        >
          <RadioButton
            id="translationName-1"
            name="translationName"
            value={"safavi"}
            checked={translationName === "safavi"}
            onChange={optionChangeHandler}
          />
          <div
            className={`TranslationName-option-img ${
              translationName === "safavi" && ["active"]
            }`}
            id="safavi"
          ></div>
          <div className="TranslationName-option-title">انصاریان</div>
        </div>
        <div
          className={`TranslationName-option ${
            translationName === "fooladvand" && ["active"]
          }`}
          onClick={() => optionOnClickHanlder("fooladvand")}
        >
          <RadioButton
            id="translationName-2"
            name="translationName"
            value={"fooladvand"}
            checked={translationName === "fooladvand"}
            onChange={optionChangeHandler}
          />
          <div
            className={`TranslationName-option-img ${
              translationName === "fooladvand" && ["active"]
            }`}
            id="fooladvand"
          ></div>
          <div className="TranslationName-option-title">فولادوند</div>
        </div>
        <div
          className={`TranslationName-option ${
            translationName === "ghomshei" && ["active"]
          }`}
          onClick={() => optionOnClickHanlder("ghomshei")}
        >
          <RadioButton
            id="translationName-3"
            name="translationName"
            value={"ghomshei"}
            checked={translationName === "ghomshei"}
            onChange={optionChangeHandler}
          />
          <div
            className={`TranslationName-option-img ${
              translationName === "ghomshei" && ["active"]
            }`}
            id="ghomshei"
          ></div>
          <div className="TranslationName-option-title">قمشه ای</div>
        </div>
        <div
          className={`TranslationName-option ${
            translationName === "makarem" && ["active"]
          }`}
          onClick={() => optionOnClickHanlder("makarem")}
        >
          <RadioButton
            id="translationName-4"
            name="translationName"
            value={"makarem"}
            checked={translationName === "makarem"}
            onChange={optionChangeHandler}
          />
          <div
            className={`TranslationName-option-img ${
              translationName === "makarem" && ["active"]
            }`}
            id="makarem"
          ></div>
          <div className="TranslationName-option-title">مکارم شیرازی</div>
        </div>
      </div>
    </div>
  );
};
export default TranslationName;
