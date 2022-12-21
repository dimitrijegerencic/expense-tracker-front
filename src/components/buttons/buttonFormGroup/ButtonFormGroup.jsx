import React from "react";
import classes from "./ButtonFormGroup.module.scss";

const ButtonFormGroup = () => {
    return <div className={classes['button-group']}>
        <button className={classes['cancel-btn']}>odustani</button>
        <button className={classes['save-btn']}>sačuvaj</button>
    </div>
}

export default ButtonFormGroup;