import React from "react";
import classes from "./ColorCircle.module.scss";

const ColorCircle = ({color}) => {

    return <div className={classes['container']}>
        <div style={{backgroundColor: color}}
             className={classes['color-cirlce']}>
        </div>
    </div>
}

export default ColorCircle;