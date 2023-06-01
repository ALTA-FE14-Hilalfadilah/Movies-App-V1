import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface List {
  id?: number | string;
  title?: string;
  description?: string;
  image?: string;
}

export interface ListState {
  items: List[];
}

const initialState: ListState = {
  items: [],
};

export const listSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addList(state, action: PayloadAction<List>) {
      state.items.push(action.payload);
    },
    removeList(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => {
        item.id !== action.payload;
      });
    },
  },
});

export const { addList, removeList } = listSlice.actions;
