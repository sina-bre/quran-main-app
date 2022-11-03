import { Outlet } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import Audio from "../Audio/Audio";

const Page = () => {
  return (
    <div className="Page-container">
      <HiChevronRight />
      <HiChevronLeft />
      <Outlet />
      <Audio />
    </div>
  );
};
export default Page;
