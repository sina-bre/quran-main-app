import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface currentState {
  currentAyah: string | number;
  currentPage: string | number;
  currentSurah: string | number;
  currentJuz: string | number;
}

const initialCurrentState: currentState = {
  currentAyah: 0,
  currentPage: 1,
  currentSurah: 0,
  currentJuz: 0,
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
  },
});

export const currentActions = currentSlice.actions;
export default currentSlice;
