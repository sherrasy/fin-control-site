import { createAction } from "@reduxjs/toolkit";
import { ApiActionName, CategoryName, REDUCER_NAME } from "@utils/constant";
import mockData from "../../../../data.json";

export const fetchItems = createAction(
  `${REDUCER_NAME}/${ApiActionName.FetchItems}`,
   () => {
      const { data } = mockData;
      const dataFormatted = data.map((item)=> ({...item, key:item.id, category:CategoryName[item.category as keyof typeof CategoryName]}))
      return {payload:dataFormatted};
  }
);