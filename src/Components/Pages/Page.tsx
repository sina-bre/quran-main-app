import "../../Styles/Components/Pages/Page.scss";
import { Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import arrowRight from "@iconify/icons-akar-icons/arrow-right";
import Audio from "../Audio/Audio";
import NextPage from "./NextPage";
import PrevPage from "./PrevPage";
import PageNumber from "./PageNumber";

const Page = () => {
  const navigate = useNavigate();
  const backArrowOnClick = () => {
    navigate("/audioQuran");
  };
  return (
    <div className="Page-container">
      <div className="Page-topic-container">
        <div className="Page-topic-arrow" onClick={backArrowOnClick}>
          <Icon icon={arrowRight} color="#2D3F50" width={27} />
        </div>
        <div className="Page-topic">آیات قرآن</div>
        <div className="Page-topic-empty"></div>
      </div>
      <PageNumber />
      <Outlet />
      <NextPage />
      <PrevPage />
      <Audio />
    </div>
  );
};
export default Page;
