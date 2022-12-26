import React from "react";
import classes from "./ButtonTableGroup.module.scss";
import pencilImg from "../../../img/button/pencil.png";
import trashbinImg from "../../../img/button/trash-2.png";

const ButtonTableGroup = ({onEdit, onDelete}) => {
    return <div className={classes['table-button-group']}>
        <button onClick={(e)=>{e.stopPropagation(); onEdit(e)}}>
            <img src={pencilImg} alt={""}/>
        </button>
        <button onClick={(e)=>{e.stopPropagation(); onDelete(e)}}>
            <img src={trashbinImg} alt={""}/>
        </button>
    </div>
}

export default ButtonTableGroup;