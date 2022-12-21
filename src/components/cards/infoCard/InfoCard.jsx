import React from "react";
import classes from "./InfoCard.module.scss";

const InfoCard = ({title, value, color}) => {
    return <div className={classes['info-card']}>
        <p className={classes['card-title']}>{title}</p>
        <h1 className={classes['card-value']} style={{color:{this:color}}}>{value}</h1>
    </div>
}
export default InfoCard;