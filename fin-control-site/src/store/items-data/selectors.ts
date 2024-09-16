import { Item } from "@frontend-types/item.interface";
import { State } from "@frontend-types/state.type";

export const getItems = (state: State ): Item[] |null=> state.items;
