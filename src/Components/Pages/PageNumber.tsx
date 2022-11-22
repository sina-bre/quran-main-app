import "../../Styles/Components/Pages/PageNumber.scss";
import { useAppSelector } from "../../Hooks/useAppSelector";
import toFaNumber from "../../Functions/toFa";

const PageNumber: React.FC<{ isScrolling: boolean }> = (props) => {
  const currentPage = useAppSelector((state) => state.current.currentPage);
  return (
    // <div
    //   className={`PageNumber-container ${
    //     props.isScrolling ? ["hide"] : ["show"]
    //   }`}
    // >
    <div className="PageNumber-number">
      {toFaNumber(currentPage.toString())}
    </div>
    //   </div>
  );
};
export default PageNumber;
