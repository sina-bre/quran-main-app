import "../../Styles/Components/Pages/Page.scss";
import { Outlet } from "react-router-dom";
import Audio from "../Audio/Audio";

const Page = () => {
  return (
    <div className="Page-container">
      <Outlet />
      <Audio />
    </div>
  );
};
export default Page;
