import React from "react";
import Logo from '../../img/welcome/welcome-logo.png';
import ButtonLogin from "../../components/buttons/buttonLogin/ButtonLogin";
import classes from "./LogIn.module.scss";
import InputField from "../../components/formFields/inputField/InputField";
import PasswordField from "../../components/formFields/passwordField/PasswordField";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {routes} from "../../routes/routes";
import { message } from "antd";

const LogIn = () => {

    const schema = yup.object().shape({
        Email: yup.string().trim()
            .email("Email format required!")
            .required('Required!'),
        Password: yup.string().trim()
            .required('Required!')
            .max(16, "Password can not be longer than 16 characters!")
            .min(8, "Password must be at least 8 characters long!")
    })


    const {handleSubmit, control, formState:{errors}}=useForm({resolver: yupResolver(schema)})

    const onSubmit=(data)=>{
        message.success("Login successful!")
    }

    const navigate = useNavigate();

    return <div className={classes['main']}>
        <div className={classes['first-container']}>
            <h1 className={classes['logo']}>LOGO</h1>
            <p>Welcome back!</p>
            <div className={classes['image-container']}>
                <img src={Logo} alt="logo"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes['inputs']}>
                <InputField label={''}
                            name="Email"
                            control={control}
                            placeholder={'Enter e-mail'}
                            error={errors?.email?.message}
                            use={'login'}

                />
                    <PasswordField label={''}
                                   name="Password"
                                   control={control}
                                   placeholder={'Enter password'}
                                   error={"Field required"}
                    />
            </div>
                <p className={classes['forgot-password']}>Forgot  password</p>
                <div className={classes['button-section']}>
                    <ButtonLogin type='submit' onClick={()=>{}}/>
                </div>
            </form>
        </div>
        <div className={classes['second-container']}>
            <p>Already have an account ? <span onClick={()=>navigate(routes.SIGN_IN.path)}>Sign in</span></p>
        </div>
    </div>
}

export default LogIn;