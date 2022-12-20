import React from "react";
import classes from './PasswordField.module.scss';
import { Input } from 'antd';

const PasswordField = ({label}) => {
    return <Input.Password
        placeholder={label}
        className={classes["__input_field"]} />
}

export default PasswordField;