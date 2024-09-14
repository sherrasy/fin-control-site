import { Button, Form, Input, InputNumber, Select } from "antd";
import { ReadFilled, UploadOutlined } from "@ant-design/icons";
import { CategoryName } from "@utils/constant";

function Filters(): JSX.Element {
    return (
        <div className='filters'>
            <div className="filters__heading">
                <h1 className="filters__title"></h1>
                <Button type='primary' icon={<ReadFilled />} className="filters__info-btn">Инструкции</Button>
            </div>
            <div className="filters__container">
                <Form className="filters__form filters-form" autoComplete="off">
                    <Form.Item label="Баркод" name='barcode' className="filters-form__item">
                        <InputNumber placeholder="5643242134323099" />
                    </Form.Item>
                    <Form.Item label="Артикул" name='part_number' className="filters-form__item">
                        <Input placeholder="ДжЖСинМом0823" />
                    </Form.Item>
                    <Form.Item label="Размер" name='size' className="filters-form__item">
                        <InputNumber placeholder="44" />
                    </Form.Item>
                    <Form.Item label="Категория" name='category' className="filters-form__item">
                        <Select  defaultValue={CategoryName.jeans}>
                            {Object.entries(CategoryName).map(([key, value]) => <Select.Option key={key} value={key}>{value}</Select.Option>)}
                        </Select>
                    </Form.Item>
                </Form>
                <Button type="primary" className="filters__submit-btn">Сформировать</Button>
                <Button type="primary" className="filters__export-btn"  icon={<UploadOutlined /> }>Экспорт</Button>
            </div>
        </div>

    );
}
export default Filters;