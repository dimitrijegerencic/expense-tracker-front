import React from "react";
import Logo from '../../img/welcome/welcome-logo.png';
import classes from "./LogIn.module.scss";
import {useNavigate} from "react-router-dom";
import LoginForm from "./loginForm/LoginForm";
import {t} from "react-switch-lang";

const LogIn = () => {

    const navigate = useNavigate();

    return <div className={classes['main']}>
        <div className={classes['first-container']}>
            <h1 className={classes['logo']}>LOGO</h1>
            <p>{t('login.welcome-back')}</p>
            <div className={classes['image-container']}>
                <img src={Logo} alt="logo"/>
            </div>
            <LoginForm/>
        </div>
        <div className={classes['second-container']}>
            <p>{t('common.dont-have-an-account')} <span onClick={()=>navigate("/sign-in")}>{t('sign-up.title')}</span></p>
        </div>
    </div>
}

export default LogIn;