import "../../Styles/Components/Setting/TextType.scss";
import RadioButton from "./RadioButton";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { settingActions } from "../../store/settingSlice";
import { useEffect } from "react";
const TextType = () => {
  const dispatch = useAppDispatch();
  const textType = useAppSelector((state) => state.setting.textType);
  const optionChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(settingActions.setTextType(e.target.value));
    localStorage.setItem("textType", e.target.value);
  };
  useEffect(() => {
    console.log(textType);
  }, [textType]);
  return (
    <div className="TextType-container">
      <div className="TextType-title"> انتخاب نوع متن:</div>
      <div className="TextType-options">
        <div className="TextType-option">
          <RadioButton
            id="TextType-1"
            name="TextType"
            value="quranSimple"
            checked={textType === "quranSimple"}
            onChange={optionChangeHandler}
          />
          <div className="TextType-option-title">ساده</div>
        </div>
        <div className="TextType-option">
          <RadioButton
            id="TextType-2"
            name="TextType"
            value="quranSimpleMin"
            checked={textType === "quranSimpleMin"}
            onChange={optionChangeHandler}
          />
          <div className="TextType-option-title">ساده (کم علامت)</div>
        </div>
        <div className="TextType-option">
          <RadioButton
            id="TextType-3"
            name="TextType"
            value="quranUthmani"
            checked={textType === "quranUthmani"}
            onChange={optionChangeHandler}
          />
          <div className="TextType-option-title">عثمان طاها</div>
        </div>
      </div>
    </div>
  );
};
export default TextType;
