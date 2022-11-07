import "../../Styles/Components/Setting/TextFont.scss";
import RadioButton from "./RadioButton";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { settingActions } from "../../store/settingSlice";

const TextFont = () => {
  const dispatch = useAppDispatch();
  const textFont = useAppSelector((state) => state.setting.textFont);
  const optionChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(settingActions.setTextFont(e.target.value));
  };

  return (
    <div className="TextFont-container">
      <div className="TextFont-title">انتخاب فونت:</div>
      <div className="TextFont-options">
        <div className="TextFont-option">
          <RadioButton
            id="textFont-1"
            name="textFont"
            value={"Simple"}
            checked={textFont === "Simple"}
            onChange={optionChangeHandler}
          />
          <div className="TextFont-option-title"> ساده</div>
        </div>
        <div className="TextFont-option">
          <RadioButton
            id="textFont-2"
            name="textFont"
            value={"Simple2"}
            checked={textFont === "Simple2"}
            onChange={optionChangeHandler}
          />
          <div className="TextFont-option-title"> ساده ۲</div>
        </div>
        <div className="TextFont-option">
          <RadioButton
            id="textFont-3"
            name="textFont"
            value={"Muhammad"}
            checked={textFont === "Muhammad"}
            onChange={optionChangeHandler}
          />
          <div className="TextFont-option-title"> محمد(ص)</div>
        </div>

        <div className="TextFont-option">
          <RadioButton
            id="textFont-4"
            name="textFont"
            value={"UthmanTaha"}
            checked={textFont === "UthmanTaha"}
            onChange={optionChangeHandler}
          />
          <div className="TextFont-option-title">عثمان طاها</div>
        </div>

        <div className="TextFont-option">
          <RadioButton
            id="textFont-5"
            name="textFont"
            value={"MeQuran"}
            checked={textFont === "MeQuran"}
            onChange={optionChangeHandler}
          />
          <div className="TextFont-option-title"> قرآن من</div>
        </div>

        <div className="TextFont-option">
          <RadioButton
            id="textFont-6"
            name="textFont"
            value={"QuranTaha"}
            checked={textFont === "QuranTaha"}
            onChange={optionChangeHandler}
          />
          <div className="TextFont-option-title">قرآن طاها</div>
        </div>
      </div>
    </div>
  );
};
export default TextFont;
