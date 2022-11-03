import "../../Styles/Components/Setting/RadioButton.scss";
const RadioButton: React.FC<{ id: string; name: string }> = (props) => {
  const { id, name } = props;
  return (
    <div className="radio-conatiner">
      <div className="radio">
        <input id={id} name={name} type="radio" />
        <label htmlFor={id} className="radio-label"></label>
      </div>
    </div>
  );
};
export default RadioButton;
