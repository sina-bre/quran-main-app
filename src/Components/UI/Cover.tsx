import "../../Styles/Components/UI/Cover.scss";
import { Icon } from "@iconify/react";
import crescentMoon from "@iconify/icons-emojione-monotone/crescent-moon";
import settings28Regular from "@iconify/icons-fluent/settings-28-regular";
import search28Regular from "@iconify/icons-fluent/search-28-regular";
import { Outlet, useNavigate } from "react-router-dom";

const Cover = () => {
  const navigate = useNavigate();
  const settingTwoOnClickHandler = () => {
    navigate("/setting");
  };
  return (
    <div className="cover">
      <div className="cover-header">
        <div className="settingTwo-div">
          <Icon
            icon={settings28Regular}
            width={40}
            fill="white"
            className="settingTwo"
            onClick={settingTwoOnClickHandler}
          />
          <Icon
            icon={search28Regular}
            hFlip={true}
            width={40}
            color="white"
            className="search28Regular"
          />
        </div>
        <div className="moonStarsFill-div">
          <div className="moon-background"></div>
          <Icon
            icon={crescentMoon}
            width={40}
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
