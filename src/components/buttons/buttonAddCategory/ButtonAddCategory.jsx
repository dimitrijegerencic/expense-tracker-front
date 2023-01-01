import React from "react";
import classes from "./ButtonAddCategory.module.scss";

const ButtonAddCategory = ({label, onClick}) => {
    return <button type={'submit'} className={classes['btn-add-category']}
                   onClick={(e)=>onClick(e)}>
            {label}
           </button>
}

export default ButtonAddCategory;
