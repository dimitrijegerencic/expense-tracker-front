import React from "react";
import classes from "./PageNotFound.module.scss";
import {useNavigate} from "react-router-dom";
import {t} from "react-switch-lang";

const PageNotFound = () => {

    const navigate = useNavigate();

    return <>
        <div className={classes['main']}>
            <h1>{t('page-not-found.title')}</h1>
            <p onClick={() => navigate(-1)}>{t('page-not-found.go-back')}</p>
        </div>
    </>
}

export default PageNotFound;