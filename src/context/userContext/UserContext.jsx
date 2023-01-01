import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {profileService} from "../../services/ProfileService";
import {storageService} from "../../services/StorageService";
import {storageKeys} from "../../config/config";
import { setTranslations, setDefaultLanguage, setLanguage } from "react-switch-lang";
import me from "../../language/me.json";
import en from "../../language/en.json";

const UserContext = createContext();

setTranslations({en,me})
setDefaultLanguage(storageService.exists(storageKeys.LANGUAGE) ? storageService.get(storageKeys.LANGUAGE) : 'me');

const UserProvider = ({children}) => {

    const [userData, setUserData] = useState(null);
    const [appLanguage, setAppLanguage] = useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
        if (storageService.exists(storageKeys.TOKEN)){
            profileService.getCurrentUserInfo()
                            .then(r => setUserData(r))
                            .catch(error => {navigate('/login')})
        }
        else{
            navigate("/login");
        }
        if(storageService.exists(storageKeys.LANGUAGE) === false){
            storageService.set(storageKeys.LANGUAGE,'me')
        }

    }, [])

    const data = {
        userData : userData,
        setUserData: (data) => setUserData(data),
        setLanguage: (data)=>{
            setLanguage(data);
            setAppLanguage(prevState => prevState + 1)
            storageService.set(storageKeys.LANGUAGE,data)
        }
    }

    return(
        <UserContext.Provider key={appLanguage} value={data}>
            {children}
        </UserContext.Provider>
    )

}

export const useUser = () => {
    return useContext(UserContext)
}

export default UserProvider;