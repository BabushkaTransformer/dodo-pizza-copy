import React, {useState} from 'react';
import classes from './Checkboxes.module.scss';


const Sizes = ({sizes, setTransform, currentSize, setCurrentSize}) => {

    let sizeTransform;
    let availableSizes = {
        25: 'Маленькая',
        30: 'Средняя',
        35: 'Большая'
    };

    if (+currentSize === 25) {
        sizeTransform = {transform: 'translateX(0)'};
    } else if (+currentSize === 30) {
        sizeTransform = {transform: 'translateX(100%)'};
    } else if (+currentSize === 35) {
        sizeTransform = {transform: 'translateX(200%)'};
    }

    const sizeChangeHandler = (value) => {
        if (+value === 25) {
            setTransform({transform: 'scale(0.7)'})
        } else if (+value === 30) {
            setTransform({transform: 'scale(0.85)'})
        } else if (+value === 35) {
            setTransform({transform: 'scale(1)'})
        }
    }


    return (
        <>
            {sizes?.length && <div className={classes.sizes}>
                <div className={classes.currentSize} style={sizeTransform}></div>
                {Object.keys(availableSizes).map((el) => {
                    return (
                        <React.Fragment key={el}>
                            <label htmlFor={'size_' + el}
                                   className={sizes?.includes(+el) ? "" : classes.disabled}>{availableSizes[el]}</label>
                            <input type='checkbox' id={'size_' + el} value={el}
                                   onClick={(e) => {
                                       sizeChangeHandler(e.target.value);
                                       setCurrentSize(e.target.value);
                                   }}
                                   disabled={!sizes?.includes(+el)}/>
                        </React.Fragment>
                    )
                })}
            </div>}
        </>
    );
};

export default Sizes;
