import "../../Styles/Components/UI/Cover.scss";
import { Icon } from "@iconify/react";
import moonStarsFill from "@iconify/icons-mingcute/moon-stars-fill";
import settingTwo from "@iconify/icons-icon-park-solid/setting-two";
import { Outlet } from "react-router-dom";
const Cover = () => {
  return (
    <div className="cover">
      <div className="cover-header">
        <div className="settingTwo-div">
          <Icon
            icon={settingTwo}
            width={40}
            fill="white"
            className="settingTwo"
          />
        </div>
        <div className="moonStarsFill-div">
          <div className="moon-background"></div>
          <Icon
            icon={moonStarsFill}
            width={45}
            hFlip={true}
            className="moonStarsFill"
          />
        </div>
      </div>
      <div className="cover-inline">
        <Outlet />
      </div>
    </div>
  );
};
export default Cover;
