import React, {useEffect} from 'react';
import classes from './Cart.module.scss';
import {useDispatch, useSelector} from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import {fetchCart} from "../../store/slices/cartSlice";
import {useHistory} from "react-router";
import {MAIN_ROUTE} from "../../routes";


const Cart = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cartItems = useSelector(state => state.cart.items);

    useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch]);


    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.headerInner}>
                    <div className={classes.logo} onClick={() => history.push(MAIN_ROUTE)}>
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4duhZRnwK8qEA3rYjSq10EG9Ac_Rxv37rQ&usqp=CAU'/>
                    </div>
                    <div className={classes.steps}>
                        <ul>
                            <li className={classes.step}>
                                <span className={classes.stepNum}>1</span>
                                <span className={classes.stepText}>Корзина</span>
                            </li>
                            <li className={classes.step}>
                                <span className={classes.stepNum}>2</span>
                                <span className={classes.stepText}>Корзина</span>
                            </li>
                            <li className={classes.step}>
                                <span className={classes.stepNum}>3</span>
                                <span className={classes.stepText}>Корзина</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={classes.cart}>
                <div className={classes.cartInner}>
                    <div className={classes.title}>Корзина</div>

                    {cartItems.length ?
                        <div className={classes.list}>
                            {cartItems.map(item => <CartItem key={item.id} {...item}/>)}
                        </div> :
                        <div className={classes.emptyCart}>Добавьте что нибудь из меню</div>
                    }

                    <div className={classes.total}>
                        Сумма
                        заказа: <span>{cartItems.reduce((total, item) => total + item.count * item.price, 0)} сом</span>
                    </div>
                    <div className={classes.btns}>
                        <button className={classes.goBack} onClick={() => history.push(MAIN_ROUTE)}>
                            <svg width="24" height="24" fill="none" className="button-arrow">
                                <path d="M10 18l6-6-6-6" stroke="#000" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                            Вернутся в меню
                        </button>
                        <button className={classes.goNext}>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
