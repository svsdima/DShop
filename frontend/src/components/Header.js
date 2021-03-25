import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link className="logo" to="/">
                        <img src="/icon/DShop_Logo_Gray.svg" alt="logo"></img>
                        <div className="logo__title">
                            DShop
                            <span>магазин цифровой техники</span>
                        </div>
                    </Link>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <Link to="/cart">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span>Корзина</span>
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/login">
                                <i className="fas fa-user"></i>
                                    <span>Войти</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;

