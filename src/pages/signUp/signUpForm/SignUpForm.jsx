import React from "react";
import classes from "./SignUpForm.module.scss";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {message} from "antd";
import {useNavigate} from "react-router-dom";
import InputField from "../../../components/formFields/inputField/InputField";
import PasswordField from "../../../components/formFields/passwordField/PasswordField";
import ButtonLogin from "../../../components/buttons/buttonLogin/ButtonLogin";
import {t} from "react-switch-lang";

const SignUpForm = () => {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        name : yup.string().trim()
            .min(3, "Name should have at least 3 characters!")
            .max(100, "Name can not have more than 100 characters!")
            .required("This field is required!"),
        email : yup.string().trim()
            .email("Email format required!")
            .required("This field is required!"),
        password : yup.string().trim()
            .min(8, "Password should be at least 8 characters long!")
            .max(16, "Password can not have more than 16 characters!")
            .required("This field is required!"),
        confirmPassword : yup.string().trim()
            .min(8, "Password should be at least 8 characters long!")
            .max(16, "Password can not have more than 16 characters!")
            .required("This field is required!")
    });

    const {handleSubmit, control, formState:{errors}} = useForm({resolver:yupResolver(schema)})

    const onSubmit = (data) => {
        message.success("Sign up successful!");
        navigate('/');
    }

    return <>
        <div className={classes['form-container']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes['inputs']}>
                    <InputField label={''}
                                name="Name"
                                control={control}
                                placeholder={t('sign-up.placeholder.name')}
                                error={errors?.name?.message}
                                use={'signup'}
                    />
                    <InputField label={''}
                                name="Email"
                                control={control}
                                placeholder={t('sign-up.placeholder.email')}
                                error={errors?.email?.message}
                                use={'signup'}
                    />
                    <PasswordField label={''}
                                   name="Password"
                                   control={control}
                                   placeholder={t('sign-up.placeholder.password')}
                                   error={errors?.password?.message}
                    />
                    <PasswordField label={''}
                                   name="ConfirmPassword"
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