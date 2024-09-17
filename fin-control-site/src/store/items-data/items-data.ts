import { FilterFormValues } from '@frontend-types/filter-form.interface';
import { Item } from '@frontend-types/item.interface';
import { ItemsState } from '@frontend-types/state.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REDUCER_NAME } from '@utils/constant';
import { fetchItems } from './actions';

const initialState: ItemsState = {
  items: null,
  filtersData: null,
};

export const itemsData = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    setCurrentFilters: (
      state,
      action: PayloadAction<FilterFormValues | null>
    ) => {
      state.filtersData = action.payload;
    },

    updateCurrentItem: (state, action: PayloadAction<Item>) => {
      if (!state.items) {
        return;
      }
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[index] = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchItems, (state, { payload }) => {
      state.items = payload;
    });
  },
});

export const { setCurrentFilters, updateCurrentItem } = itemsData.actions;
