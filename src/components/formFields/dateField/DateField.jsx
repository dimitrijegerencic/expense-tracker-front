import React from "react";
import "./DateField.scss";
import dayjs from 'dayjs';
import {DatePicker} from "antd";
import Wrapper from "../../wrapper/Wrapper";
import {Controller} from 'react-hook-form';
import calendarImg from "../../../img/inputs/calendar-days.png";
import clsx from "clsx";

const DateField = ({   use,
                       label,
                       name,
                       error,
                       disabled = false,
                       control,
                       type}) => {

    const dateFormat = 'DD/MM/YYYY';

    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    const currentDate = `${date}/${month}/${year}`;

    return  <Wrapper label={label} error={error}>
        {control && <Controller
            name={name}
            control={control}
            render={({field}) => (
                <DatePicker
                    status={error ? "error" : ''}
                    disabled={disabled}
                    type={type}
                    placeholder={use==='type-2' ? '_ _ /_ _ /_ _ _ _' : false}
                    defaultValue={use==='type-1' ? dayjs(currentDate, dateFormat) : false} format={dateFormat}
                    suffixIcon={<img src={calendarImg} alt="" style={{width:22, height:22}}/>}
                    allowClear={false}
                    className={clsx('date-field', use)}
                    {...field}/>
            )}
        />}
    </Wrapper>
}

export default DateField;
