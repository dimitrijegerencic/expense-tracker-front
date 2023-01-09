import React from "react";
import "./CheckboxField.scss";
import {Checkbox} from "antd";
import Wrapper from "../../wrapper/Wrapper";
import {Controller} from 'react-hook-form';
import PropTypes from "prop-types";

const CheckboxField = ({label, name, error, control, options}) => {
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

CheckboxField.propTypes={
    label:PropTypes.string,
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    control:PropTypes.object.isRequired,
    options:PropTypes.arrayOf(PropTypes.shape({
        label:PropTypes.string,
        key:PropTypes.string
    })).isRequired
}

export default CheckboxField;