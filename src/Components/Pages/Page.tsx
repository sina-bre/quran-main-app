import { Outlet } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import pad from "../Functions/pad";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { useEffect } from "react";

const Page = () => {
  const currentSurah = useAppSelector((state) => state.current.currentSurah);
  const currentAyahInSurah = useAppSelector(
    (state) => state.current.currentAyahInSurah
  );
  useEffect(() => {
    console.log(currentSurah, currentAyahInSurah);
  }, [currentSurah]);
  return (
    <div>
      <HiChevronRight />
      <HiChevronLeft />
      <Outlet />
      <audio
        controls
        src={`http://www.everyayah.com/data/Alafasy_64kbps/${pad(
          currentSurah,
          3
        )}${pad(currentAyahInSurah, 3)}.mp3`}
      ></audio>
    </div>
  );
};
export default Page;
