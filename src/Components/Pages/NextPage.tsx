import "../../Styles/Components/Pages/NextPage.scss";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-ep/arrow-right";
import { useAppSelector } from "../../Hooks/useAppSelector";
import useSetCurrent from "../../Hooks/useSetCurrent";
import quranPages from "../../Resources/QuranMetaData/quranPages";

const NextPage = () => {
  const setCurrent = useSetCurrent();
  const CurrentPage = useAppSelector((state) => state.current.currentPage);
  const nextPageOnClickHndler = () => {
    setCurrent(quranPages[Number(CurrentPage) + 1].start);
  };
  return (
    <div className="NextPage-container" onClick={nextPageOnClickHndler}>
      <Icon icon={arrowRight} color="white" width={40} />
    </div>
  );
};
export default NextPage;
