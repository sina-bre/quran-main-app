import quranSimple from "../../Resources/Texts/quran-simple";
const Ayahtext: React.FC<{ index: number }> = (props) => {
  return <div>{quranSimple[props.index]}</div>;
};
export default Ayahtext;
