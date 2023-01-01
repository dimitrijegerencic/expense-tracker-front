import React from "react";
import {Menu} from "antd";
import classes from './Navbar.module.scss';
import ButtonAddTransaction from "../buttons/buttonAddTransaction/ButtonAddTransaction";
import ButtonUser from "../buttons/buttonUser/ButtonUser";
import MenuItem from "antd/es/menu/MenuItem";
import {Link, useNavigate} from "react-router-dom";
import {routes} from "../../routes/routes";
import {t} from "react-switch-lang";

const Navbar = () => {

    const navigate = useNavigate();

    return <Menu mode="horizontal"
                 defaultSelectedKeys={['home']}
                 className={classes['navigation-menu']}>
        <MenuItem className={classes['logo-item']}>
            <Link to={routes.HOME.path}>LOGO</Link>
        </MenuItem>
        <div className={classes['menu-items']}>
            <MenuItem>
                <Link to={routes.TRANSACTIONS.history.path}>{t('navbar.transaction-history')}</Link>
            </MenuItem>
            <MenuItem>
                <Link to={routes.CATEGORIES.general.path}>{t('navbar.categories')}</Link>
            </MenuItem>
        </div>
        <div className={classes['menu-buttons']}>
            <MenuItem><ButtonAddTransaction onClick={()=>navigate(routes.TRANSACTIONS.add.path)}/></MenuItem>
            <MenuItem><ButtonUser/></MenuItem>
        </div>
    </Menu>
}

export default Navbar;