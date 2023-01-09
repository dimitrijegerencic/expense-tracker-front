import React from "react";
import classes from './ButtonLogin.module.scss';
import PropTypes from "prop-types";

const ButtonLogin = ({label='Log in', type, onClick}) => {
    return <button type={type}
                   onClick={(e)=>onClick(e)}
                   className={classes['login-button']}>
            {label}
          </button>
}

ButtonLogin.propTypes = {
    onClick:PropTypes.func.isRequired,
    type:PropTypes.string,
    label:PropTypes.string
}

export default ButtonLogin;