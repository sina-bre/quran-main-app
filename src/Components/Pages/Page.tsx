import { Outlet } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

const Page = () => {
  return (
    <div>
      <HiChevronRight />
      <HiChevronLeft />
      <Outlet />
    </div>
  );
};
export default Page;
