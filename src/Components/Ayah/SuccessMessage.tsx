import "../../Styles/Components/Ayah/SuccessMessage.scss";
import { Icon } from "@iconify/react";
import circleCheck from "@iconify/icons-ep/circle-check";
const SuccessMessage: React.FC<{ successCopy: boolean; message: string }> = (
  props
) => {
  return (
    <div
      className={`SuccessMessage ${props.successCopy ? ["open"] : ["close"]}`}
    >
      <div className="SuccessMessage-conatiner">
        <Icon
          icon={circleCheck}
          height="30"
          className="SuccessMessage-checkIcon"
        />
        <div className="SuccessMessage-text">{props.message}</div>
      </div>
    </div>
  );
};
export default SuccessMessage;
