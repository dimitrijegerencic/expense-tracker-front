import React from "react";
import classes from "./ButtonFormGroup.module.scss";

const ButtonFormGroup = ({onClick}) => {
    return <div className={classes['button-group']}>
        <button className={classes['cancel-btn']} onClick={(e)=>onClick(e)}>odustani</button>
        <button className={classes['save-btn']} type={'submit'}>sačuvaj</button>
    </div>
}

export default ButtonFormGroup;