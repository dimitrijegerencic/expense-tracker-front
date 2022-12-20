import React from "react";
import classes from "./InputField.module.scss";
import {Input} from "antd";

const InputField = ({label}) => {
    return <Input placeholder={label}
                  className={classes["__input_field"]} />;
}

export default InputField;