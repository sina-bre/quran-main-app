import "../../Styles/Components/Setting/TranslationWeight.scss";
import RadioButton from "./RadioButton";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { settingActions } from "../../store/settingSlice";
const TranslationWeight = () => {
  const disptach = useAppDispatch();
  const translationWeight = useAppSelector(
    (state) => state.setting.translationWeight
  );
  const optionChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    disptach(settingActions.settranslationWeight(e.target.value));
  };
  return (
    <div className="TranslationWeight-container">
      <div className="TranslationWeight-title">انتخاب وزن:</div>
      <div className="TranslationWeight-options">
        <div className="TranslationWeight-option">
          <RadioButton
            id="translationWeight-1"
            name="translationWeight"
            value={"light"}
            checked={translationWeight === "light"}
            onChange={optionChangeHandler}
          />
          <div className="TranslationWeight-option-title">نازک</div>
        </div>
        <div className="TranslationWeight-option">
          <RadioButton
            id="translationWeight-2"
            name="translationWeight"
            value={"normal"}
            checked={translationWeight === "normal"}
            onChange={optionChangeHandler}
          />
          <div className="TranslationWeight-option-title">متوسط</div>
        </div>
        <div className="TranslationWeight-option">
          <RadioButton
            id="translationWeight-3"
            name="translationWeight"
            value={"bold"}
            checked={translationWeight === "bold"}
            onChange={optionChangeHandler}
          />
          <div className="TranslationWeight-option-title">ضخیم</div>
        </div>
      </div>
    </div>
  );
};
export default TranslationWeight;
