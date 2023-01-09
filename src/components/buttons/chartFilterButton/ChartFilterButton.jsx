import React from "react";
import  "./ChartFilterButton.scss";
import {Select} from "antd"
import arrowDownImg from "../../../img/button/arrow-down.png";
import PropTypes from "prop-types";

const ChartFilterButton = ({options, label}) => {
    return <Select
                initialvalue={label}
                suffixIcon={<img src={arrowDownImg} alt={""}/>}
                className={'filter-btn'}
                placeholder={label}
                options={options}
            />

}
ChartFilterButton.propTypes = {
    label:PropTypes.string
}

export default ChartFilterButton;