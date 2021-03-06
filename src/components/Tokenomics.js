import { useEffect, useRef } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import ReactTooltip from 'react-tooltip';
import useChart from './../hooks/useChart';

export default function Tokenomics({ refProp }) {
    const { chart, handleChartArray } = useChart();
    const tokenChart = useRef(null);

    // const graphLabel = (props) => {
    //     return (
    //         <foreignObject
    //             x={props.dx / ((props.dataIndex + 1) * 1.5)}
    //             y={props.dy + (30 + (props.dataIndex + 1) * 1.5)}
    //             width={mobileScreen ? "130px" : "50px"} height={mobileScreen ? "45px" : "15px"}
    //             key={props.dataIndex}
    //             style={
    //                 {
    //                     display: chart[props.dataIndex].active ? "block" : "none",
    //                     transform: `translate(${mouse.x / 556}%, ${mouse.y / 556}%)`
    //                 }
    //             }
    //         >
    //             <div className="token__chart-label">
    //                 <span dangerouslySetInnerHTML={{ __html: chart[props.dataIndex].title }}></span>
    //             </div>
    //         </foreignObject>
    //     );
    // }

    useEffect(() => {
        const segments = tokenChart.current.querySelectorAll('path');

        segments.forEach((item, index) => {
            item.setAttribute('data-tip', `<p class="tooltip">${chart[index].title}</p>`);
        });

        ReactTooltip.rebuild();
    }, [chart]);

    return (
        <div className="token" ref={refProp}>
            <div className="token__wrapper container">
                <div className="token__column">
                    <h1 className="title token__title">Tokenomics</h1>
                    <p className="token__text token__text--1">
                        There is a 10% fee when buing and selling. 5% goes into liquidity,
                        4% team, 1% burned.
                        <br /><br />
                        There is an 8% deposit fee when entering the staking contact, but 100% of your deposit is used to calculate your daily rewards.
                        5% goes to liquidity, 4% team, 1% burned.
                        <br /><br />
                        There is no tax compounding.
                    </p>
                    <ul className="token__labels">
                        {chart.map((item, index) => {
                            return (
                                <li className={"token__label" + (item.active ? " active" : "")} key={index} style={{ color: item.color }} onMouseOver={() => handleChartArray(index)}>
                                    <span className="token__label-title" dangerouslySetInnerHTML={{ __html: item.title }}></span>
                                </li>
                            );
                        })}
                    </ul>
                    <p className="token__text token__text--2">
                        Buy/sell tax:<br />
                        5% liquidity 4% marketing 1% burned
                    </p>
                </div>
                <div className="token__chart-wrapper" ref={tokenChart}>
                    <PieChart
                        className="token__chart"
                        data={chart}
                        onMouseOver={(e, segmentIndex) => handleChartArray(segmentIndex)}
                        segmentsStyle={(index) => ({
                            cursor: "pointer",
                            filter: chart[index].active ? "brightness(115%)" : "unset",
                            outline: "none"
                        })}
                        // label={graphLabel}
                        labelPosition={110}
                        labelStyle={(index) => ({
                            fontSize: "5px",
                            fill: "#67F6C0",
                            fontFamily: "Century Gothic-Bold",
                            borderRadius: "12px",
                            backgroundColor: "#000",
                            padding: "10px 27px"
                        })}
                        lineWidth={15}
                        rounded={true}
                        startAngle={-135}
                    />
                    <p className="token__chart-text">Total Supply<br /> 100,000,000,000</p>
                </div>
                <ReactTooltip backgroundColor='#0c0d3d' html={true} overridePosition={({ left, top }, currentEvent) => {
                    if (currentEvent.type === "focus") {
                        return { left, top: '50%' };
                    } else {
                        return { left, top };
                    }
                }} />
            </div>
        </div>
    )
}
