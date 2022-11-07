import { createSlice } from "@reduxjs/toolkit";

interface navbarState {
  showSurahList: boolean;
  showPageList: boolean;
  showJuzList: boolean;
  showFavorites: boolean;
}

const initialNavbarState: navbarState = {
  showSurahList: true,
  showPageList: false,
  showJuzList: false,
  showFavorites: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState: initialNavbarState,
  reducers: {
    selectSurahList(state) {
      state.showSurahList = true;
      state.showPageList = false;
      state.showJuzList = false;
      state.showFavorites = false;
    },
    selectPageList(state) {
      state.showPageList = true;
      state.showSurahList = false;
      state.showJuzList = false;
      state.showFavorites = false;
    },
    selectJuzList(state) {
      state.showJuzList = true;
      state.showSurahList = false;
      state.showPageList = false;
      state.showFavorites = false;
    },
    selectFavorites(state) {
      state.showFavorites = true;
      state.showSurahList = false;
      state.showPageList = false;
      state.showJuzList = false;
    },
  },
});

export const navbarActions = navbarSlice.actions;
export default navbarSlice;
