var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
var persianMap = persianDigits.split("");
function toFaNumber(input: string) {
  return input.replace(/\d/g, function (m) {
    return persianMap[parseInt(m)];
  });
}

export default toFaNumber;
