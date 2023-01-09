import React from "react";
import classes from "./SignUp.module.scss";
import {useNavigate} from "react-router-dom";
import SignUpForm from "./signUpForm/SignUpForm";
import {t} from "react-switch-lang";

const SignUp = () => {

    const navigate = useNavigate();

    return <div className={classes['main']}>
        <div className={classes['first-container']}>
            <h1 className={classes['logo']}>LOGO</h1>
            <p>{t('sign-up.welcome')}</p>
            <SignUpForm/>
        </div>
        <div className={classes['second-container']}>
            <p>{t('common.already-have-an-account')}<span onClick={()=>navigate("/login")}> {t('sign-up.title')}</span></p>
        </div>
    </div>
}

export default SignUp;