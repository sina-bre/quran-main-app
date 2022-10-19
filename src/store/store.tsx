import { configureStore } from "@reduxjs/toolkit";
import currentAyahSlice, { currentAyahActions } from "./currentAyahSlice";
// ...

export const store = configureStore({
  reducer: {
    currentAyah: currentAyahSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
