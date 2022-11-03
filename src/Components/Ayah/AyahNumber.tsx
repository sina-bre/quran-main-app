import toFaNumber from "../../Functions/toFa";

const AyahNumber = (index: number) => {
  return <div>{toFaNumber(index.toString())}</div>;
};
export default AyahNumber;
