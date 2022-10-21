import useAudio from "../../Hooks/useAudio";
const AyahAudio: React.FC<{ url: string }> = (props) => {
  const url = props.url;
  const [playing, toggle] = useAudio(url);
  return (
    <div>
      {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
    </div>
  );
};

export default AyahAudio;
