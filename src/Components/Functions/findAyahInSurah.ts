import quranSurahs2 from "../../Resources/QuranMetaData/quranSurahs2";
const findAyahInSurah = (ayah: number) => {
  for (let i = 1; i <= quranSurahs2.length; i++) {
    if (ayah >= quranSurahs2[i].start && ayah <= quranSurahs2[i].end) {
      return ayah - quranSurahs2[i].start + 1;
    }
  }
};
export default findAyahInSurah;
