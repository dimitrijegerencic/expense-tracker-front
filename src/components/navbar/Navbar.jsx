import React, {useState} from "react";
import {Menu} from "antd";
import './Navbar.scss';
import ButtonAddTransaction from "../buttons/buttonAddTransaction/ButtonAddTransaction";
import ButtonUser from "../buttons/buttonUser/ButtonUser";
import {Link, useNavigate} from "react-router-dom";
import {routes} from "../../routes/routes";
import {t} from "react-switch-lang";
import logoImg from "../../img/navbar/LOGO.png";
import { FaBars } from 'react-icons/fa';


const Navbar = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const navbarItems = [
        {
            label: <Link to='/'>
                        <div className={'logo-item'}>
                            <img src={logoImg} alt='LOGO'/>
                        </div>
                  </Link>,
            key: 'home',
            onClick: () => {setIsOpenMenu(false)}
        },
        {
            label: <Link to={routes.TRANSACTIONS.history.path}>{t('navbar.transaction-history')}</Link>,
            key: 'transaction-history',
            onClick: () => {setIsOpenMenu(false)}
        },
        {
            label: <Link to={routes.CATEGORIES.general.path}>{t('navbar.categories')}</Link>,
            key: 'categories',
            onClick: () => {setIsOpenMenu(false)}
        },
        {
            label: <div className={'menu-buttons'}>
                        <ButtonAddTransaction onClick={()=>navigate(routes.TRANSACTIONS.add.path)}/>
                        <ButtonUser/>
                    </div>,
            key: 'add-transaction&user-button',
        }
    ]

    const navigate = useNavigate();


    const toggleMobileMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    return <div>
        <div className={'menu-icon'} onClick={toggleMobileMenu}>
            <FaBars size={30}/>
        </div>
        <Menu mode={'horizontal'}
              className={`navigation-menu ${isOpenMenu && 'active'}`}
              items={navbarItems}
              breakpoint={null}
        />
    </div>
}

export default Navbar;