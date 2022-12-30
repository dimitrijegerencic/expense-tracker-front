import React from "react";
import './PasswordField.scss';
import { Input } from 'antd';
import Wrapper from "../../wrapper/Wrapper";
import {Controller} from 'react-hook-form';

const PasswordField = ({
                           label,
                           name,
                           placeholder,
                           error,
                           disabled = false,
                           control, use
                       }) => {

    const w = use === 'profile' ? 318 : 450;

    return <Wrapper label={label} error={error}>
        {control &&
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input.Password
                        style={{height: 52, width : w}}
                        placeholder={placeholder}
                        status={error ? "error" : ''}
                        disabled={disabled}
                        className={"password_field"}
                        {...field}
                    />
                )}
            />
        }
    </Wrapper>
}

export default PasswordField;