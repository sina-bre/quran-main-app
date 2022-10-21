import { useParams } from "react-router-dom";
import quranPages from "../../Resources/QuranMetaData/quranPages";
import Ayah from "../Ayah/Ayah";

const PageContext = () => {
  const { index } = useParams<{ index: any }>();

  let tempIndexArray = [];
  for (let i = quranPages[index].start - 1; i < quranPages[index].end; i++) {
    tempIndexArray.push(i);
  }
  const indexArray = tempIndexArray;

  return (
    <div>
      {indexArray.map((ayahIndex, index) => (
        <div key={index}>
          <Ayah index={ayahIndex} />
        </div>
      ))}

      {/* <AyahAudio
        url={`http://www.everyayah.com/data/Alafasy_64kbps/${pad(
          currentSurah,
          3
        )}${pad(currentAyahInSurah, 3)}.mp3`}
      /> */}
    </div>
  );
};
export default PageContext;
