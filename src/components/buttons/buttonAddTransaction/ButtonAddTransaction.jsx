import React from "react";
import classes from "./ButtonAddTransaction.module.scss";
import plusIcon from "../../../img/button/close_24px.png";
import {t} from "react-switch-lang";
import PropTypes from "prop-types";

const ButtonAddTransaction = ({onClick}) => {
    return <button className={classes['btn-add-transaction']}
                   onClick={(e) => onClick(e)}>
        <img src={plusIcon} alt={'plus'}/> {t('navbar.add-transaction')}
    </button>
}

ButtonAddTransaction.propTypes = {
    onClick:PropTypes.func.isRequired,
}

export default ButtonAddTransaction;