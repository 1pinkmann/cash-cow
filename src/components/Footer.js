import logo from "../images/svg/logo_v2.svg";
import Menu from "./common/Menu";
import Social from "./common/Social";
import grass from "../images/grass.png";

export default function Footer({ sections }) {

    return (
        <footer className="footer">
            <div className="footer__wrapper container">
                <div className="footer__logo">
                    <img src={logo} className="logo__icon" alt="logo" />
                </div>
                <Menu sections={sections} className="menu--footer" />
                <Social className="social--footer footer__social" />
                <p className="footer__copyright">Copyright © 2022 CashCow</p>
            </div>
            <img src={grass} alt="Grass" className="footer__image" />
        </footer>
    )
}
