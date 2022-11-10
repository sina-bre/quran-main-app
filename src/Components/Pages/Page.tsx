import "../../Styles/Components/Pages/Page.scss";
import { Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import arrowRight from "@iconify/icons-akar-icons/arrow-right";
import Audio from "../Audio/Audio";
import NextPage from "./NextPage";
import PrevPage from "./PrevPage";
import PageNumber from "./PageNumber";
import { useEffect, useState } from "react";
const Page = () => {
  const navigate = useNavigate();
  let timeout: ReturnType<typeof setTimeout>;
  const [isScrolling, setIsScrolling] = useState(false);
  const backArrowOnClick = () => {
    navigate("/audioQuran");
  };

  const onScroll = () => {
    setIsScrolling(true);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="Page-container">
      <div className="Page-topic-container">
        <div className="Page-topic-arrow" onClick={backArrowOnClick}>
          <Icon icon={arrowRight} color="#2D3F50" width={27} />
        </div>
        <div className="Page-topic">آیات قرآن</div>
        <div className="Page-topic-empty"></div>
      </div>
      <PageNumber isScrolling={isScrolling} />
      <Outlet />
      <NextPage isScrolling={isScrolling} />
      <PrevPage isScrolling={isScrolling} />
      <Audio />
    </div>
  );
};
export default Page;
