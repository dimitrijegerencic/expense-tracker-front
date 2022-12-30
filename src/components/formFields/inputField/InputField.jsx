import React from "react";
import  "./InputField.scss";
import {Input} from "antd";
import clsx from "clsx";
import Wrapper from "../../wrapper/Wrapper";
import {Controller} from 'react-hook-form';

const InputField = ({
                        label,
                        name,
                        placeholder,
                        error,
                        disabled = false,
                        control,
                        type,
                        use,
                        value
                    }) => {
    return <Wrapper label={label} error={error}>
        {control &&
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                        placeholder={placeholder}
                        status={error ? "error" : ''}
                        disabled={disabled}
                        className={clsx("input_field", use)}
                        type={type}
                        defaultValue={value}
                        {...field}
                    />
                )}
            />
        }
    </Wrapper>
}

export default InputField;