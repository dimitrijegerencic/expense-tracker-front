import React from 'react';
import classes from "./Wrapper.module.scss";
import PropTypes from "prop-types";

const Wrapper = ({children, error = ''}) => {

    return <div className={classes['container']}>
        <div>
            {children}
        </div>
        <span>{error}</span>
    </div>
}

Wrapper.propTypes = {
    children: PropTypes.element,
    error : PropTypes.string
}

export default Wrapper;