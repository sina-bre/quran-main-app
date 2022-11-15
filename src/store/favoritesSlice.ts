import { createSlice } from "@reduxjs/toolkit";

interface favoritesState {
  favorites: { index: number; type: string }[];
}

const initialFavoritsState: favoritesState = {
  favorites: [
    {
      index: -1,
      type: "",
    },
  ],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialFavoritsState,
  reducers: {
    addToFavorites(state, action) {
      if (state.favorites[0] && state.favorites[0].index === -1) {
        state.favorites.pop();
      }
      state.favorites.push(action.payload);
    },
    removeFormFavorites(state, action) {
      state.favorites.splice(action.payload, 1);
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice;
