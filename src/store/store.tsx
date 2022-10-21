import { configureStore } from "@reduxjs/toolkit";
import currentSlice from "./currentSlice";
// ...

export const store = configureStore({
  reducer: {
    current: currentSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
