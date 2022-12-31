import React from "react";
import "./CheckboxField.scss";
import {Checkbox} from "antd";
import Wrapper from "../../wrapper/Wrapper";
import {Controller} from 'react-hook-form';

const CheckboxField = ({
                        label,
                        name,
                        error,
                        control,
                        options
                    }) => {
    return <Wrapper label={label} error={error}>
        {control &&
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Checkbox.Group
                        className={'checkbox-field'}
                        status={error ? "error" : ""}
                        options={options}
                        {...field}
                    />
                )}
            />
        }
    </Wrapper>
}

export default CheckboxField;