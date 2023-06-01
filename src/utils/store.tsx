import { configureStore } from "@reduxjs/toolkit";
import { listSlice } from "../features/FavoriteSlice";

export default configureStore({
  reducer: {
    favorite: listSlice.reducer,
  },
});
