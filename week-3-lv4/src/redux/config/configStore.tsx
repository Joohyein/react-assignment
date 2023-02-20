import { configureStore } from "@reduxjs/toolkit";
import books from "../modules/booksSlice";

const store = configureStore({
  reducer: { books },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
