import logo from "../images/svg/logo_v2.svg";
import Menu from "./common/Menu";
import Social from "./common/Social";

export default function Footer({ sections }) {

    return (
        <footer className="footer container">
            <div className="logo footer__logo">
                <img src={logo} className="logo__icon" alt="logo" />
            </div>
            <Menu sections={sections} className="menu--footer" />
            <Social className="social--footer footer__social" />
            <p className="footer__copyright">© 2022 Floki Gainz. All rights reserved</p>
        </footer>
    )
}
