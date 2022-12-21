import React from "react";
import classes from "./PopoverContent.module.scss";

const PopoverContent = () => {
    return <div className={classes['content']}>
        <p>Izmjena profila</p>
        <p>Logout</p>
        <div className={classes['languages']}>
            MN  |  EN
        </div>

    </div>
}

export default PopoverContent;