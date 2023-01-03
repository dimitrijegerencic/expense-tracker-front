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
import {authService} from "../../../services/AuthService";
import {storageService} from "../../../services/StorageService";
import {storageKeys} from "../../../config/config";
import {profileService} from "../../../services/ProfileService";
import {t} from "react-switch-lang";

const LoginForm = () => {

    const login = (email, password) => {
        authService.login(email, password)
            .then(r => {
                storageService.set(storageKeys.TOKEN, r.getAccessToken())
            })
            .then(()=>{
                return profileService.getCurrentUserInfo()
            })
            .then(() => {
                message.success("Login successful!");
                setTimeout(()=>{
                    navigate("/");
                }, 300)
            })
            .catch(() => {
                message.error("Wrong credentials!");
            })
    }

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
        login(data.Email, data.Password);
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes['form-container']}>
                <div className={classes['inputs']}>
                    <InputField label={''}
                                name="Email"
                                control={control}
                                placeholder={t('login.placeholder.email')}
                                error={errors?.Email?.message}
                                use={'login'}
                    />
                    <PasswordField label={''}
                                   name="Password"
                                   control={control}
                                   placeholder={t('login.placeholder.password')}
                                   error={errors?.Password?.message}
                    />
                </div>
                <p className={classes['forgot-password']}>{t('login.forgot-password')}</p>
                <div className={classes['button-section']}>
                    <ButtonLogin type='submit' onClick={()=>{}}/>
                </div>
            </div>
        </form>

    </>
}

export default LoginForm;