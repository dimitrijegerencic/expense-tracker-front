import React from "react";
import  "./InputField.scss";
import {Input} from "antd";

const InputField = ({label, use}) => {

    const w = use === 'profile' ? 318 : 450;

    return <Input placeholder={label}
                  style={{height: 52, width : w}}
                  className={"__input_field"} />;
}

export default InputField;