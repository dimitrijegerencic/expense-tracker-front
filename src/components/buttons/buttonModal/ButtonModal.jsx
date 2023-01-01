import React from "react";
import classes from "./ButtonModal.module.scss";

const ButtonModal = ({label, onClick=()=>{}, color}) => {
        return <button type={'button'} className={classes['btn-modal']}
                       onClick={onClick}
                       style={{backgroundColor:color}}
        >
            {label}
        </button>
}

export default ButtonModal;