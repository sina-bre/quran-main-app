import "../../Styles/Components/UI/Cover.scss";
import { HiMenu } from "react-icons/hi";
import { BsFillMoonFill } from "react-icons/bs";
import { Outlet } from "react-router-dom";
const Cover = () => {
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
      <div className="cover-inline">
        <Outlet />
      </div>
    </div>
  );
};
export default Cover;
