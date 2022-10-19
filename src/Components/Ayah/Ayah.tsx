import Ayahtext from "./AyahText";
import AyahTranslation from "./AyahTranslation";

const Ayah: React.FC<{ index: number }> = (props) => {
  const ayahIndex = props.index;
  return (
    <div>
      <Ayahtext index={ayahIndex} />
      <AyahTranslation index={ayahIndex} />
    </div>
  );
};
export default Ayah;
