import "../../Styles/Components/Audio/Audio.scss";
import AudioControls from "./AudioControls";

const Audio = () => {
  return (
    <div className="Audio-container">
      <div className="Audio-container-inner">
        <div></div>
        <AudioControls />
        <div></div>
      </div>
    </div>
  );
};
export default Audio;
