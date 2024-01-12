import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './state/search/searchSlice'
import robotReducer from "./state/robots/robotsSlice"

export const store = configureStore({
  reducer: {
    search: searchReducer,
    robots:robotReducer
  },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;