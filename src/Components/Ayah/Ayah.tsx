import { useRef } from "react";
import useSetCurrent from "../../Hooks/useSetCurrent";
import Ayahtext from "./AyahText";
import AyahTranslation from "./AyahTranslation";

const Ayah: React.FC<{ index: number }> = (props) => {
  const ayahIndex = props.index;
  const ayahRef = useRef<HTMLDivElement>(null);
  const setCurrent = useSetCurrent();
  const ayahOnClickHandler = () => {
    setCurrent(ayahIndex);
  };
  return (
    <div onClick={ayahOnClickHandler} ref={ayahRef}>
      <Ayahtext index={ayahIndex} />
      <AyahTranslation index={ayahIndex} />
    </div>
  );
};
export default Ayah;
