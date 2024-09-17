import HeaderInfo from "@components/header-info/header-info";
import MenuInfo from "@components/menu-info/menu-info";
import CompanyInfo from "@components/company-info/company-info";
import ContactButton from "@components/contact-button/contact-button";
import Filters from "@components/filters/filters";
import ItemsTable from "@/components/table/table";

function MainPage(): JSX.Element {

  return (
    <div className='main-page'>
      <div className='main-page__side-section'>
        <MenuInfo/>
        <CompanyInfo/>
        <ContactButton/>
      </div>
      <div className='main-page__main-section'>
        <div className='main-page__main-section_upper-part'>
          <HeaderInfo/>
          <Filters/>
        </div>
        <div className='main-page__main-section_lower-part'>
          <ItemsTable/>
        </div>
      </div>
    </div>
  );
}
export default MainPage;
