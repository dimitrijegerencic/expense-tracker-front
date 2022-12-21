import React from "react";
import classes from "./InputField.module.scss";
import {Input} from "antd";

const InputField = ({label, use}) => {

    const h = use === 'profile' ? 40 : 52;
    const w = use === 'profile' ? 318 : 450;

    return <Input placeholder={label}
                  style={{height: h, width : w}}
                  className={classes["__input_field"]} />;
}

export default InputField;