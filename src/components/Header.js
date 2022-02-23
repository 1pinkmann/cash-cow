import { useState } from "react";
import logo from "../images/svg/logo.svg";
import Menu from './common/Menu';

export default function Header({ sections }) {
    const [menuOpened, setMenuOpened] = useState();

    return (
        <header className="header">
            <div className="header__wrapper container">
                <a href="/" className="logo header__logo">
                    <img src={logo} className="logo__icon" alt="logo" />
                </a>
                <Menu className={"menu--header" + (menuOpened ? " opened" : "")} sections={sections} menuCallback={() => setMenuOpened(false)} />
                <a href="/" className="button button--header header__button">Whitepaper</a>
                <button className={"header__mobile-button" + (menuOpened ? " opened" : "")} onClick={() => setMenuOpened(!menuOpened)}><span></span></button>
            </div>
        </header>
    )
}