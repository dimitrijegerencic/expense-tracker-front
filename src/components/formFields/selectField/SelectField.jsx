import React from "react";
import "./SelectField.scss";
import {Select} from "antd";
import arrowImg from "../../../img/inputs/icon.png";

const SelectField = () => {

    return <Select
        placeholder={'Prihodi'}
        options={null}
        suffixIcon={<img src={arrowImg} alt={null} style={{width:16, height:8}}/>}
    />
}

export default SelectField;