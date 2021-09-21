import React, {useEffect} from 'react';
import classes from './CardList.module.scss';
import CardItem from "../CardItem/CardItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchPizza} from "../../store/slices/pizzaSlice";
import {fetchSnacks} from "../../store/slices/snacksSlice";
import {fetchDeserts} from "../../store/slices/desertsSlice";
import {fetchBeverages} from "../../store/slices/beveragesSlice";
import {fetchOthers} from "../../store/slices/othersSlice";
import {Element} from "react-scroll";
import SkeletonCard from "../UI/Skeleton/SkeletonCard";
import {fetchCart} from "../../store/slices/cartSlice";

function CardList({type, title}) {
    const dispatch = useDispatch();

    const {items, loading} = useSelector(state => {
        switch (type) {
            case 'snacks':
                return state.snacks;
            case 'deserts':
                return state.deserts;
            case 'beverages':
                return state.beverages;
            case 'others':
                return state.others;
            default:
                return state.pizza;
        }
    })

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch])

    useEffect(() => {
        switch (type) {
            case 'snacks':
                dispatch(fetchSnacks());
                break;
            case 'deserts':
                dispatch(fetchDeserts());
                break;
            case 'beverages':
                dispatch(fetchBeverages());
                break;
            case 'others':
                dispatch(fetchOthers());
                break;
            default:
                dispatch(fetchPizza());
        }
    }, [dispatch, type])

    return (
        <Element id={type || 'pizza'}>
            <div className={classes.container}>
                <div className={classes.title}>{title || 'Пиццы'}</div>
                <div className={classes.list} id={type || 'pizza'}>
                    {!loading ? items.map(each => <CardItem key={each.id} {...each}/>) : <SkeletonCard/>}
                </div>
            </div>
        </Element>
    );
};

export default CardList;
