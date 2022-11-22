import "../../Styles/Components/Setting/TextWeight.scss";
import RadioButton from "./RadioButton";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { settingActions } from "../../store/settingSlice";
const TextWeight = () => {
  const disptach = useAppDispatch();
  const textWeight = useAppSelector((state) => state.setting.textWeight);
  const optionChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    disptach(settingActions.setTextWeight(e.target.value));
    localStorage.setItem("textWeight", e.target.value);
  };
  return (
    <div className="TextWeight-container">
      <div className="TextWeight-title">انتخاب وزن:</div>
      <div className="TextWeight-options">
        <div className="TextWeight-option">
          <RadioButton
            id="textWeight-1"
            name="textWeight"
            value={"thin"}
            checked={textWeight === "thin"}
            onChange={optionChangeHandler}
          />
          <div className="TextWeight-option-title">نازک</div>
        </div>
        <div className="TextWeight-option">
          <RadioButton
            id="textWeight-2"
            name="textWeight"
            value={"normal"}
            checked={textWeight === "normal"}
            onChange={optionChangeHandler}
          />
          <div className="TextWeight-option-title">متوسط</div>
        </div>
        <div className="TextWeight-option">
          <RadioButton
            id="textWeight-3"
            name="textWeight"
            value={"bold"}
            checked={textWeight === "bold"}
            onChange={optionChangeHandler}
          />
          <div className="TextWeight-option-title">ضخیم</div>
        </div>
      </div>
    </div>
  );
};
export default TextWeight;
