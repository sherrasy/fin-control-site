import { store } from "@/store";
import { Item } from "./item.interface";

export type ItemsState = {
    items: Item[] | null; 
  };

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;