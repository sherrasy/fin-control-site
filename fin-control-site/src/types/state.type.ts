import { store } from "@/store";
import { Item } from "./item.interface";
import { FilterFormValues } from "./filter-form.interface";

export type ItemsState = {
    items: Item[] | null; 
    filtersData:FilterFormValues | null
  };

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;