import React from "react";
import  "./ChartFilterButton.scss";
import {Select} from "antd"
import clsx from "clsx";
import arrowDownImg from "../../../img/button/arrow-down.png";

const ChartFilterButton = ({options, label, use}) => {
    return <>
        <Select
            initialvalue={label}
            suffixIcon={<img src={arrowDownImg} alt={""}/>}
            className={clsx('filter-btn', use)}
            placeholder={label}
            options={options}
        />
    </>
}

export default ChartFilterButton;