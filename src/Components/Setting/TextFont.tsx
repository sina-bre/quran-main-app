import "../../Styles/Components/Setting/TextFont.scss";
import RadioButton from "./RadioButton";
const TextFont = () => {
  return (
    <div className="TextFont-container">
      <div className="TextFont-title">انتخاب فونت:</div>
      <div className="TextFont-options">
        <div className="TextFont-option">
          <RadioButton id="textFont-1" name="textFont" />
          <div className="TextFont-option-title">قرآن من</div>
        </div>
        <div className="TextFont-option">
          <RadioButton id="textFont-2" name="textFont" />
          <div className="TextFont-option-title">قرآن طاها</div>
        </div>
        <div className="TextFont-option">
          <RadioButton id="textFont-3" name="textFont" />
          <div className="TextFont-option-title">ایران سنس</div>
        </div>
        <div className="TextFont-option">
          <RadioButton id="textFont-4" name="textFont" />
          <div className="TextFont-option-title">ایران یکان</div>
        </div>
      </div>
    </div>
  );
};
export default TextFont;
