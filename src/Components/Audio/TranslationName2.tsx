import "../../Styles/Components/Audio/TranslationName2.scss";
import RadioButton from "../Setting/RadioButton";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { settingActions } from "../../store/settingSlice";
const TranslationName2: React.FC<{ openTranslations: boolean }> = (props) => {
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
    <div
      className={`TranslationName2 ${
        props.openTranslations ? ["open"] : ["close"]
      }`}
    >
      <div className={`TranslationName2-container`}>
        <div className="TranslationName2-title">انتخاب ترجمه:</div>
        <div className="TranslationName2-options">
          <div
            className={`TranslationName2-option ${
              translationName === "safavi" && ["active"]
            }`}
            onClick={() => optionOnClickHanlder("safavi")}
          >
            <RadioButton
              id="TranslationName2-1"
              name="TranslationName2"
              value={"safavi"}
              checked={translationName === "safavi"}
              onChange={optionChangeHandler}
            />
            <div
              className={`TranslationName2-option-img ${
                translationName === "safavi" && ["active"]
              } safavi`}
              id="safavi"
            ></div>
            <div className="TranslationName2-option-title">صفوی</div>
          </div>
          <div
            className={`TranslationName2-option ${
              translationName === "fooladvand" && ["active"]
            }`}
            onClick={() => optionOnClickHanlder("fooladvand")}
          >
            <RadioButton
              id="TranslationName2-2"
              name="TranslationName2"
              value={"fooladvand"}
              checked={translationName === "fooladvand"}
              onChange={optionChangeHandler}
            />
            <div
              className={`TranslationName2-option-img ${
                translationName === "fooladvand" && ["active"]
              } fooladvand`}
              id="fooladvand"
            ></div>
            <div className="TranslationName2-option-title">فولادوند</div>
          </div>
          <div
            className={`TranslationName2-option ${
              translationName === "ghomshei" && ["active"]
            }`}
            onClick={() => optionOnClickHanlder("ghomshei")}
          >
            <RadioButton
              id="TranslationName2-3"
              name="TranslationName2"
              value={"ghomshei"}
              checked={translationName === "ghomshei"}
              onChange={optionChangeHandler}
            />
            <div
              className={`TranslationName2-option-img ${
                translationName === "ghomshei" && ["active"]
              } ghomshei`}
              id="ghomshei"
            ></div>
            <div className="TranslationName2-option-title">قمشه ای</div>
          </div>
          <div
            className={`TranslationName2-option ${
              translationName === "makarem" && ["active"]
            }`}
            onClick={() => optionOnClickHanlder("makarem")}
          >
            <RadioButton
              id="TranslationName2-4"
              name="TranslationName2"
              value={"makarem"}
              checked={translationName === "makarem"}
              onChange={optionChangeHandler}
            />
            <div
              className={`TranslationName2-option-img ${
                translationName === "makarem" && ["active"]
              } makarem`}
              id="makarem"
            ></div>
            <div className="TranslationName2-option-title">مکارم شیرازی</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TranslationName2;
