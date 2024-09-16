import { Item } from "@frontend-types/item.interface";
import { saveAs } from 'file-saver';

export const saveJSONFile = (data:Item[]) =>{
    const jsonString = JSON.stringify(data, null, 2); 
    const blob = new Blob([jsonString], { type: 'application/json' });
    saveAs(blob, 'data.json'); 
}

export const sortElements = (
    aItem: Item,
    bItem: Item,
    fieldName:string
) => {
    const a = aItem[fieldName as keyof Item ];
    const b = bItem[fieldName as keyof Item ];
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
      }
    return a.toString().localeCompare(b.toString());

}