import { Item } from "@/types/item.interface";
import { State } from "@/types/state.type";

export const getItems = (state: State ): Item[] |null=> state.items;
