import React from "react";
import classes from "./InfoCard.module.scss";
import PropTypes from "prop-types";

const InfoCard = ({title, value, color}) => {

    const c = color.toString();

    return <div className={classes['info-card']}>
        <p className={classes['card-title']}>{title}</p>
        <h1 className={classes['card-value']} style={{color:c}}>{value}</h1>
    </div>
}

InfoCard.propTypes = {
    title:PropTypes.string,
    value:PropTypes.string,
    color:PropTypes.string
}


export default InfoCard;