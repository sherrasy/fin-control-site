import { ColumnIndexName } from "@utils/constant";
import { sortElements } from "@utils/helpers";
import { Item } from "@frontend-types/item.interface";
import { TableColumnsType } from "antd";

export const columnsData: TableColumnsType<Item> & { editable?: boolean}[]  = [
  {
    title: 'Баркод',
    dataIndex: ColumnIndexName.barcode,
    key: ColumnIndexName.barcode,
    width:160,
    onCell: (record) => ({
      title:ColumnIndexName.barcode,
      record,
      editable: false,
    }),
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, ColumnIndexName.barcode)
  },
  {
    title: 'Предмет',
    dataIndex: ColumnIndexName.category,
    key: ColumnIndexName.category,
    width:140,
    onCell: (record) => ({
      title:ColumnIndexName.category,
      record,
      editable: false,
    }),
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, ColumnIndexName.category)
  },
  {
    title: 'Артикул поставщика',
    dataIndex: ColumnIndexName.part_number,
    key: ColumnIndexName.part_number,
    width:220,
    onCell: (record) => ({
      title:ColumnIndexName.part_number,
      record,
      editable: false,
    }),
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, ColumnIndexName.part_number)
  },
  {
    title: 'Размер',
    dataIndex: ColumnIndexName.size,
    key: ColumnIndexName.size,
    width:120,
    onCell: (record) => ({
      title:ColumnIndexName.size,
      record,
      editable: false,
    }),
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, ColumnIndexName.size)
  },
  {
    title: 'Доступно к заказу',
    dataIndex: ColumnIndexName.stock,
    key: ColumnIndexName.stock,
    width:200,
    editable:true,
    onCell: (record) => ({
      title:ColumnIndexName.stock,
      record,
      editable: true,
    }),
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, ColumnIndexName.stock)
  },
  {
    title: 'Товары в пути',
    dataIndex: ColumnIndexName.delivery,
    key: ColumnIndexName.delivery,
    width:200,
    editable:true,
    onCell: (record) => ({
      title:ColumnIndexName.delivery,
      record,
      editable: true,
    }),
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, ColumnIndexName.delivery)
  },
  {
    title: 'Итого кол-во товаров',
    dataIndex: ColumnIndexName.amount,
    key: ColumnIndexName.amount,
    editable:true,
    onCell: (record) => ({
      title:ColumnIndexName.amount,
      record,
      editable: true,
    }),
    showSorterTooltip: { target: 'sorter-icon' },
    sorter:(a,b)=>sortElements(a, b, ColumnIndexName.amount)
  },
];
