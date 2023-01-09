import React from "react";
import "./TimeField.scss";
import {TimePicker} from "antd";
import Wrapper from "../../wrapper/Wrapper";
import {Controller} from 'react-hook-form';
import clockImg from "../../../img/inputs/clock-2.png";
import PropTypes from "prop-types";

const TimeField = ({ label, name, error, disabled = false, control, type}) => {

    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const currentTime = `${hours}:${minutes}`

    const timeFormat = "HH:mm";

    return <Wrapper label={label} error={error}>
        {control && <Controller
                        name={name}
                        control={control}
                        render={({field}) => (
                            <TimePicker
                                format={timeFormat}
                                placeholder={currentTime}
                                status={error ? "error" : ''}
                                disabled={disabled}
                                suffixIcon={<img src={clockImg} alt={"clock-icon"} style={{width:22, height:22}}/>}
                                allowClear={false}
                                className={'time-field'}
                                type={type}
                                {...field}/>
                        )}
                    />}
            </Wrapper>
}

TimeField.propTypes={
    label:PropTypes.string,
    type:PropTypes.string,
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    control:PropTypes.object.isRequired,
}

export default TimeField;