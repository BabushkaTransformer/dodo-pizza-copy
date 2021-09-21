import React from 'react';
import classes from './CardItem.module.scss';
import {useDispatch} from "react-redux";
import {openModal} from "../../store/slices/modalSlice";


const CardItem = (props) => {
    const dispatch = useDispatch();
    const {title, image, description, price} = props;

    return (
        <div className={classes.card}
             onClick={() => dispatch(openModal(props))}>
            <div className={classes.top}>
                <div className={classes.image}>
                    <img
                        src={image}
                        alt={title}/>
                </div>
                <div className={classes.title}>{title}</div>
                <div className={classes.desc}>{description}</div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.price}>от {price}с.</div>
                <button className={classes.button}>Выбрать</button>
            </div>
        </div>
    );
};

export default CardItem;
