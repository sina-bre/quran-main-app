import { useRef } from "react";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import useSetCurrent from "../../Hooks/useSetCurrent";
import { globalOrdersActions } from "../../store/globalOrdersSlice";
import Ayahtext from "./AyahText";
import AyahTranslation from "./AyahTranslation";

const Ayah: React.FC<{ index: number }> = (props) => {
  const dispatch = useAppDispatch();
  const isChanging = useAppSelector((state) => state.globalOrders.isCahnging);
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
