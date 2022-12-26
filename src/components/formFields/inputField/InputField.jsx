import React from "react";
import  "./InputField.scss";
import {Input} from "antd";
import clsx from "clsx";

const InputField = ({label, use}) => {

    return <Input placeholder={label}
                  className={clsx("input_field", use)}
    />;
}

export default InputField;