import React from "react";
import "./SelectField.scss";
import {Select} from "antd";
import Wrapper from "../../wrapper/Wrapper";
import {Controller} from 'react-hook-form';
import arrowImg from "../../../img/inputs/icon.png";
import clsx from "clsx";

const SelectField = ({
                        name,
                        placeholder,
                        error,
                        options,
                        control,
                        use,
                        label,
                        allowMultiple=false
                    }) => {
    return <Wrapper label={label} error={error}>
        {control &&
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Select
                        options={options}
                        mode={allowMultiple ? "multiple" : ""}
                        allowClear={true}
                        suffixIcon={<img src={arrowImg} alt="" style={{width:16, height:8}}/>}
                        className={clsx('select-field', use)}
                        placeholder={placeholder}
                        status={error ? "error" : ""}
                        {...field}
                    />
                )}
            />
        }
    </Wrapper>
}

export default SelectField;