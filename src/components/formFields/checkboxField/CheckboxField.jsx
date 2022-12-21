import React from "react";
import classes from "./CheckboxField.module.scss";
import {Checkbox} from "antd";

const CheckboxField = ({option}) => {
    return <Checkbox className={classes['r']}>{option}</Checkbox>
}

export default CheckboxField;