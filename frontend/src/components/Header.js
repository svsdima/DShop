import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions.js';

const Header = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link className="logo" to="/">
                        <img src="/icon/DShop_Logo_Main.svg" alt="logo"></img>
                        <div className="logo__title">
                            DShop
                            <span>магазин цифровой техники</span>
                        </div>
                    </Link>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <Link to="/">
                                    <i className="fas fa-home"></i>
                                    <span>Главная</span>
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/cart">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span>Корзина</span>
                                </Link>
                            </li>
                            {userInfo ? (
                            <li className="menu__item" title={userInfo.name} id="username">
                                <span>{userInfo.name}</span>
                                <ul>
                                    <li className="menu__item">
                                        <Link to="/profile">
                                            <span>Профиль</span>
                                        </Link>
                                    </li>
                                    <li className="menu__item">
                                        <Link to="/" onClick={logoutHandler} >
                                            <span>Выйти</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            ) : 
                            <li className="menu__item">
                                <Link to="/login">
                                    <i className="fas fa-user"></i>
                                    <span>Войти</span>
                                </Link>
                            </li>}
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;

