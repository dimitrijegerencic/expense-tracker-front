import React from "react";
import "./SelectField.scss";
import {Select} from "antd";
import arrowImg from "../../../img/inputs/icon.png";
import clsx from "clsx";

const SelectField = ({label, use}) => {

    return <Select
        placeholder={label}
        options={null}
        className={clsx('select-field', use)}
        suffixIcon={<img src={arrowImg} alt="" style={{width:16, height:8}}/>}
    />
}

export default SelectField;