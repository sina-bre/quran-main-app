import { useParams } from "react-router-dom";
import quranPages from "../../Resources/QuranMetaData/quranPages";
import Ayah from "../Ayah/Ayah";

const PageContext = () => {
  const { index } = useParams<{ index: any }>();
  let tempIndexArray = [];
  for (let i = quranPages[index].start; i <= quranPages[index].end; i++) {
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
    </div>
  );
};
export default PageContext;
