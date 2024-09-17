  export const REDUCER_NAME = 'ITEMS';

  export const APP_ACTION = 'fetch-items';
  
  export const defaultCompanyInfo = {
  phone: '8 (999) 999 99 99',
  email: 'pf1@werthesest.ru',
  time: 'Пн - Пт с 9:00 до 19:00 мск',
};

export const linkTitles = [
  { id: 1, title: 'Пользовательское соглашение' },
  { id: 2, title: 'Политика конфиденциальности' },
  { id: 3, title: 'Юридическая информация' },
  { id: 4, title: 'Публичная оферта' },
];

export const ColumnIndexName = {
    barcode: 'barcode',
    category: 'category',
    part_number: 'part_number',
    size: 'size',
    stock: 'stock',
    delivery: 'delivery',
    amount: 'amount',
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

