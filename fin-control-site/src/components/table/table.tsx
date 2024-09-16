import {
  CloseOutlined,
  FolderAddFilled,
  ImportOutlined,
} from '@ant-design/icons';
import { fetchItems } from '@store/items-data/actions';
import { getItems } from '@store/items-data/selectors';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { Button, Table, } from 'antd';
import { columnsData } from './columns-data';
import TableSummary from './table-summary';

function ItemsTable(): JSX.Element {
  const items = useAppSelector(getItems);
  const dispatch = useAppDispatch();
  const handleImportClick = () => {
    dispatch(fetchItems());
  }

  return (
    <div className='table'>
      <div className='table__controls'>
        <div className='table__controls_left-part'>
          <Button type='text' icon={<ImportOutlined />} onClick={handleImportClick}>
            {' '}
            Загрузить данные из csv
          </Button>
          <Button type='text' icon={<FolderAddFilled />}>
            Изменить данные
          </Button>
        </div>
        <div className='table__controls_right-part'>
          <Button type='text' iconPosition='end' icon={<CloseOutlined />}>
            {' '}
            Очистить
          </Button>
        </div>
      </div>
      <div className='table__container'>
        <Table className='table__items-table'
          pagination={false}
          columns={columnsData}
          scroll={{ x:1300, y: 400 }}
          dataSource={items ? items : undefined}
          showSorterTooltip={{ target: 'sorter-icon' }}
          summary={()=><Table.Summary fixed='bottom'><TableSummary data={items}/>
          </Table.Summary>}
        />
      </div>
    </div>
  );
}
export default ItemsTable;
