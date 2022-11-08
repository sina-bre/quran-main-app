import quranJuzes from "../Resources/QuranMetaData/quranJuzes";
const findjuzByAyah = (index: number) => {
  for (let i = 1; i < quranJuzes.length; i++) {
    if (index <= quranJuzes[i].end && index >= quranJuzes[i].start) {
      return i;
    }
  }
};
export default findjuzByAyah;
