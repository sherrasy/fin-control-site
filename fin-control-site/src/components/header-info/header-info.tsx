import Avatar from "@assets/avatar.svg?react";
import Calendar from "@assets/calendar.svg?react";
import{ArrowRightOutlined} from "@ant-design/icons";

function HeaderInfo(): JSX.Element {

const defaultData = {
    name:"Иванов И.И.",
    date:'15.04.2024'
}
    return (
      <div className='header-info'>
        <div className="header-info_left-part">
          <div className="header-info__user">
          <Avatar width={32} height={32}/>
          <span>{defaultData.name}</span>
          </div>
        <div className="header-info__calendar">
          <Calendar width={20} height={20}/>
          <span>Тариф до {defaultData.date}</span>
          </div>
          </div>
        <div className="header-info_right-part">
          <button className="header-info__button exit-btn">Выйти</button>
          <button className="header-info__button about-btn"><span>О нас</span> <ArrowRightOutlined /></button>
        </div>
      </div>
    );
  }
  export default HeaderInfo;
  