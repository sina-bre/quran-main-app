import "../../Styles/Components/Setting/ReciterName.scss";
import RadioButton from "./RadioButton";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { settingActions } from "../../store/settingSlice";
import { globalOrdersActions } from "../../store/globalOrdersSlice";
const ReciterName = () => {
  const dispatch = useAppDispatch();
  const reciterName = useAppSelector((state) => state.setting.reciterName);
  const optionChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(settingActions.setReciterName(e.target.value));
    localStorage.setItem("reciterName", e.target.value);
  };
  const optionOnClickHanlder = (input: string) => {
    dispatch(settingActions.setReciterName(input));
    localStorage.setItem("reciterName", input);
    dispatch(globalOrdersActions.setIsPlaying(false));
  };
  return (
    <div className={`ReciterName-container`}>
      <div className="ReciterName-title">انتخاب قاری:</div>
      <div className="ReciterName-options">
        <div
          className={`ReciterName-option ${
            reciterName === "Alafasy" && ["active"]
          }`}
          onClick={() => optionOnClickHanlder("Alafasy")}
        >
          <RadioButton
            id="ReciterName-1"
            name="ReciterName"
            value={"Alafasy"}
            checked={reciterName === "Alafasy"}
            onChange={optionChangeHandler}
          />
          <div
            className={`ReciterName-option-img ${
              reciterName === "Alafasy" && ["active"]
            } Alafasy`}
            id="Alafasy"
          ></div>
          <div className="ReciterName-option-title">مشاری العفاسی</div>
        </div>
        <div
          className={`ReciterName-option ${
            reciterName === "Abdul_Basit_Murattal" && ["active"]
          }`}
          onClick={() => optionOnClickHanlder("Abdul_Basit_Murattal")}
        >
          <RadioButton
            id="ReciterName-2"
            name="ReciterName"
            value={"Abdul_Basit_Murattal"}
            checked={reciterName === "Abdul_Basit_Murattal"}
            onChange={optionChangeHandler}
          />
          <div
            className={`ReciterName-option-img ${
              reciterName === "Abdul_Basit_Murattal" && ["active"]
            } Abdul_Basit_Murattal`}
            id="Abdul_Basit_Murattal"
          ></div>
          <div className="ReciterName-option-title">عبد الباسط</div>
        </div>
        <div
          className={`ReciterName-option ${
            reciterName === "Ghamadi" && ["active"]
          }`}
          onClick={() => optionOnClickHanlder("Ghamadi")}
        >
          <RadioButton
            id="ReciterName-3"
            name="ReciterName"
            value={"Ghamadi"}
            checked={reciterName === "Ghamadi"}
            onChange={optionChangeHandler}
          />
          <div
            className={`ReciterName-option-img ${
              reciterName === "Ghamadi" && ["active"]
            } Ghamadi`}
            id="Ghamadi"
          ></div>
          <div className="ReciterName-option-title">سعد الغامدی</div>
        </div>
        <div
          className={`ReciterName-option ${
            reciterName === "Minshawy_Murattal" && ["active"]
          }`}
          onClick={() => optionOnClickHanlder("Minshawy_Murattal")}
        >
          <RadioButton
            id="ReciterName-4"
            name="ReciterName"
            value={"Minshawy_Murattal"}
            checked={reciterName === "Minshawy_Murattal"}
            onChange={optionChangeHandler}
          />
          <div
            className={`ReciterName-option-img ${
              reciterName === "Minshawy_Murattal" && ["active"]
            } Minshawy_Murattal`}
            id="Minshawy_Murattal"
          ></div>
          <div className="ReciterName-option-title">محمد صدیق منشاوی</div>
        </div>
      </div>
    </div>
  );
};
export default ReciterName;
