import React from "react";
import classes from "./TextAreaField.module.scss";
import { Input } from 'antd';
import Wrapper from "../../wrapper/Wrapper";
import {Controller} from 'react-hook-form';
const { TextArea } = Input;

const TextAreaField = ({
                        label,
                        name,
                        placeholder,
                        error,
                        disabled = false,
                        control,
                        type,
                        value
                    }) => {

    const h = type === 'description' ? 62 : 102;

    return <Wrapper label={null} error={error}>
        {control &&
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <TextArea
                        placeholder={placeholder}
                        status={error ? "error" : ''}
                        disabled={disabled}
                        type={type}
                        defaultValue={value}
                        maxLength={100}
                        style={{ height: h, resize: 'none', width:380 }}
                        className={classes['text-area-field']}
                        {...field}
                    />
                )}
            />
        }
    </Wrapper>
}

export default TextAreaField;