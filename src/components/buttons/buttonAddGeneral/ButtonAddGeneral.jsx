import React from "react";
import classes from "./ButtonAddGeneral.module.scss";
import addImg from "../../../img/button/material-symbols_add.png";
import clsx from "clsx";
import PropTypes from "prop-types";

const ButtonAddGeneral = ({size, onClick, type}) => {
    return <button
                type={type}
                className={clsx(classes['btn-add-general'], classes[size])}
                onClick={(e)=>onClick(e)}
            >
        {size==='big' ? <img src={addImg} alt={"+"}/> : "+"}
    </button>
}

ButtonAddGeneral.propTypes = {
    onClick:PropTypes.func.isRequired,
    size:PropTypes.oneOf(['big, small']).isRequired,
    type:PropTypes.string
}

export default ButtonAddGeneral;