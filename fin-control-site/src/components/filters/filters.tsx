import { ReadFilled, UploadOutlined } from "@ant-design/icons";
import { FilterFormValues } from "@frontend-types/filter-form.interface";
import { setCurrentFilters } from "@store/items-data/items-data";
import { getItems } from "@store/items-data/selectors";
import { CategoryName } from "@utils/constant";
import { saveJSONFile } from "@utils/helpers";
import { useAppDispatch, useAppSelector } from "@utils/hooks";
import { Button, Form, FormInstance, Input, InputNumber, Select } from "antd";
import { useRef, useState } from "react";


function Filters(): JSX.Element {
    const date = '01.04.2023';
    const initialValues = {
        category: CategoryName.jeans
    }
    const dispatch = useAppDispatch();
    const formRef = useRef<FormInstance<FilterFormValues>>(null)
    const data = useAppSelector(getItems);
    const [showError, setShowError] = useState(false)
    const handleExportClick = () => {
        if (!data) {
            setShowError(true)
            return;
        }
        saveJSONFile(data);
        setShowError(false);
    }

    const handleSubmitClick = () => {
        if (formRef.current) {
            const filters = formRef.current.getFieldsValue();
            dispatch(setCurrentFilters(filters))
        }
    };

    return (
        <div className='filters'>
            <div className="filters__heading">
                <h1 className="filters__title"> Остатки сформированы на {date} г.</h1>
                <Button type='primary' icon={<ReadFilled />} className="filters__info-btn">Инструкции</Button>
            </div>
            <div className="filters__container">
                <Form initialValues={initialValues} ref={formRef} className="filters__form filters-form" autoComplete="off">
                    <Form.Item label="Баркод" name='barcode' className="filters-form__item">
                        <InputNumber controls={false} placeholder="5643242134323099" className="custom-input input-barcode" />
                    </Form.Item>
                    <Form.Item label="Артикул" name='part_number' className="filters-form__item">
                        <Input placeholder="ДжЖСинМом0823" className="custom-input input-part_number" />
                    </Form.Item>
                    <Form.Item label="Размер" name='size' className="filters-form__item">
                        <Input placeholder="44" className="custom-input input-size" />
                    </Form.Item>
                    <Form.Item label="Категория" name='category' className="filters-form__item">
                        <Select className="custom-select">
                            {Object.entries(CategoryName).map(([key, value]) => <Select.Option key={key} value={value}>{value}</Select.Option>)}
                        </Select>
                    </Form.Item>
                </Form>
                <div className="filters__controls filter-controls">
                    <Button type="primary" className="filter-controls__submit" onClick={handleSubmitClick}>Сформировать</Button>
                    <Button type="primary" className="filter-controls__export" icon={<UploadOutlined />} onClick={handleExportClick}>Экспорт</Button>
                    {showError && <p className="filter-controls__error"> Произошла ошибка экспорта. Попробуйте позже</p>}
                </div>
            </div>
        </div>

    );
}
export default Filters;