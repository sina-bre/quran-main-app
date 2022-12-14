import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface currentState {
  currentAyah: string | number;
  currentPage: string | number;
  currentSurah: string | number;
  currentJuz: string | number;
  currentAyahInSurah: string | number;
  currentAudio: string | number;
  currentBisAudio: string | number;
}

const initialCurrentState: currentState = {
  currentAyah: 1,
  currentPage: 1,
  currentSurah: 1,
  currentJuz: 1,
  currentAyahInSurah: 1,
  currentAudio: "",
  currentBisAudio: "",
};

const currentSlice = createSlice({
  name: "currentAyah",
  initialState: initialCurrentState,
  reducers: {
    setCurrentAyah(state, action: PayloadAction<string | number>) {
      state.currentAyah = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setCurrentSurah(state, action) {
      state.currentSurah = action.payload;
    },
    setCurrentJuz(state, action) {
      state.currentJuz = action.payload;
    },
    setCurrentAyahInSurah(state, action) {
      state.currentAyahInSurah = action.payload;
    },
    setCurrentAudio(state, action) {
      state.currentAudio = action.payload;
    },
    setCurrentBisAudio(state, action) {
      state.currentBisAudio = action.payload;
    },
  },
});

export const currentActions = currentSlice.actions;
export default currentSlice;
