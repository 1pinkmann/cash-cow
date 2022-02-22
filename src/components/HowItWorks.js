import sun from "../images/how-it-works/sun.svg";
import cloud from "../images/how-it-works/cloud.svg";

export default function HowItWorks() {
    return (
        <div className="how-it-works">
            <h1 className="title how-it-works__title container">How it Works</h1>
            <div className="how-it-works__wrapper container">
                <div className="how-it-works__image-wrapper">
                    <img src={sun} alt="Sun" className="how-it-works__image how-it-works__image--1" />
                    <img src={cloud} alt="Cloud" className="how-it-works__image how-it-works__image--2" />
                </div>
                <div className="how-it-works__column">
                    <ul className="how-it-works__list">
                        <li className="how-it-works__item">
                            <div className="how-it-works__item-wrapper">
                                <span className="how-it-works__item-count">1</span>
                                <span>Approve the amount of tokens you wish to deposit</span>
                            </div>
                        </li>
                        <li className="how-it-works__item">
                            <div className="how-it-works__item-wrapper">
                                <span className="how-it-works__item-count">2</span>
                                <span>Deposit your tokens into the vault</span>
                            </div>
                        </li>
                        <li className="how-it-works__item">
                            <div className="how-it-works__item-wrapper">
                                <span className="how-it-works__item-count">3</span>
                                <span>Share your referral link with your crypto friends and followers to boost your rewards</span>
                            </div>
                        </li>
                        <li className="how-it-works__item">
                            <div className="how-it-works__item-wrapper">
                                <span className="how-it-works__item-count">4</span>
                                <span>All rewards can be withdrawn on a daily basis</span>
                            </div>
                        </li>
                        <li className="how-it-works__item">
                            <div className="how-it-works__item-wrapper">
                                <span className="how-it-works__item-count">5</span>
                                <span>Compound your rewards to increase your investment</span>
                            </div>
                        </li>
                    </ul>
                    <button className="button how-it-works__button">Get Started</button>
                </div>
            </div>
        </div>
    )
}
