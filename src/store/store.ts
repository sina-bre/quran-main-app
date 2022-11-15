import { configureStore } from "@reduxjs/toolkit";
import currentSlice from "./currentSlice";
import favoritesSlice from "./favoritesSlice";
import globalOrdersSlice from "./globalOrdersSlice";
import navbarSlice from "./navbarSlice";
import resourcesSlice from "./resourcesSlice";
import settingSlice from "./settingSlice";
// ...

export const store = configureStore({
  reducer: {
    current: currentSlice.reducer,
    globalOrders: globalOrdersSlice.reducer,
    navbar: navbarSlice.reducer,
    setting: settingSlice.reducer,
    resources: resourcesSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
