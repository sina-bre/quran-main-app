import { createSlice } from "@reduxjs/toolkit";

interface globalOrdersState {
  isNavigate: boolean;
  isScroll: boolean;
  isPlaying: boolean;
  bisHasBeenPlayed: boolean;
  isCahnging: boolean;
  isNavigateToSurah: boolean;
}

const initailGlobalOrdersState: globalOrdersState = {
  isNavigate: false,
  isScroll: false,
  isPlaying: false,
  bisHasBeenPlayed: false,
  isCahnging: false,
  isNavigateToSurah: false,
};

const globalOrdersSlice = createSlice({
  name: "globalOrdersState",
  initialState: initailGlobalOrdersState,
  reducers: {
    setIsNavigate(state, action) {
      state.isNavigate = action.payload;
    },
    setIsScroll(state, action) {
      state.isScroll = action.payload;
    },
    setIsPlaying(state, action) {
      state.isPlaying = action.payload;
    },
    setBisHasBeenPlayed(state, action) {
      state.bisHasBeenPlayed = action.payload;
    },
    setIsChanging(state, action) {
      state.isCahnging = action.payload;
    },
    setIsNavigateToSurah(state, action) {
      state.isNavigateToSurah = action.payload;
    },
  },
});

export const globalOrdersActions = globalOrdersSlice.actions;
export default globalOrdersSlice;
