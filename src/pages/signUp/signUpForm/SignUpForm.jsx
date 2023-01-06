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

const SignUpForm = () => {

    const schema = yup.object().shape({
        name : yup.string().trim()
            .min(3, t('all-forms-validations.sign-up.full-name-min', {number:3}))
            .min(100, t('all-forms-validations.sign-up.full-name-max', {number:100}))
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

    const onSubmit = (data) => {
        authService.signUp(data)
            .then(() => message.success('Uspješna prijava!'))
            .catch(() => message.error('Došlo je do greške!'))
    }

    return <>
        <div className={classes['form-container']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes['inputs']}>
                    <InputField label={''}
                                name="name"
                                control={control}
                                placeholder={t('sign-up.placeholder.name')}
                                error={errors?.name?.message}
                                use={'signup'}
                    />
                    <InputField label={''}
                                name="email"
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