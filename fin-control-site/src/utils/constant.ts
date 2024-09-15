export const sortingParams = ['asc', 'desc'];

export const FilterName = {
    barcode: 'barcode',
    part_number: 'part_number',
    size: 'size',
    category: 'category',
  } as const;

export const FilterToName = {
    barcode: 'Баркод',
    part_number: 'Артикул',
    size: 'Размер',
    category: 'Категория',
  } as const;

export const CategoryName = {
    shirt: 'Рубашка',
    cardigan: 'Кардиган',
    trousers: 'Брюки',
    jeans: 'Джинсы',
    shoes: 'Обувь',
  } as const;

  export const REDUCER_NAME = 'ITEMS'

  export const ApiActionName = {
    FetchItems: 'fetch-items',
    EditItem: 'edit-item',
  } as const;