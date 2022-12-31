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

const SignUpForm = () => {

    const schema = yup.object().shape({
        Name : yup.string().trim()
            .min(3, "Name should have at least 3 characters!")
            .max(100, "Name can not have more than 100 characters!")
            .required("This field is required!"),
        Email : yup.string().trim()
            .email("Email format required!")
            .required("This field is required!"),
        Password : yup.string().trim()
            .min(8, "Password should be at least 8 characters long!")
            .max(16, "Password can not have more than 16 characters!")
            .required("This field is required!"),
        ConfirmPassword : yup.string().trim()
            .min(8, "Password should be at least 8 characters long!")
            .max(16, "Password can not have more than 16 characters!")
            .required("This field is required!")
    });

    const {handleSubmit, control, formState:{errors}} = useForm({resolver:yupResolver(schema)})

    const onSubmit = (data) => {
        message.success("Sign up successful!");
        navigate('/');
    }

    const navigate = useNavigate();

    return <>
        <div className={classes['form-container']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes['inputs']}>
                    <InputField label={''}
                                name="Name"
                                control={control}
                                placeholder={'Enter your full name'}
                                error={errors?.Name?.message}
                                use={'signup'}
                    />
                    <InputField label={''}
                                name="Email"
                                control={control}
                                placeholder={'Enter your e-mail'}
                                error={errors?.Email?.message}
                                use={'signup'}
                    />
                    <PasswordField label={''}
                                   name="Password"
                                   control={control}
                                   placeholder={'Input password'}
                                   error={errors?.Password?.message}
                    />
                    <PasswordField label={''}
                                   name="ConfirmPassword"
                                   control={control}
                                   placeholder={'Confirm password'}
                                   error={errors?.ConfirmPassword?.message}
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