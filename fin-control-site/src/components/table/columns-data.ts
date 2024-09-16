import { Item } from "@/types/item.interface";
import { sortElements } from "@/utils/helpers";
import { TableColumnsType } from "antd";

export const columnsData: TableColumnsType<Item> = [
  {
    title: 'Баркод',
    dataIndex: 'barcode',
    key: 'barcode',
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, 'barcode')
  },
  {
    title: 'Предмет',
    dataIndex: 'category',
    key: 'category',
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, 'category')
  },
  {
    title: 'Артикул поставщика',
    dataIndex: 'part_number',
    key: 'part_number',
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, "part_number")
  },
  {
    title: 'Размер',
    dataIndex: 'size',
    key: 'size',
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, "size")
  },
  {
    title: 'Доступно к заказу',
    dataIndex: 'stock',
    key: 'stock',
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, 'stock')
  },
  {
    title: 'Товары в пути',
    dataIndex: 'delivery',
    key: 'delivery',
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
