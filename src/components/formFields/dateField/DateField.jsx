import React from "react";
import "./DateField.scss";
import dayjs from 'dayjs';
import {DatePicker} from "antd";
import calendarImg from "../../../img/inputs/calendar-days.png";
import clsx from "clsx";

const DateField = ({use}) => {

    const dateFormat = 'DD/MM/YYYY';

    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    const currentDate = `${date}/${month}/${year}`;

    return <DatePicker
            placeholder={use==='type-2' ? '_ _ /_ _ /_ _ _ _' : false}
            defaultValue={use==='type-1' ? dayjs(currentDate, dateFormat) : false} format={dateFormat}
            suffixIcon={<img src={calendarImg} alt="" style={{width:22, height:22}}/>}
            allowClear={false}
            className={clsx('date-field', use)}
    />
}

export default DateField;