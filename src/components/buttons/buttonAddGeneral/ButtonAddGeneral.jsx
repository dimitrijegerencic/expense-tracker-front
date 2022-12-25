import React from "react";
import classes from "./ButtonAddGeneral.module.scss";
import addImg from "../../../img/button/material-symbols_add.png";

const ButtonAddGeneral = () => {
    return <button className={classes['btn-add-general']}>
        <img src={addImg} alt={"+"}/>
    </button>
}

export default ButtonAddGeneral;