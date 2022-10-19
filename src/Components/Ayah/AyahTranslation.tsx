import ansarianTranslation from "../../Resources/Translation/ansarian-translation";
const AyahTranslation: React.FC<{ index: number }> = (props) => {
  return <div>{ansarianTranslation[props.index]}</div>;
};
export default AyahTranslation;
