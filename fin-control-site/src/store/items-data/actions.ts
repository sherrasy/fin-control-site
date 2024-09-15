import { createAction } from "@reduxjs/toolkit";
import { ApiActionName, REDUCER_NAME } from "@utils/constant";
import mockData from "../../../../data.json";

export const fetchItems = createAction(
  `${REDUCER_NAME}/${ApiActionName.FetchItems}`,
   () => {
      const { data } = mockData;
      return {payload:data};
  }
);