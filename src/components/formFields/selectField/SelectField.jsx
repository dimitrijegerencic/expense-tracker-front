import React from "react";
import "./SelectField.scss";
import {Select} from "antd";
import arrowImg from "../../../img/inputs/icon.png";

const SelectField = ({label}) => {

    return <Select
        placeholder={label}
        options={null}
        className={'select-field'}
        suffixIcon={<img src={arrowImg} alt="" style={{width:16, height:8}}/>}
    />
}

export default SelectField;