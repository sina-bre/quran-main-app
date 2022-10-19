import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface currentAyahState {
  currentAyahIndex: number;
}

const initialCurrentAyahState: currentAyahState = {
  currentAyahIndex: 0,
};

const currentAyahSlice = createSlice({
  name: "currentAyah",
  initialState: initialCurrentAyahState,
  reducers: {
    setCurrentAyahIndex(state, action: PayloadAction<number>) {
      state.currentAyahIndex = action.payload;
    },
  },
});

export const currentAyahActions = currentAyahSlice.actions;
export default currentAyahSlice;
