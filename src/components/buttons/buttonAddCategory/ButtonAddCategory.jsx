import React from "react";
import classes from "./ButtonAddCategory.module.scss";
import PropTypes from 'prop-types';

const ButtonAddCategory = ({label, onClick}) => {
    return <button type={'submit'} className={classes['btn-add-category']}
                   onClick={(e)=>onClick(e)}>
            {label}
           </button>
}

ButtonAddCategory.propTypes = {
    label : PropTypes.string,
    onClick:PropTypes.func.isRequired
}

export default ButtonAddCategory;
