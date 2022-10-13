import "../../Styles/Components/Cover.scss";
import { HiMenu } from "react-icons/hi";
import { BsFillMoonFill } from "react-icons/bs";
const Cover = (props) => {
  return (
    <div className="cover">
      <div className="cover-header">
        <div className="HiMenu-div">
          <HiMenu className="HiMenu" fill="white" size={40} />
        </div>
        <div className="BsFillMoonFill-div">
          <div className="moon-background"></div>
          <BsFillMoonFill className="BsFillMoonFill" fill="white" size={35} />
        </div>
      </div>
      <div className="cover-inline">{props.children}</div>
    </div>
  );
};
export default Cover;
