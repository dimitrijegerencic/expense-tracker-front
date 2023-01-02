import React from "react";
import classes from "./PopoverContent.module.scss";
import {useNavigate} from "react-router-dom";
import {routes} from "../../routes/routes";
import {t} from "react-switch-lang";
import {authService} from "../../services/AuthService";
import {storageService} from "../../services/StorageService";
import LanguageOptions from "../languageOptions/LanguageOptions";

const PopoverContent = () => {

    const navigate = useNavigate();

    const logout = () => {
        authService.logout()
            .then(() => {
                storageService.clear()
                navigate(routes.LOGIN.path)
            })
    }

    return <div className={classes['content']}>
        <p onClick={()=>navigate(routes.PROFILE.change.path)}>{t('navbar.edit-profile')}</p>
        <p onClick={() => logout()}>{t('navbar.logout')}</p>
        <LanguageOptions/>
    </div>
}

export default PopoverContent;