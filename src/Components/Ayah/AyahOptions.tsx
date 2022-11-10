import "../../Styles/Components/Ayah/AyahOptions.scss";
import { Icon } from "@iconify/react";
import circleMenu from "@iconify/icons-system-uicons/circle-menu";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { globalOrdersActions } from "../../store/globalOrdersSlice";

const AyahOptions: React.FC<{ index: number }> = (props) => {
  const disptach = useAppDispatch();
  const optionsOnClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    disptach(globalOrdersActions.setIsAyahOptionsOpen(true));
    disptach(globalOrdersActions.setSelectedAyah(props.index));
  };
  return (
    <div className="AyahOptions" onClick={(e) => optionsOnClickHandler(e)}>
      <Icon icon={circleMenu} color="#2D3F50" width="40px" />
    </div>
  );
};
export default AyahOptions;
