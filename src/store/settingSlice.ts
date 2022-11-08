import { createSlice } from "@reduxjs/toolkit";

interface settingState {
  textSize: string;
  translationSize: string;
  textWeight: string;
  translationWeight: string;
  textFont: string;
  translationFont: string;
  textType: string;
  translationName: string;
  isShowTranslation: boolean;
  reciterName: string;
  autoNextAyahPlay: boolean;
  translationAudioPlay: boolean;
  wakeLock: boolean;
}

const initialSettingState: settingState = {
  textSize: "26px",
  translationSize: "19px",
  textWeight: "normal",
  translationWeight: "normal",
  textFont: "Simple",
  translationFont: "IRANSans",
  textType: "quranSimple",
  translationName: "fooladvand",
  isShowTranslation: true,
  reciterName: "Alafasy",
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
