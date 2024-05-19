import React from 'react';
import fetch from "../../constants/profile_example.json";
import { Doughnut } from 'react-chartjs-2';
import "./TeamOutlook.css"
import { DoughnutController, ArcElement } from 'chart.js/auto';

function TeamOutlook() {
    const [fontSize, setFontSize] = React.useState(16); // Default font size
    const percentage = fetch.team.statistics[0] / (fetch.team.statistics[0] + fetch.team.statistics[1]) * 100;
    const data = {
        labels: ['On schedule', 'Caution'],
        datasets: [{
            data: fetch.team.statistics,
            backgroundColor: ['#05F000', '#FFE70B'],
            hoverBackgroundColor: ['#FF6384', '#FFCE56']
        }],
    };

    React.useEffect(() => {
        const getComputedFontSize = (className) => {
            const element = document.querySelector(className);
            if (element) {
                const computedStyle = getComputedStyle(element);
                return parseFloat(computedStyle.fontSize);
            }
            return 16
        };

        const regularFontSize = getComputedFontSize('.p__regular');
        setFontSize(regularFontSize);
    }, []);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '80%',
        layout: {
            autoPadding: true,
            padding: {
                top: 10,
                bottom: 20
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: "start",
                labels: {
                    font: {
                        size: fontSize
                    }
                },
                fullSize: true,
            },
            tooltip: {
                enabled: true,
                bodyFont: {
                    size: fontSize
                },
                titleFont: {
                    size: fontSize
                }
            },
        }
    };

    return (
        <div className='teamOutlook card'>
            <div className="margin__bottom">
                <h1 className='p__highlight'>Team Outlook</h1>
            </div>
            <div className="teamOutlook__body">
                <Doughnut data={data} options={options} />
                <p className="p__regular">{percentage}% on Schedule</p>
            </div>
        </div>
    );
}

export default TeamOutlook;