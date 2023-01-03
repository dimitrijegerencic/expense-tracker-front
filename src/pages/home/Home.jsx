import React, {useState} from "react";
import classes from "./Home.module.scss";
import InfoCard from "../../components/cards/infoCard/InfoCard";
import {useQuery} from "react-query";
import {dashboardService} from "../../services/DashboardService";
import {t} from "react-switch-lang";
import BarChart from "../../components/charts/barChart/BarChart";
import ChartFilterButton from "../../components/buttons/chartFilterButton/ChartFilterButton";
import dayjs from "dayjs";

const Home = () => {

    const currDate = new Date();

    const [month, setMonth] = useState(currDate.getMonth() + 1);
    const [type, setType] = useState('expense');

    const {data : reports} = useQuery(
        ['reports'],
        () => dashboardService.getReportData(),{
            enabled : true,
            initialData : []
        }
    );

    const infoCards = [
        {
            title: t('home.info-cards.balance'),
            amount : reports.balance,
            type : 'balance'
        },
        {
            title: t('home.info-cards.incomes'),
            amount : reports.incomes,
            type : 'income'
        },
        {
            title: t('home.info-cards.expenses'),
            amount : reports.expenses,
            type : 'expense'
        }

    ]

    const typeOptions = [
        {
            label : <p onClick={()=>setType('income')}>{t('home.income')}</p>,
            key : 'income',
            value : t('home.income')
        },
        {
            label : <p onClick={()=>setType('expense')}>{t('home.expense')}</p>,
            key : 'expense',
            value : t('home.expense')
        }

    ];

    const [typeLabel, setTypeLabel] = useState(typeOptions[1].value)

    const allMonths = [
        t('home.months.january'),
        t('home.months.february'),
        t('home.months.march'),
        t('home.months.april'),
        t('home.months.may'),
        t('home.months.june'),
        t('home.months.july'),
        t('home.months.august'),
        t('home.months.september'),
        t('home.months.october'),
        t('home.months.november'),
        t('home.buttons.months.december'),
    ];

    const [monthLabel, setMonthLabel] = useState(`${allMonths[dayjs().month()]} ${dayjs().year()}`)

    const currentDate = dayjs();
    const last12dates = [];

    for (let i = 0; i < 12; i++) {
        last12dates.push(allMonths[i] + " " +currentDate.subtract(i, 'month').format('YYYY'));
    }

    const finale = last12dates.map((item, index) =>(
        {
            label : <p onClick={()=>setMonth(index + 1)}>{item}</p>,
            key : item.toString().toLowerCase(),
            value : item.toString().toLowerCase()
        }
    ) )

    return <div>
        <div className={classes['info-cards-container']}>
            {infoCards.map((card, key) => {
                return <InfoCard
                            key={key}
                            title={card?.title}
                            value={card?.amount}
                            use={card?.type}
                        />
            })}
        </div>

        <div className={classes['main']}>
            <div className={classes['filters']}>
                <div>
                    <p className={classes['current-state']}>Trenutno stanje</p>
                </div>
                <div className={classes['filter-buttons']}>
                    <ChartFilterButton options={typeOptions} label={typeLabel} use={'type'}/>
                    <ChartFilterButton options={finale} label={monthLabel} use={'month'}/>
                </div>
            </div>
            <div style={{height:50, width:"80%"}}>
                <hr/>
            </div>
            <div className={classes['chart-container']}>
               <div>
                    <BarChart type={type} month={month} />
               </div>
            </div>
        </div>
    </div>
}

export default Home;