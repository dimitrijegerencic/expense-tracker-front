import React from "react";
import  "./NumberField.scss";
import {InputNumber} from "antd";
import Wrapper from "../../wrapper/Wrapper";
import {Controller} from 'react-hook-form';

const NumberField = ({
                        label,
                        name,
                        placeholder,
                        error,
                        disabled = false,
                        control,
                        type,
                        value,
                        prefix,
                        step
                    }) => {
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

export default NumberField;