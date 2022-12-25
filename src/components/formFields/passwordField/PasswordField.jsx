import React from "react";
import './PasswordField.scss';
import { Input } from 'antd';

const PasswordField = ({label, use}) => {

    const w = use === 'profile' ? 318 : 450;

    return <Input.Password  placeholder={label}
                            style={{height: 52, width : w}}
                            className={"password_field"}/>
}

export default PasswordField;