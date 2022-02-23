import { useState } from "react";

export default function useChart() {
    const [chart, setChart] = useState([
        { title: "50% staked in the reward pool", value: 50, color: "#B055FF", id: 1, active: true },
        { title: "20% marketing vested <span>(2% monthly release)</span>", value: 20, color: "#538DE4", id: 3, active: false },
        { title: "7% team", value: 7, color: "#FA574D", id: 0, active: false },
        { title: "15% presale", value: 15, color: "#F4A366", id: 2, active: false },
        { title: "8% listed on spooky", value: 8, color: "#EBF667", id: 4, active: false },
    ]);

    function handleChartArray(segmentIndex) {
        setChart(state => state.map((item, index) => ({ ...item, active: index === segmentIndex })));
    }

    return {
        chart, handleChartArray
    }
}
