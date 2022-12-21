import React from "react";
import {Menu} from "antd";
import classes from './Navbar.module.scss';
import ButtonAddTransaction from "../buttons/buttonAddTransaction/ButtonAddTransaction";
import ButtonUser from "../buttons/buttonUser/ButtonUser";
import MenuItem from "antd/es/menu/MenuItem";

const Navbar = () => {

    return <Menu mode="horizontal"
                 defaultSelectedKeys={['home']}
                 className={classes['navigation-menu']}>
        <MenuItem className={classes['logo-item']}>
            LOGO
        </MenuItem>
        <div className={classes['menu-items']}>
            <MenuItem><a href="">Istorija transakcija</a></MenuItem>
            <MenuItem><a href="">Kategorije</a></MenuItem>
        </div>
        <div className={classes['menu-buttons']}>
            <MenuItem><ButtonAddTransaction/></MenuItem>
            <MenuItem><ButtonUser/></MenuItem>
        </div>
    </Menu>
}

export default Navbar;