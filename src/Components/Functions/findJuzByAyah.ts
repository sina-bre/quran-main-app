import quranJuzes from "../../Resources/QuranMetaData/quranJuzes";
const findjuzByAyah = (index: number) => {
  for (let i = 0; i < quranJuzes.length; i++) {
    if (index < quranJuzes[i].end) {
      return i;
    }
  }
};
export default findjuzByAyah;
