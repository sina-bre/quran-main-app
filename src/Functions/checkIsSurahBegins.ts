import quranSurahs2 from "../Resources/QuranMetaData/quranSurahs2";
const checkIsSurahBegins = (index: number) => {
  for (let i = 1; i < quranSurahs2.length; i++) {
    if (index == quranSurahs2[i].start) {
      return true;
    }
  }
};
export default checkIsSurahBegins;
