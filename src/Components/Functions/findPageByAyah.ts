import quranPages from "../../Resources/QuranMetaData/quranPages";
const findPageByAyah = (index: number | string) => {
  for (let i = 0; i < quranPages.length; i++) {
    if (index < quranPages[i].end) {
      return i;
    }
  }
};
export default findPageByAyah;
