import React from "react";
import classes from "./LoginForm.module.scss";
import InputField from "../../../components/formFields/inputField/InputField";
import PasswordField from "../../../components/formFields/passwordField/PasswordField";
import ButtonLogin from "../../../components/buttons/buttonLogin/ButtonLogin";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {message} from "antd";

const LoginForm = () => {

    const navigate = useNavigate();

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
        message.success("Login successful!");
        navigate('/');
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes['form-container']}>
                <div className={classes['inputs']}>
                    <InputField label={''}
                                name="Email"
                                control={control}
                                placeholder={'Enter e-mail'}
                                error={errors?.Email?.message}
                                use={'login'}
                    />
                    <PasswordField label={''}
                                   name="Password"
                                   control={control}
                                   placeholder={'Enter password'}
                                   error={errors?.Password?.message}
                    />
                </div>
                <p className={classes['forgot-password']}>Forgot  password</p>
                <div className={classes['button-section']}>
                    <ButtonLogin type='submit' onClick={()=>{}}/>
                </div>
            </div>
        </form>

    </>
}

export default LoginForm;