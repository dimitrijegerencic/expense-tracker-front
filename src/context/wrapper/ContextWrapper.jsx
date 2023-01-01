import React from 'react';
import ModalProvider from "../modalContext/ModalContext";
import UserProvider from "../userContext/UserContext";

const ContextWrapper=({children})=>{
    return(
        <UserProvider>
            <ModalProvider>
                {children}
            </ModalProvider>
        </UserProvider>
    )
}

export default ContextWrapper;