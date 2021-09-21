import React from 'react';
import classes from './BonusCardItem.module.scss';


const BonusCardItem = () => {
    return (
        <div className={classes.bonus}>
            <div className={classes.bonusInner}>
                <div className={classes.image}>
                    <img
                        src='https://dodopizza-a.akamaihd.net/static/Img/BonusActionBanners/Gallery/g_1622183316_b02f759e708b48968eb72ec55e955c9b.jpeg' alt='img'/>
                </div>
                <h1 className={classes.title}>Скидка 10% в ресторане через приложение!</h1>
                <div className={classes.description}>Откройте приложение и переключитесь на вкладку «В зале». Cделайте
                    заказ, заберите в пиццерии и получите скидку 10%. Оплата совершается только картой. Акция действует в
                    период с 27 июля по 15 октября. Скидка не суммируется с комбо.
                </div>
            </div>
        </div>
    );
};

export default BonusCardItem;
