import "../../Styles/Components/Setting/ToggleSwitch.scss";
const ToggleSwitch = () => {
  return (
    <div className="ToggleSwitch-container">
      <input type="checkbox" id="switch" className="ToggleSwitch" />
      <label htmlFor="switch" className="ToggleSwitch-label">
        Toggle
      </label>
    </div>
  );
};
export default ToggleSwitch;
