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
import {useUser} from "../../../context/userContext/UserContext";

const LoginForm = () => {

    const {setUserData} = useUser();

    const login = (email, password) => {
        authService.login(email, password)
            .then(r => {
                storageService.set(storageKeys.TOKEN, r.getAccessToken())
            })
            .then(()=>{
                return profileService.getCurrentUserInfo()
            })
            .then(result => {
                setUserData(result)
                message.success(t('login.success'));
                setTimeout(() => {
                    navigate("/");
                }, 300)
            })
            .catch(() => {
                message.error(t('login.fail'));
            })
    }

    const navigate = useNavigate();

    const schema = yup.object().shape({
        Email: yup.string().trim()
            .email(t('all-forms-validations.login.email-format'))
            .required(t('all-forms-validations.login.email-required')),
        Password: yup.string().trim()
            .required(t('all-forms-validations.login.password-required'))
            .max(16, t('all-forms-validations.login.password-max', {number : 16}))
            .min(8, t('all-forms-validations.login.password-min', {number : 8}))
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