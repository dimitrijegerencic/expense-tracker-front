import React from "react";
import  "./TransactionInputField.scss";
import {Input} from "antd";

const TransactionInputField = ({label}) => {

    return <Input placeholder={label}
                  className={"transaction-input-field"} />;
}

export default TransactionInputField;