import React from 'react';
import classes from './Bonus.module.scss';
import BonusCardItem from "../../components/BonusCardItem/BonusCardItem";

const Bonus = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Акции</h1>
            <div className={classes.list}>
                <BonusCardItem/>
                <BonusCardItem/>
                <BonusCardItem/>
                <BonusCardItem/>
            </div>
        </div>
    );
};

export default Bonus;
