import "../../Styles/Components/Setting/TranslationFont.scss";
import RadioButton from "./RadioButton";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { settingActions } from "../../store/settingSlice";

const TranslationFont = () => {
  const dispatch = useAppDispatch();
  const translationFont = useAppSelector(
    (state) => state.setting.translationFont
  );
  const optionChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(settingActions.setTranslationFont(e.target.value));
    localStorage.setItem("translationFont", e.target.value);
  };
  return (
    <div className="TranslationFont-container">
      <div className="TranslationFont-title">انتخاب فونت:</div>
      <div className="TranslationFont-options">
        <div className="TranslationFont-option">
          <RadioButton
            id="translationFont-1"
            name="translationFont"
            value={"IRANSans"}
            checked={translationFont === "IRANSans"}
            onChange={optionChangeHandler}
          />
          <div className="TranslationFont-option-title"> ایران سنس</div>
        </div>
        <div className="TranslationFont-option">
          <RadioButton
            id="translationFont-2"
            name="translationFont"
            value={"IRANYekan"}
            checked={translationFont === "IRANYekan"}
            onChange={optionChangeHandler}
          />
          <div className="TranslationFont-option-title"> ایران یکان</div>
        </div>
        <div className="TranslationFont-option">
          <RadioButton
            id="translationFont-3"
            name="translationFont"
            value={"IRANSansDn"}
            checked={translationFont === "IRANSansDn"}
            onChange={optionChangeHandler}
          />
          <div className="TranslationFont-option-title">ایران سنس دست نویس</div>
        </div>
        <div className="TranslationFont-option">
          <RadioButton
            id="translationFont-4"
            name="translationFont"
            value={"Vazir"}
            checked={translationFont === "Vazir"}
            onChange={optionChangeHandler}
          />
          <div className="TranslationFont-option-title">وزیر</div>
        </div>
      </div>
    </div>
  );
};
export default TranslationFont;
