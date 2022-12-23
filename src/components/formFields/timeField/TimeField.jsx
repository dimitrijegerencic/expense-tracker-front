import React from "react";
import "./TimeField.scss";
import {TimePicker} from "antd";
import dayjs from "dayjs";
import clockImg from "../../../img/inputs/clock-2.png";

const TimeField = () => {

    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const currentTime = `${hours}:${minutes}`

    const timeFormat = "HH:mm";

    return <TimePicker
            defaultValue={dayjs(currentTime, timeFormat)} format={timeFormat}
            placeholder={''}
            suffixIcon={<img src={clockImg} alt={null} style={{width:22, height:22}}/>}
            allowClear={false}
            className={'time-field'}/>
}

export default TimeField;