import { FilterFormValues } from '@frontend-types/filter-form.interface';
import { Item } from '@frontend-types/item.interface';
import { State } from '@frontend-types/state.type';
import { createSelector } from '@reduxjs/toolkit';

export const getItems = (state: State): Item[] | null => state.items;
export const getFilters = (state: State): FilterFormValues | null =>
  state.filtersData;

export const getFilteredItems = createSelector(
  getItems,
  getFilters,
  (items, filters) => {
    if (!items) {
      return null;
    }

    if (!filters) {
      return items;
    }

    return items.filter((item) => {
      return Object.entries(filters).every(([filterKey, filterValue]) => {
        if (!filterValue) {
          return true;
        }

        const itemValue = item[filterKey as keyof Item];
        return (
          itemValue !== undefined &&
          itemValue
            .toString()
            .toLowerCase()
            .includes(filterValue.toString().toLowerCase())
        );
      });
    });
  }
);
