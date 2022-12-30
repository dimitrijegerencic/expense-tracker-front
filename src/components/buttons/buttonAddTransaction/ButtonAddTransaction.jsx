import React from "react";
import classes from "./ButtonAddTransaction.module.scss";
import plusIcon from "../../../img/button/close_24px.png";

const ButtonAddTransaction = ({onClick}) => {
    return <button className={classes['btn']} onClick={(e) => onClick(e)}>
        <img src={plusIcon} alt={'plus'}/> Dodaj transakciju
    </button>
}

export default ButtonAddTransaction;