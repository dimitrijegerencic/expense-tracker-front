import React from "react";
import { Controller } from 'react-hook-form';
import "./RadioField.scss";
import {Radio} from "antd";
import Wrapper from "../../wrapper/Wrapper";
import clsx from "clsx";

const RadioField=({label,error,name,control,options, use})=>{
    return (

        <Wrapper label={label} error={error}>
            <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <Radio.Group
                        className={clsx('radio-field', use)}
                        status={error ? "error" : ""}
                        {...field}
                    >
                        {options.map(option=>{
                            return <Radio
                                key={option.label}
                                value={option.value}
                                style={{backgroundColor:option.value}}
                            ></Radio>
                        })}
                    </Radio.Group>
                )}
            />
        </Wrapper>

    );
}

export default RadioField;

