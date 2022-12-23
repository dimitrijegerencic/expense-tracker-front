import React from "react";
import "./DateField.scss";
import dayjs from 'dayjs';
import {DatePicker} from "antd";
import calendarImg from "../../../img/inputs/calendar-days.png";
const DateField = () => {

    const dateFormat = 'DD/MM/YYYY';

    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    const currentDate = `${date}/${month}/${year}`;

    return <DatePicker
            defaultValue={dayjs(currentDate, dateFormat)} format={dateFormat}
            suffixIcon={<img src={calendarImg} alt={null} style={{width:22, height:22}}/>}
            allowClear={false}
            className={'date-field'}
    />
}

export default DateField;