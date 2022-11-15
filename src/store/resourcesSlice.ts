import { createSlice } from "@reduxjs/toolkit";
import quranSurahs2 from "../Resources/QuranMetaData/quranSurahs2";
import quranJuzes from "../Resources/QuranMetaData/quranJuzes";
import quranPages from "../Resources/QuranMetaData/quranPages";

interface resourcesState {
  quranSimpleText: string[] | string;
  quranSimpleCleanText: string[] | string;
  quranSimpleMinText: string[] | string;
  quranUthmaniText: string[] | string;
  quranFooladVandTranslation: string[] | string;
  quranGhomsheiTranslation: string[] | string;
  quranMakaremTranslation: string[] | string;
  quranSafaviTranslation: string[] | string;
  surahs: {
    name: string;
    nAyah: number;
    revelationOrder: number;
    type: string;
    start: number;
    end: number;
    id: number;
    isAdded: boolean;
  }[];
  juzes: {
    start: number;
    end: number;
    id: number;
    isAdded: boolean;
  }[];
  pages: {
    start: number;
    end: number;
    isAdded: boolean;
  }[];
}

const initialResourcesState: resourcesState = {
  quranSimpleText: "",
  quranSimpleCleanText: "",
  quranSimpleMinText: "",
  quranUthmaniText: "",
  quranFooladVandTranslation: "",
  quranGhomsheiTranslation: "",
  quranMakaremTranslation: "",
  quranSafaviTranslation: "",
  surahs: quranSurahs2,
  juzes: quranJuzes,
  pages: quranPages,
};

const resourcesSlice = createSlice({
  name: "resources",
  initialState: initialResourcesState,
  reducers: {
    setQuranSimpleText(state, action) {
      state.quranSimpleText = action.payload;
    },
    setQuranSimpleCleanText(state, action) {
      state.quranSimpleCleanText = action.payload;
    },
    setQuranSimpleMinText(state, action) {
      state.quranSimpleMinText = action.payload;
    },
    setQuranUthmaniText(state, action) {
      state.quranUthmaniText = action.payload;
    },
    setQuranFooladVandTranslation(state, action) {
      state.quranFooladVandTranslation = action.payload;
    },
    setQuranGhomsheiTranslation(state, action) {
      state.quranGhomsheiTranslation = action.payload;
    },
    setQuranMakaremTranslation(state, action) {
      state.quranMakaremTranslation = action.payload;
    },
    setQuranSafaviTranslation(state, action) {
      state.quranSafaviTranslation = action.payload;
    },
    setSurahs(state, action) {
      state.surahs = action.payload;
    },
    setJuzes(state, action) {
      state.juzes = action.payload;
    },
    setPages(state, action) {
      state.pages = action.payload;
    },
  },
});
export const resourcesActions = resourcesSlice.actions;
export default resourcesSlice;
