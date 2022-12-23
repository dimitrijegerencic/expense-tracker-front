import React from "react";
import classes from "./ChangeProfile.module.scss";
import Navbar from "../../components/navbar/Navbar";
import InputField from "../../components/formFields/inputField/InputField";
import ButtonFormGroup from "../../components/buttons/buttonFormGroup/ButtonFormGroup";
import profileImg from "../../img/profile/unsplash_jmURdhtm7Ng.png";
import PasswordField from "../../components/formFields/passwordField/PasswordField";

const ChangeProfile = () => {
    return <>
        <Navbar/>
        <div className={classes['main']}>
            <div className={classes['container']}>
                <p>Izmjena profila</p>
                <div className={classes['form-container']}>
                    <div className={classes['image-container']}>
                        <img src={profileImg} alt={'profile'}/>
                    </div>
                    <div className={classes['info-container']}>
                      <div>
                          <label htmlFor="">Ime i prezime</label>
                          <InputField label={''} use={'profile'}/>
                      </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <PasswordField label={''} use={'profile'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes['form-buttons']}>
                <ButtonFormGroup/>
            </div>
        </div>

    </>
}

export default ChangeProfile;