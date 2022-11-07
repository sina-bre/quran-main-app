import "../../Styles/Components/Ayah/AyahNumber.scss";
import toFaNumber from "../../Functions/toFa";
import findAyahInSurah from "../../Functions/findAyahInSurah";
const AyahNumber: React.FC<{ index: number }> = (props) => {
  return (
    <div className="AyahNumber">
      {toFaNumber(Number(findAyahInSurah(props.index)).toString())}
    </div>
  );
};
export default AyahNumber;
