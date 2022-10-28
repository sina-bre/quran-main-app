import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface settingState {
  textSize: string;
  translationSize: string;
  textWeight: string | number;
  translationWeight: string | number;
  textFont: string;
  translationFont: string;
  textType: string;
  translationName: string;
  isShowTranslation: string;
}

const initialSettingState = {
  textSize: "",
  translationSize: "normal",
};
