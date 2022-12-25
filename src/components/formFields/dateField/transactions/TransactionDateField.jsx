import React from "react";
import {DatePicker} from "antd";
import calendarImg from "../../../../img/inputs/calendar.png";
import "./TransactionDateField.scss";

const TransactionDateField = () => {

    const dateFormat = 'DD/MM/YYYY';

    return <DatePicker
        placeholder={'_ _ /_ _ /_ _ _ _'}
        format={dateFormat}
        suffixIcon={<img src={calendarImg} alt={null} style={{width:22, height:22}}/>}
        allowClear={false}
        className={'transaction-date-field'}
    />
}

export default TransactionDateField;