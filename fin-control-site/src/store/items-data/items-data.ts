import { ItemsState } from '@frontend-types/state.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REDUCER_NAME } from '@utils/constant';
import { fetchItems } from './actions';
import { FilterFormValues } from '@/types/filter-form.interface';

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
  },
  extraReducers(builder) {
    builder.addCase(fetchItems, (state, { payload }) => {
      state.items = payload;
    });
  },
});

export const { setCurrentFilters } = itemsData.actions;
