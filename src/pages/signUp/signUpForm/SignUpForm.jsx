import React from "react";
import classes from "./SignUpForm.module.scss";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {message} from "antd";
import InputField from "../../../components/formFields/inputField/InputField";
import PasswordField from "../../../components/formFields/passwordField/PasswordField";
import ButtonLogin from "../../../components/buttons/buttonLogin/ButtonLogin";
import {t} from "react-switch-lang";
import {authService} from "../../../services/AuthService";
import {storageService} from "../../../services/StorageService";
import {storageKeys} from "../../../config/config";
import {profileService} from "../../../services/ProfileService";
import {useNavigate} from "react-router-dom";

const SignUpForm = () => {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        name : yup.string().trim()
            .min(3, t('all-forms-validations.sign-up.full-name-min', {number : 3}))
            .max(100, t('all-forms-validations.sign-up.full-name-max', {number : 3}))
            .required(t('all-forms-validations.sign-up.full-name-required')),
        email : yup.string().trim()
            .email(t('all-forms-validations.sign-up.email-format'))
            .required(t('all-forms-validations.sign-up.email-required')),
        password : yup.string().trim()
            .min(8, t('all-forms-validations.sign-up.password-min', {number:8}))
            .max(16, t('all-forms-validations.sign-up.password-max', {number:16}))
            .required(t('all-forms-validations.sign-up.password-required')),
        confirmPassword : yup.string().trim()
            .min(8, t('all-forms-validations.sign-up.confirm-password-min', {number:8}))
            .max(16, t('all-forms-validations.sign-up.confirm-password-max', {number:16}))
            .required(t('all-forms-validations.sign-up.confirm-password-required')),
    });

    const {handleSubmit, control, formState:{errors}} = useForm({resolver:yupResolver(schema)})

    const signUp = (data) => {
        authService.signUp(data)
            .then(() => {
                authService.login(data?.email, data?.password)
            })
            .then(result => {
                storageService.set(storageKeys.TOKEN, result.getAccessToken())
            })
            .then(() => {
                return profileService.getCurrentUserInfo()
            })
            .then(() => {
                setTimeout(()=>{
                    navigate('/')
                },1000)
            })
            .catch(error => {
                console.log(error)
                message.error('Došlo je do greške! Molimo pokušajte ponovo!')
            })
    }

    const onSubmit = (data) => {
        signUp(data);
    }

    return <>
        <div className={classes['form-container']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes['inputs']}>
                    <InputField label={''}
                                name={'name'}
                                control={control}
                                placeholder={t('sign-up.placeholder.name')}
                                error={errors?.name?.message}
                                use={'signup'}
                    />
                    <InputField label={''}
                                name={'email'}
                                control={control}
                                placeholder={t('sign-up.placeholder.email')}
                                error={errors?.email?.message}
                                use={'signup'}
                    />
                    <PasswordField label={''}
                                   name="password"
                                   control={control}
                                   placeholder={t('sign-up.placeholder.password')}
                                   error={errors?.password?.message}
                    />
                    <PasswordField label={''}
                                   name="confirmPassword"
                                   control={control}
                                   placeholder={t('sign-up.placeholder.confirm-password')}
                                   error={errors?.confirmPassword?.message}
                    />
                </div>
                <div className={classes['button-section']}>
                    <ButtonLogin type={'submit'} onClick={()=>{}}/>
                </div>
            </form>
        </div>
    </>
}

export default SignUpForm;