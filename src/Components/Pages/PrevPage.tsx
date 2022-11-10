import "../../Styles/Components/Pages/PrevPage.scss";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-ep/arrow-right";
import { useAppSelector } from "../../Hooks/useAppSelector";
import useSetCurrent from "../../Hooks/useSetCurrent";
import quranPages from "../../Resources/QuranMetaData/quranPages";
const PrevPage: React.FC<{ isScrolling: boolean }> = (props) => {
  const setCurrent = useSetCurrent();
  const CurrentPage = useAppSelector((state) => state.current.currentPage);
  const prevPageOnClickHndler = () => {
    setCurrent(quranPages[Number(CurrentPage) - 1].start);
  };
  return (
    <>
      {!(CurrentPage === 1) && (
        <div
          className={`PrevPage-container ${
            props.isScrolling ? ["hide"] : ["show"]
          }`}
          onClick={prevPageOnClickHndler}
        >
          <Icon icon={arrowRight} hFlip={true} width={40} color="white" />
        </div>
      )}
    </>
  );
};
export default PrevPage;
