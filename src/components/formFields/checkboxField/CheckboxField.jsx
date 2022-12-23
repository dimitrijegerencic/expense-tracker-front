import React from "react";
import "./CheckboxField.scss";
import {Checkbox} from "antd";

const CheckboxField = ({option}) => {
    return <Checkbox className={'checkbox-field'}>{option}</Checkbox>
}

export default CheckboxField;