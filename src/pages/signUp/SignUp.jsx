import React from "react";
import classes from "./SignUp.module.scss";
import InputField from "../../components/formFields/inputField/InputField";
import PasswordField from "../../components/formFields/passwordField/PasswordField";
import ButtonLogin from "../../components/buttons/buttonLogin/ButtonLogin";

const SignUp = () => {
    return <div className={classes['main']}>
        <div className={classes['first-container']}>
            <h1 className={classes['logo']}>LOGO</h1>
            <p>Welcome</p>
            <div className={classes['inputs']}>
                <InputField label={'Enter your full name'}/>
                <InputField label={'Enter your e-mail'}/>
                <PasswordField label={'Input password'}/>
                <PasswordField label={'Confirm password'}/>
            </div>
            <div className={classes['button-section']}>
                <ButtonLogin type={'button'} onClick={()=>(console.log(""))}/>
            </div>
        </div>

        <div className={classes['second-container']}>
            <p>Already have an account ? <span><a href="https://www.google.com">Sign in</a></span></p>
        </div>
    </div>
}

export default SignUp;