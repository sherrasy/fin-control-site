import { Item } from "@frontend-types/item.interface";
import { saveAs } from 'file-saver';

export const saveJSONFile = (data:Item[]) =>{
    const jsonString = JSON.stringify(data, null, 2); 
    const blob = new Blob([jsonString], { type: 'application/json' });
    saveAs(blob, 'data.json'); 
}