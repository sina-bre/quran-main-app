import React, { useRef } from "react";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import useSetCurrent from "../../Hooks/useSetCurrent";
import { globalOrdersActions } from "../../store/globalOrdersSlice";
import AyahTranslation from "./AyahTranslation";
const Ayahtext = React.lazy(() => import("../Ayah/AyahText"));
// const AyahTranslation = React.lazy(() => import("../Ayah/AyahTranslation"));

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
    <div onClick={ayahOnClickHandler} ref={ayahRef}>
      <Ayahtext index={ayahIndex} />
      <AyahTranslation index={ayahIndex} />
    </div>
  );
};
export default Ayah;
