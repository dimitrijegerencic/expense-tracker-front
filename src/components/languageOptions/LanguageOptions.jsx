import React from "react";
import "./LanguageOptions.scss";
import {useUser} from "../../context/userContext/UserContext";

const LanguageOptions = () => {

    const {setLanguage} = useUser();

    return <div className={'languages-container'}>
        <p onClick={()=>setLanguage('me')}>MN</p>
        <span>|</span>
        <p onClick={()=>setLanguage('en')}>EN</p>
    </div>
}

export default LanguageOptions;