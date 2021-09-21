import React, {useEffect, useState} from 'react';
import classes from './Header.module.scss';
import {Link} from "react-scroll";
import logo from '../../assets/icon/dodo-logo.png';
import {useHistory} from "react-router";
import CartModal from "../UI/Modals/CartModal";
import {useDispatch, useSelector} from "react-redux";
import {CART_ROUTE} from "../../routes";
import {ToastContainer} from "react-toastify";
import SignIn from "../Auth/SignIn";
import {openAuth, openConfirm} from "../../store/slices/modalSlice";
import PhoneConfirm from "../Auth/PhoneConfirm";


const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [scroll, setScroll] = useState(true);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY < 73);
        });
        return () => {
            setScroll(false);
        };
    }, []);

    return (
        <>
            <header className={classes.header}>
                <div className={classes.container}>
                    <div className={classes.top}>
                        <div className={classes.logo} onClick={() => history.push('/')}>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4duhZRnwK8qEA3rYjSq10EG9Ac_Rxv37rQ&usqp=CAU'
                                alt='logo'/>
                        </div>
                        <div className={classes.delivery}>
                            <p>Доставка пиццы Бишкек</p>
                            <div>
                                <span>35 мин</span>
                                <span>4.86
                                <svg width="16" height="16" fill="none" className="f0e4q0-3 aRWjx"><defs><linearGradient
                                    id="star_16_svg__a"><stop offset="50%" stopColor="#FFD200"/><stop offset="50%"
                                                                                                      stopColor="#999"
                                                                                                      stopOpacity="0.5"/></linearGradient></defs><path
                                    fill="url(#star_16_svg__a)"
                                    d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"/></svg>
                            </span>
                            </div>
                        </div>
                        <div className={classes.contact}>
                            <div>звонок по
                                <img
                                    src='https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/35a3090c0e41458086520f78ab9f892f.svg'
                                    alt='social'/>
                                <img
                                    src='https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/092d276870e24dacaeb098fb1768d585.svg'
                                    alt='social'/>
                                <img
                                    src='https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/d2a8e028a02042b6b72ff780d9fdbdd8.svg'
                                    alt='social'/>
                            </div>
                            <span>0 (551) 550-550</span>
                        </div>
                        <div className={classes.signIn} onClick={() => dispatch(openAuth())}>Войти</div>
                    </div>
                </div>
            </header>
            <nav className={scroll ? classes.bottom : classes.bottomScrolled}>
                <div className={classes.bottomInner}>
                    <div className={classes.overflow}>
                        <div className={classes.hiddenLogo}>
                            <img src={logo} alt="logo"/>
                        </div>
                        <ul className={classes.menu}>
                            <Link to='pizza'
                                  spy={true}
                                  smooth={true}
                                  activeClass={classes.active}
                                  duration={500}>
                                <li>Пиццы</li>
                            </Link>
                            <Link to='snacks'
                                  spy={true}
                                  smooth={true}
                                  activeClass={classes.active}
                                  duration={500}>
                                <li>Закуски</li>
                            </Link>
                            <Link to='deserts'
                                  spy={true}
                                  smooth={true}
                                  activeClass={classes.active}
                                  duration={500}>
                                <li>Десерты</li>
                            </Link>
                            <Link to='beverages'
                                  spy={true}
                                  smooth={true}
                                  activeClass={classes.active}
                                  duration={500}>
                                <li>Напитки</li>
                            </Link>
                            <Link to='others'
                                  spy={true}
                                  smooth={true}
                                  activeClass={classes.active}
                                  duration={500}>
                                <li>Другие товары</li>
                            </Link>
                            <li onClick={() => history.push('/bonus')}>Акции</li>
                        </ul>
                    </div>
                    <div className={classes.cart}>
                        <button onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} onClick={() => history.push(CART_ROUTE)}>
                            Корзина
                            <div className={classes.verticalLine}></div>
                            {cartItems.reduce((acc, item) => acc + item.count, 0)}
                        </button>
                        <CartModal visible={visible} setVisible={setVisible}/>
                        <ToastContainer className={classes.toast} position="bottom-right"/>
                    </div>
                </div>
            </nav>
            <SignIn/>
            <PhoneConfirm/>
        </>
    );
};

export default Header;
