import React from "react";
import {Select} from "antd";
import "./TransactionSelectField.scss";
import arrowDownImg from "../../../../img/inputs/arrow-down.png";

const TransactionSelectField = ({label}) => {

    return <Select
        placeholder={label}
        options={null}
        suffixIcon={<img src={arrowDownImg} alt={""}/>}
        className={'transaction-select-field'}
    />
}

export default TransactionSelectField;