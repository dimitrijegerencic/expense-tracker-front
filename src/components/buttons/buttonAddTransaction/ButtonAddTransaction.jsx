import React from "react";
import classes from "./ButtonAddTransaction.module.scss";
import plusIcon from "../../../img/button/close_24px.png";
const ButtonAddTransaction = () => {
    return <button className={classes['btn']}>
        <img src={plusIcon} alt={'plus'}/> Dodaj transakciju
    </button>
}

export default ButtonAddTransaction;