import React from "react";
import "./ButtonFormGroup.scss";
import {t} from "react-switch-lang";
import PropTypes from "prop-types";
import clsx from "clsx";

const ButtonFormGroup = ({onClick, use}) => {
    return <div className={clsx('button-group', use)}>
        <button className={clsx('cancel-btn', use)}
                onClick={(e)=>onClick(e)}>{t('common.cancel')}
        </button>
        <button className={clsx('save-btn', use)}
                type={'submit'}>{t('common.save')}
        </button>
    </div>
}

ButtonFormGroup.propTypes = {
    onClick:PropTypes.func.isRequired,
}

export default ButtonFormGroup;