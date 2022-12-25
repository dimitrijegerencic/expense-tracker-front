import React from "react";
import "./RadioField.scss";
import {Radio} from "antd";

const RadioField = ({option}) => {
    return <Radio value={1} className={'radio-input'}>{option}</Radio>
}

export default RadioField