import React, {useRef, useState} from 'react';
import classes from './Auth.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../../store/slices/authSlice";
import classNames from "classnames";
import {closeAuth} from "../../store/slices/modalSlice";
import {getAuth, RecaptchaVerifier} from "firebase/auth";
import CloseIcon from "../UI/Svg/CloseIcon";

const auth = getAuth();


const SignIn = () => {
    const dispatch = useDispatch();
    const captchaRef = useRef(null);
    const [value, setValue] = useState('');
    const isOpen = useSelector(state => state.modal.isOpenAuth);

    let backdrop = classNames(classes.backdrop, {[classes.active]: isOpen});


    const verify = () => {
        if (captchaRef.current) {
            window.recaptchaVerifier = new RecaptchaVerifier(captchaRef.current, {
                'size': 'invisible',
                'callback': () => {}
            }, auth);
        }
    }

    const signInHandler = (e) => {
        e.preventDefault();
        verify();
        dispatch(signIn(value));
    }


    return (
        <div className={backdrop} onClick={() => dispatch(closeAuth())}>
            <form className={classes.signIn} onClick={(e) => e.stopPropagation()}>
                <div className={classes.close} onClick={() => dispatch(closeAuth())}>
                    <CloseIcon/>
                </div>

                <h2>Вход на сайт</h2>
                <p>Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</p>
                <div className={classes.signIn_input}>
                    <label htmlFor='signIn'>Номер телефона</label>
                    <input type='text' id='signIn' value={value} onChange={(e) => setValue(e.target.value)}/>
                </div>
                <button ref={captchaRef} type='submit' onClick={(e) => signInHandler(e)}>Выслать код</button>
            </form>
        </div>
    );
};

export default SignIn;
