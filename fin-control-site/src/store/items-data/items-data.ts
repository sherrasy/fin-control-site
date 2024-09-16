import { ItemsState } from "@frontend-types/state.type";
import { createSlice } from "@reduxjs/toolkit";
import { REDUCER_NAME } from "@utils/constant";
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