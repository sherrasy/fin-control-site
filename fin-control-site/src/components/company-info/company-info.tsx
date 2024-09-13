function CompanyInfo(): JSX.Element {
    const defaultInfo = {
        phone: '8 (999) 999 99 99',
        email: 'pf1@werthesest.ru',
        time: 'Пн - Пт с 9:00 до 19:00 мск',
    };

    const linkTitles = [
        { id: 1, title: 'Пользовательское соглашение' },
        { id: 2, title: 'Политика конфиденциальности' },
        { id: 3, title: 'Юридическая информация' },
        { id: 4, title: 'Публичная оферта' },
    ];

    return (
        <div className='company-info'>
            <div className='company-info__contacts-block contacts-block'>
                <h2 className='contacts-block__title'> Техническая поддержка</h2>
            <div className='contacts-block__contacts'>
                <div className="custom-input" >
                    <label>Номер поддержки:</label>
                    <input defaultValue={defaultInfo.phone} readOnly />
                </div>
                <div className="custom-input">
                    <label>Почта поддержки:</label>
                    <input defaultValue={defaultInfo.email} readOnly />
                </div>
            <div className="custom-input input-time">
                <label>Часы работы:</label>
                <input defaultValue={defaultInfo.time} readOnly />
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
