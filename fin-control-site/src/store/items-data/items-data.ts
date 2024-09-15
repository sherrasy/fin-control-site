import { ItemsState } from "@/types/state.type";
import { REDUCER_NAME } from "@/utils/constant";
import { createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "./actions";

const initialState: ItemsState = {
    items: null,
  };

  export const itemsData = createSlice({
    name: REDUCER_NAME,
    initialState,
    reducers: {    },
    extraReducers(builder) {
      builder
        .addCase(fetchItems, (state, {payload}) => {
            state.items = payload;
        })
    }
  });