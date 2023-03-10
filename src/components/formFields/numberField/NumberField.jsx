import React from "react";
import  "./NumberField.scss";
import {InputNumber} from "antd";
import Wrapper from "../../wrapper/Wrapper";
import {Controller} from 'react-hook-form';
import PropTypes from "prop-types";

const NumberField = ({label, name, placeholder, error, disabled = false, control, type, value, prefix, step}) => {

    return <Wrapper label={label} error={error}>
        {control &&
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <InputNumber
                        placeholder={placeholder}
                        status={error ? "error" : ''}
                        disabled={disabled}
                        type={type}
                        defaultValue={value}
                        className={'number-field'}
                        step={step}
                        prefix={prefix}
                        {...field}
                    />
                )}
            />
        }
    </Wrapper>
}

NumberField.propTypes={
    label:PropTypes.string,
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string,
    control:PropTypes.object.isRequired,
    type : PropTypes.string,
    use : PropTypes.string,
    prefix:PropTypes.string,
    step:PropTypes.string
}

export default NumberField;