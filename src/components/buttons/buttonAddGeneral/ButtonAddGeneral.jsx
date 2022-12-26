import React from "react";
import classes from "./ButtonAddGeneral.module.scss";
import addImg from "../../../img/button/material-symbols_add.png";
import clsx from "clsx";

const ButtonAddGeneral = ({size, onClick}) => {
    return <button
                className={clsx(classes['btn-add-general'], classes[size])}
                onClick={(e)=>onClick(e)}
            >
        {size==='big' ? <img src={addImg} alt={"+"}/> : "+"}
    </button>
}

export default ButtonAddGeneral;