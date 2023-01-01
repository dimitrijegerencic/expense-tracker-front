import React, {useState} from "react";
import classes from "./Home.module.scss";
import InfoCard from "../../components/cards/infoCard/InfoCard";
import BarChart from "../../components/charts/BarChart";
import {Chart} from "chart.js/auto";
import {useQuery} from "react-query";
import {dashboardService} from "../../services/DashboardService";
import {t} from "react-switch-lang";

const Home = () => {

    const UserData = [
        {
            id: 1,
            year: 2019,
            userGain: 780,
            userLost: 823,
            color : "orange"
        },
        {
            id: 2,
            year: 2020,
            userGain: 200,
            userLost: 345,
            color: "blue"
        },
        {
            id: 3,
            year: 2022,
            userGain: 433,
            userLost: 555,
            color:"green"
        },
        {
            id: 4,
            year: 2023,
            userGain: 351,
            userLost: 4555,
            color:"red"
        },
        {
            id: 5,
            year: 2024,
            userGain: 600,
            userLost: 234,
            color: "purple"
        },
        {
            id: 6,
            year: 2091,
            userGain: 80,
            userLost: 823,
            color : "black"
        },
        {
            id: 7,
            year: 1970,
            userGain: 251,
            userLost: 345,
            color: "#91a5c4"
        },
        {
            id: 8,
            year: 2024,
            userGain: 600,
            userLost: 234,
            color: "purple"
        },
    ];


    Chart.defaults.font.size = 16;
    Chart.defaults.font.family = "Montserrat";

    const [userData, setUserData] = useState({
        labels : UserData.sort((a,b) => b.userGain - a.userGain).map((data) => data.year),
        datasets : [{
            label: "",
            data : UserData.map((data) => data.userGain),
            backgroundColor : UserData.map((data) => data.color),
            borderRadius : 10,
            grouped:false,
        }]
    });

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
        }
    };

    const {data : reports} = useQuery(
        ['reports'],
        ()=>dashboardService.getReportData(),{
            enabled : true,
            initialData : []
        }
    );

    const infoCards = [
        {
            title: t('home.info-cards.balance'),
            amount : reports.balance,
            color : "#140C6F"
        },
        {
            title: t('home.info-cards.incomes'),
            amount : reports.incomes,
            color : "#84C57A"
        },
        {
            title: t('home.info-cards.expenses'),
            amount : reports.expenses,
            color : "#DC678894"
        }

    ]


    return <div>
        <div className={classes['info-cards-container']}>

            {infoCards.map((card, key) => {
                return <InfoCard
                            key={key}
                            title={card?.title}
                            value={card?.amount}
                            color={card?.color}
                        />
            })}
        </div>
        <div className={classes['main']}>
            <div className={classes['filters']}>
                <p>Trenutno stanje</p>
                <hr/>
            </div>
            <div className={classes['chart-container']}>
               <div>
                   <BarChart dataset={userData} options={options}/>
               </div>
            </div>
        </div>
    </div>
}

export default Home;