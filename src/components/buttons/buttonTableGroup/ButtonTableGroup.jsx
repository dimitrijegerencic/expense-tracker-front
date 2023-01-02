import React from "react";
import classes from "./ButtonTableGroup.module.scss";
import pencilImg from "../../../img/button/pencil.png";
import trashbinImg from "../../../img/button/trash-2.png";
import PropTypes from "prop-types";

const ButtonTableGroup = ({onEdit, onDelete}) => {
    return <div className={classes['table-button-group']}>
        <button onClick={(e)=>{e.stopPropagation(); onEdit(e)}}>
            <img src={pencilImg} alt={""}/>
        </button>
        <button onClick={onDelete} type={'button'}>
            <img src={trashbinImg} alt={""}/>
        </button>
    </div>
}

ButtonTableGroup.propTypes = {
    onEdit:PropTypes.func.isRequired,
    onDelete:PropTypes.func.isRequired
}

export default ButtonTableGroup;