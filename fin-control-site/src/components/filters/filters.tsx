import { Button, Form, Input, InputNumber, Select } from "antd";
import { ReadFilled, UploadOutlined } from "@ant-design/icons";
import { CategoryName } from "@utils/constant";

function Filters(): JSX.Element {
    const date = '01.04.2023';
    return (
        <div className='filters'>
            <div className="filters__heading">
                <h1 className="filters__title"> Остатки сформированы на {date} г.</h1>
                <Button type='primary' icon={<ReadFilled />} className="filters__info-btn">Инструкции</Button>
            </div>
            <div className="filters__container">
                <Form className="filters__form filters-form" autoComplete="off">
                    <Form.Item label="Баркод" name='barcode' className="filters-form__item">
                        <InputNumber controls={false} placeholder="5643242134323099" className="custom-input input-barcode"/>
                    </Form.Item>
                    <Form.Item label="Артикул" name='part_number' className="filters-form__item">
                        <Input placeholder="ДжЖСинМом0823" className="custom-input input-part_number" />
                    </Form.Item>
                    <Form.Item label="Размер" name='size' className="filters-form__item">
                        <Input placeholder="44" className="custom-input input-size"/>
                    </Form.Item>
                    <Form.Item label="Категория" name='category' className="filters-form__item">
                        <Select  defaultValue={CategoryName.jeans} className="custom-select">
                            {Object.entries(CategoryName).map(([key, value]) => <Select.Option key={key} value={key}>{value}</Select.Option>)}
                        </Select>
                    </Form.Item>
                </Form>
                <div className="filters__controls filter-controls">
                <Button type="primary" className="filter-controls__submit">Сформировать</Button>
                <Button type="primary" className="filter-controls__export"  icon={<UploadOutlined /> }>Экспорт</Button>
            </div>
            </div>
        </div>

    );
}
export default Filters;