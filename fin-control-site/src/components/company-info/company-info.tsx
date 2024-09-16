import { defaultCompanyInfo, linkTitles } from "@/utils/constant";

function CompanyInfo(): JSX.Element {
    return (
        <div className='company-info'>
            <div className='company-info__contacts-block contacts-block'>
                <h2 className='contacts-block__title'> Техническая поддержка</h2>
            <div className='contacts-block__contacts'>
                <div className="custom-input" >
                    <label>Номер поддержки:</label>
                    <input defaultValue={defaultCompanyInfo.phone} readOnly />
                </div>
                <div className="custom-input">
                    <label>Почта поддержки:</label>
                    <input defaultValue={defaultCompanyInfo.email} readOnly />
                </div>
            <div className="custom-input input-time">
                <label>Часы работы:</label>
                <input defaultValue={defaultCompanyInfo.time} readOnly />
            </div>
            </div>
            </div>
            <div className='company-info__links-block'>
                {linkTitles.map(({ title, id }) => (
                    <a className='info-link' href='#' key={id}> {title} </a>
                ))}
            </div>
        </div>
    );
}
export default CompanyInfo;
