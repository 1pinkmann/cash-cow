import cloud1 from "../images/banner/cloud1.svg";
import cloud2 from "../images/banner/cloud2.svg";
import cow from "../images/banner/cow.svg";
import money from "../images/banner/money.svg";

export default function Banner({ refProp }) {
    return (
        <div className="banner" ref={refProp}>
            <img src={cloud1} alt="Cloud" className="banner__cloud banner__cloud--1" />
            <img src={cloud2} alt="Cloud" className="banner__cloud banner__cloud--2" />
            <h1 className="title banner__title container">The Cash Cow Farm</h1>
            <p className="banner__text container">New concept in the De-Fi yield farming space</p>
            <div className="banner__wrapper">
                <img src={money} alt="Money" className="banner__money" />
                <img src={cow} alt="Cash Cow" className="banner__image" />
            </div>
        </div>
    )
}
