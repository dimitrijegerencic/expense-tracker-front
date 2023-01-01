import React from "react";
import classes from "./PopoverContent.module.scss";
import {useNavigate} from "react-router-dom";
import {routes} from "../../routes/routes";
import {t} from "react-switch-lang";
import {useUser} from "../../context/userContext/UserContext";

const PopoverContent = () => {

    const navigate = useNavigate();

    const {setLanguage} = useUser();

    return <div className={classes['content']}>
        <p onClick={()=>navigate(routes.PROFILE.change.path)}>{t('navbar.edit-profile')}</p>
        <p>{t('navbar.logout')}</p>
        <div className={classes['languages']}>
            <p onClick={()=>setLanguage('me')}>ME</p>
            <p onClick={()=>setLanguage('en')}>EN</p>
        </div>

    </div>
}

export default PopoverContent;