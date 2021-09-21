import React from 'react';
import classes from './Skeletion.module.scss';

const SkeletonCard = () => {
    return (
        <div className={classes.skeletonCard}>
            <div className={classes.image}></div>
            <div className={classes.title}></div>
            <div className={classes.text}></div>
            <div className={classes.text}></div>
            <div className={classes.lastText}></div>
            <div className={classes.bottom}>
                <div className={classes.btn}></div>
                <div className={classes.btn}></div>
            </div>
        </div>
    );
};

export default SkeletonCard;
