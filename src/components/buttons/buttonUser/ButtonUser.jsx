import React from "react";
import {Dropdown} from "antd";
import defaultProfileImg from "../../../img/profile/default-profile.jpg";
import PopoverContent from "../../popoverContent/PopoverContent";
import {useUser} from "../../../context/userContext/UserContext";
import "./ButtonUser.scss";
import {useQuery} from "react-query";
import {profileService} from "../../../services/ProfileService";
import {useForm} from "react-hook-form";

const ButtonUser = () => {

    const {userData, setUserData} = useUser();

    const dropContent = (
        <PopoverContent/>
    )

    const {reset} = useForm();

    const {data : currentUser} = useQuery(
        ['user', userData?.id],
        () => profileService.getCurrentUserInfo()
            .then(result => {
                reset({
                    name : result?.name,
                    password : result?.password
                })
                setUserData(result);
                return result
            }),
        {
            enabled : true
        }
    )

    return  <div className={'drop-container'}>
                <Dropdown overlay={dropContent}
                  trigger='click'
                  className={'nav-dropdown'}
                >
                  <img src={currentUser ? currentUser?.getUserPhoto() : defaultProfileImg} alt={'profile'} />

                </Dropdown>
    </div>
}



export default ButtonUser;