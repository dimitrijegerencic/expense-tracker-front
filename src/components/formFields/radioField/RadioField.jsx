import React from "react";
import { Controller } from 'react-hook-form';
import "./RadioField.scss";
import {Radio} from "antd";
import Wrapper from "../../wrapper/Wrapper";
import clsx from "clsx";
import PropTypes from "prop-types";

const RadioField = ({label,error,name,control,options, use}) => {
    return <Wrapper label={label} error={error}>
            <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <Radio.Group
                        className={clsx('radio-field', use)}
                        status={error ? "error" : ""}
                        {...field}
                    >
                        {options.map((option, index)=>{
                            return <Radio
                                key={index}
                                value={option.value}
                                style={{backgroundColor:option.value}}
                            ></Radio>
                        })}
                    </Radio.Group>
                )}
            />
        </Wrapper>

}

RadioField.propTypes={
    label:PropTypes.string,
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    control:PropTypes.object.isRequired,
    use : PropTypes.string,
    options:PropTypes.arrayOf(PropTypes.shape({
        label:PropTypes.string,
        key:PropTypes.string
    })).isRequired
}

export default RadioField;

