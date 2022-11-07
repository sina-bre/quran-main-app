import "../../Styles/Components/Setting/RadioButton.scss";
const RadioButton: React.FC<{
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  const { id, name, value, checked, onChange } = props;
  return (
    <div className="radio-conatiner">
      <div className="radio">
        <input
          id={id}
          name={name}
          type="radio"
          value={value}
          checked={checked}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor={id} className="radio-label"></label>
      </div>
    </div>
  );
};
export default RadioButton;
