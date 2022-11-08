import "../../Styles/Components/Audio/ReciterName.scss";
import RadioButton from "../Setting/RadioButton";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { settingActions } from "../../store/settingSlice";
const ReciterName: React.FC<{ openReciters: boolean }> = (props) => {
  const dispatch = useAppDispatch();
  const reciterName = useAppSelector((state) => state.setting.reciterName);
  const optionChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(settingActions.setReciterName(e.target.value));
  };
  const optionOnClickHanlder = (input: string) => {
    dispatch(settingActions.setReciterName(input));
  };
  return (
    <div
      className={`ReciterName-container ${
        props.openReciters ? ["open"] : ["close"]
      }`}
    >
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
            reciterName === "Husary" && ["active"]
          }`}
          onClick={() => optionOnClickHanlder("Husary")}
        >
          <RadioButton
            id="ReciterName-3"
            name="ReciterName"
            value={"Husary"}
            checked={reciterName === "Husary"}
            onChange={optionChangeHandler}
          />
          <div
            className={`ReciterName-option-img ${
              reciterName === "Husary" && ["active"]
            } Husary`}
            id="Husary"
          ></div>
          <div className="ReciterName-option-title">محمود خلیل الحصری</div>
        </div>
        <div
          className={`ReciterName-option ${
            reciterName === "Minshawy_Mujawwad" && ["active"]
          }`}
          onClick={() => optionOnClickHanlder("Minshawy_Mujawwad")}
        >
          <RadioButton
            id="ReciterName-4"
            name="ReciterName"
            value={"Minshawy_Mujawwad"}
            checked={reciterName === "Minshawy_Mujawwad"}
            onChange={optionChangeHandler}
          />
          <div
            className={`ReciterName-option-img ${
              reciterName === "Minshawy_Mujawwad" && ["active"]
            } Minshawy_Mujawwad`}
            id="Minshawy_Mujawwad"
          ></div>
          <div className="ReciterName-option-title">محمد صدیق منشاوی</div>
        </div>
      </div>
    </div>
  );
};
export default ReciterName;
