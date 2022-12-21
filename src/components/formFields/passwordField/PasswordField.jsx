import React from "react";
import classes from './PasswordField.module.scss';
import { Input } from 'antd';

const PasswordField = ({label, use}) => {

    const w = use === 'profile' ? 318 : 450;

    return <Input.Password  placeholder={label}
                            style={{height: 52, width : w}}
                            className={classes["__input_field"]} />
}

export default PasswordField;