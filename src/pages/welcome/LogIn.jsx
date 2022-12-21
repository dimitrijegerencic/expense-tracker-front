import React from "react";
import Logo from '../../img/welcome/welcome-logo.png';
import ButtonLogin from "../../components/buttons/buttonLogin/ButtonLogin";
import classes from "./LogIn.module.scss";
import InputField from "../../components/formFields/inputField/InputField";
import PasswordField from "../../components/formFields/passwordField/PasswordField";

const LogIn = () => {
    return <div className={classes['main']}>
        <div className={classes['first-container']}>
            <h1 className={classes['logo']}>LOGO</h1>
            <p>Welcome back!</p>
            <div className={classes['image-container']}>
                <img src={Logo} alt="logo"/>
            </div>
            <div className={classes['inputs']}>
                <InputField label={'Enter e-mail'}/>
                <PasswordField label={'Enter password'}/>
            </div>
            <p className={classes['forgot-password']}>Forgot  password</p>
            <div className={classes['button-section']}>
                <ButtonLogin type={'button'} onClick={()=>(console.log(""))}/>
            </div>
        </div>
        <div className={classes['second-container']}>
            <p>Already have an account ? <span><a href="https://www.google.com">Sign up</a></span></p>
        </div>
    </div>
}

export default LogIn;