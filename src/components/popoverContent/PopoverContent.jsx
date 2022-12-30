import React from "react";
import classes from "./PopoverContent.module.scss";
import {useNavigate} from "react-router-dom";
import {routes} from "../../routes/routes";

const PopoverContent = () => {

    const navigate = useNavigate();

    return <div className={classes['content']}>
        <p onClick={()=>navigate(routes.PROFILE.change.path)}>Izmjena profila</p>
        <p>Logout</p>
        <div className={classes['languages']}>
            MN  |  EN
        </div>

    </div>
}

export default PopoverContent;