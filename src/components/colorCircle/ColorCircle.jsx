import React from "react";
import classes from "./ColorCircle.module.scss";
import PropTypes from "prop-types";

const ColorCircle = ({color}) => {

    return <div className={classes['container']}>
        <div style={{backgroundColor: color}}
             className={classes['color-circle']}>
        </div>
    </div>
}

ColorCircle.propTypes = {
    color:PropTypes.string
}

export default ColorCircle;