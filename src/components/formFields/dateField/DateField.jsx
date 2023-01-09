import React from "react";
import "./DateField.scss";
import {DatePicker} from "antd";
import Wrapper from "../../wrapper/Wrapper";
import {Controller} from 'react-hook-form';
import calendarImg from "../../../img/inputs/calendar-days.png";
import clsx from "clsx";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const DateField = ({use, label, name, error, disabled = false, control}) => {

    const dateFormat = 'DD/MM/YYYY';

    const date = new Date();

    let currentDay = date.getDate() <= 9 ? '0' + date.getDate() : date.getDay();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();

    let currentDate = `${currentDay}/${currentMonth}/${currentYear}`;

    dayjs.extend(customParseFormat)

    return  <Wrapper label={label} error={error}>
        {control && <Controller
            name={name}
            control={control}
            render={({field}) => (
                <DatePicker
                    status={error ? "error" : ''}
                    disabled={disabled}
                    format={dateFormat}
                    placeholder={currentDate}
                    suffixIcon={<img src={calendarImg} alt="" style={{width:22, height:22}}/>}
                    allowClear={false}
                    className={clsx('date-field', use)}
                    {...field}
                />
            )}
        />}
    </Wrapper>
}

DateField.propTypes={
    use:PropTypes.string.isRequired,
    label:PropTypes.string,
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    control:PropTypes.object.isRequired,
}

export default DateField;
