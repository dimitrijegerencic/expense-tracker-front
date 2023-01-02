import React from "react";
import "./TextAreaField.scss";
import { Input } from 'antd';
import Wrapper from "../../wrapper/Wrapper";
import {Controller} from 'react-hook-form';
import PropTypes from "prop-types";
const { TextArea } = Input;

const TextAreaField = ({name, placeholder, error, disabled = false, control, type, value}) => {

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
                        className={'text-area-field'}
                        {...field}
                    />
                )}
            />
        }
    </Wrapper>
}

TextAreaField.propTypes={
    type:PropTypes.string,
    label:PropTypes.string,
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    value:PropTypes.string,
    control:PropTypes.object.isRequired,
}

export default TextAreaField;