import { Button } from "antd";
import {  FolderAddFilled, ImportOutlined, CloseOutlined } from "@ant-design/icons";

function Table(): JSX.Element {

    return (
      <div className='table'>
        <div className="table__controls">
            <div className="table__controls_left-part">       
                <Button type="text" icon={<ImportOutlined />}> Загрузить данные из csv</Button>
                <Button type="text" icon={<FolderAddFilled />}>Изменить данные</Button>
                </div>
            <div className="table__controls_right-part">
                <Button type="text" iconPosition='end' icon={<CloseOutlined />}> Очистить</Button>
            </div>

        </div>
      </div>
    );
  }
  export default Table;
  