import React from "react";
import classes from "./ButtonFormGroup.module.scss";
import {t} from "react-switch-lang";

const ButtonFormGroup = ({onClick}) => {
    return <div className={classes['button-group']}>
        <button className={classes['cancel-btn']} onClick={(e)=>onClick(e)}>{t('common.cancel')}</button>
        <button className={classes['save-btn']} type={'submit'}>{t('common.save')}</button>
    </div>
}

export default ButtonFormGroup;