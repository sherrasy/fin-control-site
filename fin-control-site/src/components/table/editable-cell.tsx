import { Item } from '@frontend-types/item.interface';
import { updateCurrentItem } from '@store/items-data/items-data';
import { useAppDispatch } from '@utils/hooks';
import { Form, FormInstance, InputNumber } from 'antd';
import React, { useRef, useState } from 'react';

interface EditableCellProps {
    title: keyof Item;
    record: Item;
    editable: boolean;
}

const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
    title,
    record,
    editable,
    children,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const formRef = useRef<FormInstance>(null);

    const dispatch = useAppDispatch();
    const initialValues = {
        [title]: record[title],
    };

    const toggleEdit = () => {
        setEditing((prev) => !prev);
    };

    const checkValidity = (value: number | null) =>
      value !== null && value >= 0 && Number.isInteger(value); 

    const handleSave = () => {
        const value = formRef.current?.getFieldsValue()[title];
        const isValid = checkValidity(value)
        if (isValid) {
            const newData = { ...record, [title]: value };
            const newAmount = newData.delivery + newData.stock;
            const data = { ...newData, amount: newAmount };
            dispatch(updateCurrentItem(data));
            toggleEdit();
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form initialValues={initialValues}  ref={formRef}
>
                <Form.Item
                    name={title}
                    rules={[
                        {
                            required: true,
                            message: `Поле обязательно для заполнения (только цифры).`,
                        },
                        {
                            pattern: /^[0-9]*$/,
                            message: 'Только целые положительные числа',
                        },
                    ]}
                >
                    <InputNumber
                        onPressEnter={handleSave}
                        onBlur={handleSave}
                    />
                </Form.Item>
            </Form>
        ) : (
            <div className='editable-cell-value-wrap' onDoubleClick={toggleEdit} >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

export default EditableCell;
