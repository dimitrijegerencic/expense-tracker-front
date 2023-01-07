import React from "react";
import {Dropdown} from "antd";
import userImg from "../../../img/button/Group 5.png";
import PopoverContent from "../../popoverContent/PopoverContent";
import {useUser} from "../../../context/userContext/UserContext";
import "./ButtonUser.scss";

const ButtonUser = () => {

    const {userData} = useUser();

    const dropContent = (
        <PopoverContent/>
    )

    return  <div className={'drop-container'}>
                <Dropdown overlay={dropContent}
                  trigger='click'
                  className={'nav-dropdown'}
                >
                    <img src={userData ? userData.getUserPhoto() : userImg} alt={userImg}/>
                </Dropdown>
    </div>
}



export default ButtonUser;