import { createSlice } from "@reduxjs/toolkit";

interface settingState {
  textSize: string | null;
  translationSize: string | null;
  textWeight: string | null;
  translationWeight: string | null;
  textFont: string | null;
  translationFont: string | null;
  textType: string | null;
  translationName: string | null;
  isShowTranslation: boolean;
  reciterName: string | null;
  autoNextAyahPlay: boolean;
  translationAudioPlay: boolean;
  wakeLock: boolean;
}

const textSize =
  localStorage.getItem("textSize") !== null
    ? localStorage.getItem("textSize")
    : "26px";
const translationSize =
  localStorage.getItem("translationSize") !== null
    ? localStorage.getItem("translationSize")
    : "19px";
const textWeight =
  localStorage.getItem("textWeight") !== null
    ? localStorage.getItem("textWeight")
    : "normal";
const translationWeight =
  localStorage.getItem("translationWeight") !== null
    ? localStorage.getItem("translationWeight")
    : "normal";
const textFont =
  localStorage.getItem("textFont") !== null
    ? localStorage.getItem("textFont")
    : "Simple";
const translationFont =
  localStorage.getItem("translationFont") !== null
    ? localStorage.getItem("translationFont")
    : "IRANSans";
const textType =
  localStorage.getItem("textType") !== null
    ? localStorage.getItem("textType")
    : "quranSimple";
const translationName =
  localStorage.getItem("translationName") !== null
    ? localStorage.getItem("translationName")
    : "fooladvand";
const reciterName =
  localStorage.getItem("reciterName") !== null
    ? localStorage.getItem("reciterName")
    : "Alafasy";

const initialSettingState: settingState = {
  textSize: textSize,
  translationSize: translationSize,
  textWeight: textWeight,
  translationWeight: translationWeight,
  textFont: textFont,
  translationFont: translationFont,
  textType: textType,
  translationName: translationName,
  isShowTranslation: true,
  reciterName: reciterName,
  autoNextAyahPlay: true,
  translationAudioPlay: false,
  wakeLock: true,
};

const settingSlice = createSlice({
  name: "setting",
  initialState: initialSettingState,
  reducers: {
    setTextSize(state, action) {
      state.textSize = action.payload;
    },
    setTranslationSize(state, action) {
      state.translationSize = action.payload;
    },
    setTextWeight(state, action) {
      state.textWeight = action.payload;
    },
    settranslationWeight(state, action) {
      state.translationWeight = action.payload;
    },
    setTextFont(state, action) {
      state.textFont = action.payload;
    },
    setTranslationFont(state, action) {
      state.translationFont = action.payload;
    },
    setTextType(state, action) {
      state.textType = action.payload;
    },
    setTranslationName(state, action) {
      state.translationName = action.payload;
    },
    setIsShowTranslation(state, action) {
      state.isShowTranslation = action.payload;
    },
    setReciterName(state, action) {
      state.reciterName = action.payload;
    },
    setAutoNextAyahPlay(state, action) {
      state.autoNextAyahPlay = action.payload;
    },
    setTranslationAudioPlay(state, action) {
      state.translationAudioPlay = action.payload;
    },
    setWakeLock(state, action) {
      state.wakeLock = action.payload;
    },
  },
});

export const settingActions = settingSlice.actions;
export default settingSlice;
