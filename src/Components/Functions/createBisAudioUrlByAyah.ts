import findSurahByAyah from "./findSurahByAyah";
import pad from "./pad";
const createBisAudioUrlByAyah = (index: number) => {
  const url = `${pad(Number(findSurahByAyah(index)), 3)}000`;
  return url;
};
export default createBisAudioUrlByAyah;
