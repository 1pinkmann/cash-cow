const roadmapArray = [
    {
        title: "Q1 2022",
        list: [
            "Private and Presale",
            "KYC and Audit",
            "Launch",
            "Huge Influencer Marketing and Ads",
            "CMC and CG listings",
            "Fitness Contest Begins",
            "NFT Collection #1 Launch"
        ],
        active: true
    },
    {
        title: "Q2 2022",
        list: [
            "ExChange Listing Applications",
            "Staking",
            "Fitness and Nutrition Partnerships",
            "Additional NFT-Based utility"
        ],
        active: false
    },
    {
        title: "Q3 2022",
        list: [
            "NFT Marketplace",
            "ERC Launch and Bridging",
            "Merchandising",
            "Surprise Utility Announcement"
        ],
        active: false
    }
];

export default function Roadmap({ refProp }) {
    return (
        <div className="roadmap" ref={refProp}>
            <div className="roadmap__wrapper container">
                <h1 className="title">Roadmap</h1>
                <ul className="roadmap__list">
                    {roadmapArray.map((item, index) => {
                        return (
                            <li className={"roadmap__item" + (item.active ? " roadmap__item--active" : "")} key={index}>
                                <div className="roadmap__column roadmap__column--1">
                                    {index % 2 !== 0 ?
                                        <h3 className="roadmap__title">{item.title}</h3>
                                        :
                                        <ul className="roadmap__item-list">
                                            {item.list.map((listItem, listIndex) => <li className="roadmap__list-item" key={listIndex}>{listItem}</li>)}
                                        </ul>
                                    }
                                </div>
                                <div className="roadmap__column roadmap__column--2">
                                    {index % 2 !== 0 ?
                                        <ul className="roadmap__item-list">
                                            {item.list.map((listItem, listIndex) => <li className="roadmap__list-item" key={listIndex}>{listItem}</li>)}
                                        </ul>
                                        :
                                        <h3 className="roadmap__title">{item.title}</h3>
                                    }
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <button className="button roadmap__button">Get Started</button>
            </div>
        </div>
    )
}
