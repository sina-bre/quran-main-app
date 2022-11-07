import "../../Styles/Components/Ayah/Ayah.scss";
import React, { useRef } from "react";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import useSetCurrent from "../../Hooks/useSetCurrent";
import { globalOrdersActions } from "../../store/globalOrdersSlice";
import AyahNumber from "./AyahNumber";
import AyahTranslation from "./AyahTranslation";
const Ayahtext = React.lazy(() => import("../Ayah/AyahText"));

const Ayah: React.FC<{ index: number }> = (props) => {
  const dispatch = useAppDispatch();
  const ayahIndex = props.index;
  const ayahRef = useRef<HTMLDivElement>(null);
  const setCurrent = useSetCurrent();
  const ayahOnClickHandler = () => {
    setCurrent(ayahIndex);
    dispatch(globalOrdersActions.setIsPlaying(true));
  };
  return (
    <div onClick={ayahOnClickHandler} ref={ayahRef} className="Ayah-container">
      <div className="Ayah-container-right">
        <Ayahtext index={ayahIndex} />
        <AyahTranslation index={ayahIndex} />
      </div>
      <div className="Ayah-container-left">
        <AyahNumber index={ayahIndex} />
      </div>
    </div>
  );
};
export default Ayah;
