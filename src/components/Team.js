import useSmallScreen from './../hooks/useSmallScreen';

const teamMembers = [
    { name: "Brandon Workman", position: "CEO", id: 0 },
    { name: "Zain Levin", position: "CTO", id: 1 },
    { name: "Tiana Dorwart", position: "Marketing Manager", id: 2 },
    { name: "Nolan Geidt", position: "Project Manager", id: 4 }
];

export default function Team() {
    const mobileScreen = useSmallScreen(620);
    return (
        <div className="team">
            <h1 className="title">Meet the Team</h1>
            {mobileScreen ?
                <>
                    <ul className="cards-list cards-list--team">
                        {teamMembers.map((item, index) => {
                            return index < 2 && (
                                <li className="cards-list__item" key={item.id}>
                                    <div className="card card--team">
                                        <div className="card__image-wrapper"></div>
                                        <div className="card__title">{item.name}</div>
                                        <p className="card__text">{item.position}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="cards-list cards-list--team cards-list--team-2">
                        {teamMembers.map((item, index) => {
                            return index > 1 && (
                                <li className="cards-list__item" key={item.id}>
                                    <div className="card card--team">
                                        <div className="card__image-wrapper"></div>
                                        <div className="card__title">{item.name}</div>
                                        <p className="card__text">{item.position}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </>
                :
                <ul className="cards-list cards-list--team">
                    {teamMembers.map(item => {
                        return (
                            <li className="cards-list__item" key={item.id}>
                                <div className="card card--team">
                                    <div className="card__image-wrapper"></div>
                                    <div className="card__title">{item.name}</div>
                                    <p className="card__text">{item.position}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            }
        </div>
    )
}
