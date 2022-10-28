import quranSurahs2 from "../../Resources/QuranMetaData/quranSurahs2";
const findSurahByAyah = (index: string | number) => {
  for (let i = 1; i < quranSurahs2.length; i++) {
    if (index <= quranSurahs2[i].end) {
      return i;
    }
  }
};
export default findSurahByAyah;
