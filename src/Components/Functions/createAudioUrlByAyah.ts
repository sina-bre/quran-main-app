import findAyahInSurah from "./findAyahInSurah";
import findSurahByAyah from "./findSurahByAyah";
import pad from "./pad";
const createAudioUrlByAyah = (index: number) => {
  const url = `${pad(Number(findSurahByAyah(index)), 3)}${pad(
    Number(findAyahInSurah(index)),
    3
  )}`;
  return url;
};
export default createAudioUrlByAyah;
