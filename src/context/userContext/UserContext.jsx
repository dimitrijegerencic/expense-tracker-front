import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {profileService} from "../../services/ProfileService";
import {storageService} from "../../services/StorageService";
import {storageKeys} from "../../config/config";

const UserContext = createContext();

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
    }, [])

    const data = {
        userData : userData,
        setUserData: (data) => setUserData(data),
        setAppLanguage: (key) => {
            setAppLanguage(prevState => prevState + 1)
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