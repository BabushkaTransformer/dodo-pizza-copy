import React from 'react';
import classes from './CartItem.module.scss';
import {useDispatch} from "react-redux";
import {decrementCart, incrementCart, deleteFromCart} from "../../store/slices/cartSlice";


const CartItem = (props) => {
    const dispatch = useDispatch();
    const {title, count, price, image, id} = props;

    return (
        <div className={classes.cartItem}>
            <div className={classes.img}>
                <img
                    src={image}
                    alt='img'/>
            </div>
            <div className={classes.description}>
                <div className={classes.title}>{title}
                    <svg width="20" height="20" fill="none" className="sc-17s91h6-6 iyMxzs" onClick={() => dispatch(deleteFromCart(id))}>
                        <path
                            d="M14.75 6h-9.5l.66 9.805c.061 1.013.598 1.695 1.489 1.695H12.6c.89 0 1.412-.682 1.49-1.695L14.75 6z"
                            fill="#373536"/>
                        <path
                            d="M13.85 3.007H6.196C4.984 2.887 5.021 4.365 5 5h9.992c.024-.62.07-1.873-1.142-1.993z"
                            fill="#373535"/>
                    </svg>
                </div>
                <div className={classes.text}>Средняя 30 см, традиционное тесто</div>
                <div className={classes.action}>
                    <div className={classes.counter}>
                        <div>
                            <button className={classes.operator} onClick={() => dispatch(decrementCart(props))}>
                                <svg width="10" height="10" className="icon">
                                    <rect fill="#454B54" y="4" width="10" height="2" rx="1"/>
                                </svg>
                            </button>
                            <span className={classes.value}>{count}</span>
                            <button className={classes.operator} onClick={() => dispatch(incrementCart(props))}>
                                <svg width="10" height="10" className="icon">
                                    <g fill="#454B54">
                                        <rect x="4" width="2" height="10" ry="1"/>
                                        <rect y="4" width="10" height="2" rx="1"/>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={classes.price}>{price * count} сом</div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
