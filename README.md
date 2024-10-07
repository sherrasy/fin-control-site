# fin-control-site

Приложение для управления таблицей предметов, включающее следующие функции:

- загрузка данных из `data.json` файла (в корне проекта) по нажатию на кнопку `загрузить данные из csv`;

  <details>
    <summary> 👀 Показать </summary>
    <p>
        <img src="https://github.com/user-attachments/assets/152ce3b1-3260-405d-9026-46d57205bd1e" width='700'>
        <img src="https://github.com/user-attachments/assets/7705b83e-c15b-46c1-ae48-d73369238157"  width='700'>

    </p>
    </details>

- сортировка по нажатию на заголовок колонки;

    <details>
    <summary> 👀 Показать </summary>
    <p>
       <img src="https://github.com/user-attachments/assets/024b8a0c-f09b-447e-a402-2415ea2b6552" width='700'>
    </p>
    </details>

- фильтрация данных по нажатию на на кнопку `сформировать`, а также сброс фильтрации при нажатии на кнопку `очистить`;

  <details>
    <summary> 👀 Показать </summary>
    <p>
    <img src="https://github.com/user-attachments/assets/6b13280d-817b-4139-ae84-5e36ca316225" width="700" >
    </p>
    </details>


- сохранение актуальных данных хранилища в формате json по нажатию на кнопку `экспорт`;

- изменение данных полей 'Доступно к заказу', 'Товары в пути', 'Итого кол-во товаров' при двойном клике на нужное поле (последнее поле также пересчитывается в зависимости от изменения двух других). Строка итого пересчитывается в зависимости от полученных данных автоматически.

    <details>
    <summary> 👀 Показать </summary>
    <p>
  <img width="700"  src="https://github.com/user-attachments/assets/a6bd0f5e-73e8-4752-b279-d7f7874dcba9">
  <img width="700"  src="https://github.com/user-attachments/assets/77cb82c5-f928-4ff7-85da-d4bcd99583f0">
  <img width="700"  src="https://github.com/user-attachments/assets/bada4b2c-e4e0-4514-a905-1fe82b3e891e">
    </p>
    </details>


### Запуск приложения

```bash
cd fin-control-site
npm i
npm run dev
```

Приложение будет доступно на `http://localhost:4001/fin-control-site/`
