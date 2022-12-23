import React, {useState} from "react";
import classes from "./Home.module.scss";
import Navbar from "../../components/navbar/Navbar";
import InfoCard from "../../components/cards/infoCard/InfoCard";
import BarChart from "../../components/charts/BarChart";
import {Chart} from "chart.js/auto";

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


    return <div>
        <Navbar/>
        <div className={classes['info-cards-container']}>
            <InfoCard title={'Trenutno stanje na računu'} value={'896.86€'} color={"#140C6F"}/>
            <InfoCard title={'Prihodi'} value={'+1569.65€'} color={"#84C57A"}/>
            <InfoCard title={'Troškovi'} value={'-679.79€'} color={"#DC678894"}/>
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