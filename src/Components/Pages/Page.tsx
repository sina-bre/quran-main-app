import { Outlet } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import pad from "../Functions/pad";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { useEffect } from "react";
import AyahAudio from "../Ayah/AyahAudio";

const Page = () => {
  const currentSurah = useAppSelector((state) => state.current.currentSurah);
  const currentAyahInSurah = useAppSelector(
    (state) => state.current.currentAyahInSurah
  );
  const currentAudio = useAppSelector((state) => state.current.currentAudio);
  useEffect(() => {
    console.log(currentAudio);
  }, [currentAudio]);
  return (
    <div>
      <HiChevronRight />
      <HiChevronLeft />
      <Outlet />
      <AyahAudio
        url={`http://www.everyayah.com/data/Alafasy_128kbps/${currentAudio}.mp3`}
        bisUrl={`http://www.everyayah.com/data/Alafasy_64kbps/${pad(
          currentSurah,
          3
        )}000.mp3`}
      />
    </div>
  );
};
export default Page;
