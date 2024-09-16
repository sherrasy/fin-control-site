import { sortElements } from "@/utils/helpers";
import { Item } from "@frontend-types/item.interface";
import { TableColumnsType } from "antd";

export const columnsData: TableColumnsType<Item> = [
  {
    title: 'Баркод',
    dataIndex: 'barcode',
    key: 'barcode',
    width:160,
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, 'barcode')
  },
  {
    title: 'Предмет',
    dataIndex: 'category',
    key: 'category',
    width:140,
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, 'category')
  },
  {
    title: 'Артикул поставщика',
    dataIndex: 'part_number',
    key: 'part_number',
    width:220,
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, "part_number")
  },
  {
    title: 'Размер',
    dataIndex: 'size',
    key: 'size',
    width:120,
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, "size")
  },
  {
    title: 'Доступно к заказу',
    dataIndex: 'stock',
    key: 'stock',
    width:200,
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, 'stock')
  },
  {
    title: 'Товары в пути',
    dataIndex: 'delivery',
    key: 'delivery',
    width:200,
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, 'delivery')
  },
  {
    title: 'Итого кол-во товаров',
    dataIndex: 'amount',
    key: 'amount',
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, 'amount')
  },
];
