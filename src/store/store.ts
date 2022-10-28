import { configureStore } from "@reduxjs/toolkit";
import currentSlice from "./currentSlice";
import globalOrdersSlice from "./globalOrdersSlice";
import navbarSlice from "./navbarSlice";
// ...

export const store = configureStore({
  reducer: {
    current: currentSlice.reducer,
    globalOrders: globalOrdersSlice.reducer,
    navbar: navbarSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
