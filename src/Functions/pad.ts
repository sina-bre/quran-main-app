const pad = (number: number | string, length: number) => {
  let str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
};
export default pad;
