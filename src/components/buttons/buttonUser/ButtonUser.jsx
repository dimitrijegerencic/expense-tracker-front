import React, {useState} from "react";
import {Button, Popover} from "antd";
import userImg from "../../../img/button/Group 5.png";
import arrowImg from "../../../img/button/Vector.png";
import classes from "./ButtonUser.module.scss";
import PopoverContent from "../../popoverContent/PopoverContent";

const ButtonUser = () => {

    const [open, setOpen] = useState(false);

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    return  <Popover
        content={<PopoverContent/>}
        placement="bottomLeft"
        trigger="click"
        open={open}
        showArrow={false}
        onOpenChange={handleOpenChange}
        className={classes['popover']}
        >
        <Button className={classes['user-btn']}>
            <img src={userImg} alt={'user'}/>
            <img src={arrowImg} alt={'arrow'}/>
        </Button>
    </Popover>
}

export default ButtonUser;