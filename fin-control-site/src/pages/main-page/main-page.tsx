import MenuInfo from "@/components/menu-info/menu-info";
import CompanyInfo from "@components/company-info/company-info";
import ContactButton from "@components/contact-button/contact-button";

function MainPage(): JSX.Element {

  return (
    <div className='main-page'>
      <div className='main-page__side-section'>
        <MenuInfo/>
        <CompanyInfo/>
        <ContactButton/>
      </div>
    </div>
  );
}
export default MainPage;
