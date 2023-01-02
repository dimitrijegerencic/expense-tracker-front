import React from "react";
import classes from "./ButtonModal.module.scss";
import PropTypes from "prop-types";

const ButtonModal = ({label, onClick=()=>{}, color}) => {
        return <button type={'button'} className={classes['btn-modal']}
                       onClick={onClick}
                       style={{backgroundColor:color}}
        >
            {label}
        </button>
}

ButtonModal.propTypes = {
        label:PropTypes.string,
        onClick:PropTypes.func.isRequired,
        color:PropTypes.string
}


export default ButtonModal;