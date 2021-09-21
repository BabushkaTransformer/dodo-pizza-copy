import React, {useState} from 'react';
import classes from "../Modals/Modals.module.scss";

const Types = ({types, currentType, setCurrentType}) => {

    let typeTransform;
    let availableTypes = {
        0: 'Традиционный',
        1: 'Тонкий'
    };
    if (+currentType === 0) {
        typeTransform = {transform: 'translateX(0)'};
    } else if (+currentType === 1) {
        typeTransform = {transform: 'translateX(100%)'};
    }
    return (
        <>
            {types?.length && <div className={classes.sizes}>
                <div className={classes.currentType} style={typeTransform}></div>
                {Object.keys(availableTypes).map((el) => {
                    return (
                        <React.Fragment key={el}>
                            <label key={el} htmlFor={'type_' + el}
                                   className={types?.includes(+el) ? "" : classes.disabled}>{availableTypes[el]}</label>
                            <input type='checkbox' id={'type_' + el} value={el}
                                   onClick={(e) => setCurrentType(e.target.value)}
                                   disabled={!types?.includes(+el)}/>
                        </React.Fragment>
                    )
                })}
            </div>}
        </>
    );
};

export default Types;
