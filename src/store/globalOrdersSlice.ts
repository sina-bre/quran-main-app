import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface globalOrdersState {
  isNavigate: boolean;
  isScroll: boolean;
  isPlaying: boolean;
  isCahnging: boolean;
}

const initailGlobalOrdersState: globalOrdersState = {
  isNavigate: false,
  isScroll: false,
  isPlaying: false,
  isCahnging: false,
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
    setIsChanging(state, action) {
      state.isCahnging = action.payload;
    },
  },
});

export const globalOrdersActions = globalOrdersSlice.actions;
export default globalOrdersSlice;
