import { CloseOutlined, DownOutlined, EditFilled, FileTextFilled, ReadFilled, SettingFilled } from "@ant-design/icons";
import { Menu, MenuProps } from 'antd';
import { useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function MenuInfo(): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false); 
  
  const menuItems: MenuItem[] = [
    {
      key: 'settings',
      label: 'Настройки',
      icon:<SettingFilled />,
      children: [{ key: 's1', label: 'Настройки' }],
    },
    {
      key: 'edit',
      label: 'Внесение данных',
      icon:<EditFilled />,
      children: [{ key: 'e1', label: 'Внесение данных' }],
    },
    { key: 'reports', 
      label: 'Отчеты',
      icon:<FileTextFilled />,
      children: [{ key: 'r1', label: 'Отчеты' }] 
  },
    {
      key: 'database',
      label: 'База знаний',
      icon:<ReadFilled />,
      children: [{ key: 'd1', label: 'База знаний' }],
    }
  ];

  const handleClickMenu = ()=>{
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className='menu-info'>
      <div className='menu-info__header'>
        <div className='menu-info__title'>
          <span>ФИН</span> Контроль
        </div>
        <button className='menu-info__toggle' onClick={handleClickMenu}>Меню {isCollapsed ? <DownOutlined /> :<CloseOutlined />}</button>
      </div>
      {!isCollapsed && <Menu theme="dark" className='menu-info__menu' mode='inline' items={menuItems} />}
    </div>
  );
}
export default MenuInfo;
