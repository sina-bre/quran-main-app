import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  reciter: string;
  autoNextAyahPlay: boolean;
  translationAudioPlay: boolean;
  wakeLock: boolean;
}

const initialSettingState: settingState = {
  textSize: "26px",
  translationSize: "24px",
  textWeight: "400",
  translationWeight: "400",
  textFont: "MeQuran",
  translationFont: "IRANSans",
  textType: "quran-simple",
  translationName: "ansarian-translation",
  isShowTranslation: true,
  reciter: "Alafasy_64kbps",
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
    setReciter(state, action) {
      state.reciter = action.payload;
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
