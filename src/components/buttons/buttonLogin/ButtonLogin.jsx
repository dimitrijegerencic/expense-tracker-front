import React from "react";
import classes from './ButtonLogin.module.scss';

const ButtonLogin = ({label='Log in', type, onClick}) => {
    return <button type={type} onClick={(e)=>onClick(e)} className={classes['login-button']}>
        {label}
    </button>
}

export default ButtonLogin;