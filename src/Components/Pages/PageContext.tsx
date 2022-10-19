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
      {indexArray.map((ayahIndex) => (
        <Ayah index={ayahIndex} />
      ))}
    </div>
  );
};
export default PageContext;
