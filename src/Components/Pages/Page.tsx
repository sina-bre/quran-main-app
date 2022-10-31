import { Outlet } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import AyahAudio from "../Ayah/AyahAudio";

const Page = () => {
  return (
    <div>
      <HiChevronRight />
      <HiChevronLeft />
      <Outlet />
      <AyahAudio />
    </div>
  );
};
export default Page;
