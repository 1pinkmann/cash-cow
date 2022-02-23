import Twitter from './../../Icons/Twitter';
import Facebook from './../../Icons/Facebook';
import Instagram from './../../Icons/Instagram';

export default function Social({ className }) {
    return (
        <ul className={"social " + (className ? className : "")}>
            <li className="social__item">
                <a href="/" className="social__link">
                    <Facebook className="social__icon" />
                </a>
            </li>
            <li className="social__item">
                <a href="/" className="social__link">
                    <Twitter className="social__icon" />
                </a>
            </li>
            <li className="social__item">
                <a href="/" className="social__link">
                    <Instagram className="social__icon" />
                </a>
            </li>
        </ul>
    )
}
