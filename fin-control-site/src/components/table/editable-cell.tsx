import { Item } from '@/types/item.interface';
import { updateCurrentItem } from '@store/items-data/items-data';
import { useAppDispatch } from '@utils/hooks';
import { Form, InputNumber } from 'antd';
import React, { useState, useRef } from 'react';

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
    const currentValue:number =(record && typeof record[title] === 'number') ? record[title] : 0;
    const [value, setValue] = useState<number>(currentValue);
    const inputRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();
    const initialValues={
        [title]:value,
    }
    const toggleEdit = () => {
        setEditing((prev) => !prev);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleSave = () => {
        if (value !== record[title]) {
            const newData = { ...record, [title]: value };
            const newAmount = newData.delivery + newData.stock;
            const data = {...newData, amount: newAmount}
            dispatch(updateCurrentItem(data));
        }
        toggleEdit();
    };

    const handleChange = (value:number|null) => {
        if (value) {
            setValue(value);
        } else {
            setValue(0);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form initialValues={initialValues}>
                <Form.Item
                    name={title}
                    rules={[
                        {
                            required: true,
                            message: `Поле обязательно для заполнения (только цифры).`,
                        },
                    ]}
                >
                    <InputNumber
                        ref={inputRef}
                        onChange={handleChange}
                        onPressEnter={handleSave}
                        onBlur={handleSave}
                    />
                </Form.Item>
            </Form>
        ) : (
            <div className='editable-cell-value-wrap' onDoubleClick={toggleEdit}>
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

export default EditableCell;
