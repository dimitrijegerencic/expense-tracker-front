import React from "react";
import classes from './PasswordField.module.scss';
import { Input } from 'antd';

const PasswordField = ({label, use}) => {

    const h = use === 'profile' ? 40 : 52;
    const w = use === 'profile' ? 318 : 450;

    return <Input.Password
        placeholder={label}
        style={{height: h, width : w}}
        className={classes["__input_field"]} />
}

export default PasswordField;