import React from "react";
import {Menu} from "antd";
import './Navbar.scss';
import ButtonAddTransaction from "../buttons/buttonAddTransaction/ButtonAddTransaction";
import ButtonUser from "../buttons/buttonUser/ButtonUser";
import {Link, useNavigate} from "react-router-dom";
import {routes} from "../../routes/routes";
import {t} from "react-switch-lang";
import logoImg from "../../img/navbar/LOGO.png";

const Navbar = () => {

    const navbarItems=[
        {
            label: <Link to='/'>
                <div className={'logo-item'}>
                    <img src={logoImg} alt='LOGO'/>
                </div>
            </Link>,
            key: 'home'
        },
        {
            label: <Link to={routes.TRANSACTIONS.history.path}>{t('navbar.transaction-history')}</Link>,
            key: 'transaction-history'
        },
        {
            label: <Link to={routes.CATEGORIES.general.path}>{t('navbar.categories')}</Link>,
            key: 'categories'
        },
        {
            label: <div className={'menu-buttons'}>
                    <ButtonAddTransaction onClick={()=>navigate(routes.TRANSACTIONS.add.path)}/>
                    <ButtonUser/>
                    </div>,
            key: 'add-transaction&user-button'
        }
    ]

    const navigate = useNavigate();

    return <div>
        <Menu mode='horizontal'
            className={'navigation-menu'}
            items={navbarItems}
        />
    </div>
}

export default Navbar;