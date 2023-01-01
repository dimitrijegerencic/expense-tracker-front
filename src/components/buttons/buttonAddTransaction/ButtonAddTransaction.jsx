import React from "react";
import classes from "./ButtonAddTransaction.module.scss";
import plusIcon from "../../../img/button/close_24px.png";
import {t} from "react-switch-lang";

const ButtonAddTransaction = ({onClick}) => {
    return <button className={classes['btn']} onClick={(e) => onClick(e)}>
        <img src={plusIcon} alt={'plus'}/> {t('navbar.add-transaction')}
    </button>
}

export default ButtonAddTransaction;