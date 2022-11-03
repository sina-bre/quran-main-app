import "../../Styles/Components/Setting/TextType.scss";
import RadioButton from "./RadioButton";
const TextType = () => {
  return (
    <div className="TextType-container">
      <div className="TextType-title"> انتخاب نوع متن:</div>
      <div className="TextType-options">
        <div className="TextType-option">
          <RadioButton id="TextType-1" name="TextType" />
          <div className="TextType-option-title">ساده</div>
        </div>
        <div className="TextType-option">
          <RadioButton id="TextType-2" name="TextType" />
          <div className="TextType-option-title">ساده (کم علامت)</div>
        </div>
        <div className="TextType-option">
          <RadioButton id="TextType-3" name="TextType" />
          <div className="TextType-option-title">عثمان طاها</div>
        </div>
        <div className="TextType-option">
          <RadioButton id="TextType-4" name="TextType" />
          <div className="TextType-option-title">عثمان طاها (کم علامت)</div>
        </div>
      </div>
    </div>
  );
};
export default TextType;
