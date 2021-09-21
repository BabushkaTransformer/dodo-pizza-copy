import React from 'react';
import classes from "./Modals.module.scss";
import CartItem from "../../CartItem/CartItem";
import classNames from "classnames";
import {useSelector} from "react-redux";
import EmptyCart from "../Svg/EmptyCart";


const CartModal = ({visible, setVisible}) => {
    const cartItems = useSelector(state => state.cart.items);
    let modal = classNames(classes.cartModal, {[classes.active]: visible});
    console.log(cartItems)

    return (
        <div className={modal} onMouseLeave={() => setVisible(false)} onMouseEnter={() => setVisible(true)}>
            {cartItems.length ? <>
                <div className={classes.top}>
                    {cartItems?.map(item => {
                        return <CartItem key={item.id} {...item}/>
                    })}
                </div>
                <div className={classes.bottom}>
                    Сумма
                    заказа <span>{cartItems.reduce((total, item) => total + item.count * item.price, 0)} сом</span>
                </div>
            </> :
                <div className={classes.empty}>
                    <EmptyCart/>
                   <span>Ой, пусто!</span>
                </div>}

        </div>
    );
};

export default CartModal;
