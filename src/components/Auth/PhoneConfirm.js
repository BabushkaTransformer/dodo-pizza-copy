import React, {useState} from 'react';
import classes from './Auth.module.scss';
import {closeConfirm, openAuth} from "../../store/slices/modalSlice";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import CloseIcon from "../UI/Svg/CloseIcon";
import {phoneConfirm} from "../../store/slices/authSlice";


const PhoneConfirm = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modal.isOpenConfirm);
    const [values, setValues] = useState(Array(4).fill(''));
    const [confirm, setConfirm] = useState({
        input_1: "",
        input_2: "",
        input_3: "",
        input_4: "",
    });
    let backdrop = classNames(classes.backdrop, {[classes.active]: isOpen});
    const inputRefs = [];

    const changePhone = () => {
        dispatch(closeConfirm());
        dispatch(openAuth());
    }

    const sendConfirmCode = (e) => {
        e.preventDefault();
        let full = '';
        Object.keys(confirm).map(el => {
            full += confirm[el];
        });
        dispatch(phoneConfirm(full));
    }

    const onChange = ({target: t}) => {
        const
            index = +t.dataset.index,
            value = t.value;
            setConfirm({...confirm, [`input_${index + 1}`]: value});
        setValues(values.map((n, i) => i === index ? value : n));

        if (index < values.length - 1 && value) {
            inputRefs[index + 1].focus();
            inputRefs[index + 1].select();
        }
    };

    const validate = (evt) => {
        let theEvent = evt || window.evt;
        let key;

        if (theEvent.type === 'paste') {
            key = evt.clipboardData.getData('text/plain');
        } else {
            key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        }
        let regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }


    return (
        <div className={backdrop} onClick={() => dispatch(closeConfirm())}>
            <form className={classes.signIn} onClick={(e) => e.stopPropagation()}>
                <div className={classes.close} onClick={() => dispatch(closeConfirm())}>
                    <CloseIcon/>
                </div>

                <h2>Вход на сайт</h2>
                <p>
                    Код отправили сообщением на <span>+996 707 77 25 25</span>
                    <b onClick={() => changePhone()}>Изменить</b>
                </p>

                <div className={classes.confirm_input}>
                    {values.map((n, i) => {
                        return <input type='text'
                                      key={i}
                                      data-index={i}
                                      onKeyPress={(e) => validate(e)}
                                      onChange={onChange}
                                      ref={input => inputRefs[i] = input}
                                      maxLength="1"/>
                    })}
                </div>
                <button type='submit' onClick={(e) => sendConfirmCode(e)}>Потвердить</button>
            </form>
        </div>
    );
};

export default PhoneConfirm;
