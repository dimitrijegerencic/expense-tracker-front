import React from "react";
import classes from "./ButtonFormGroup.module.scss";
import {t} from "react-switch-lang";
import PropTypes from "prop-types";

const ButtonFormGroup = ({onClick}) => {
    return <div className={classes['button-group']}>
        <button className={classes['cancel-btn']} onClick={(e)=>onClick(e)}>{t('common.cancel')}</button>
        <button className={classes['save-btn']} type={'submit'}>{t('common.save')}</button>
    </div>
}

ButtonFormGroup.propTypes = {
    onClick:PropTypes.func.isRequired,
}

export default ButtonFormGroup;