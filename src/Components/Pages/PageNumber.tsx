import "../../Styles/Components/Pages/PageNumber.scss";
import { useAppSelector } from "../../Hooks/useAppSelector";
import toFaNumber from "../../Functions/toFa";

const PageNumber = () => {
  const currentPage = useAppSelector((state) => state.current.currentPage);
  return (
    <div className="PageNumber-container">
      <div className="PageNumber-number">
        {toFaNumber(currentPage.toString())}
      </div>
    </div>
  );
};
export default PageNumber;
