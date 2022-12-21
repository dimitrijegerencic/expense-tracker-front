import React from "react";
import classes from "./TextAreaField.module.scss";

import { Input } from 'antd';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
};

const TextAreaField = ({placeholder, type}) => {

    const h = type === 'description' ? 62 : 102;

    return <TextArea
        maxLength={100}
        style={{ height: h, resize: 'none', width:380 }}
        onChange={onChange}
        placeholder={placeholder}
        className={classes['text-area-field']}
    />
}

export default TextAreaField;