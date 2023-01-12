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

    const currentDate = new Date();
    const [month, setMonth] = useState(currentDate.getMonth() + 1);
    const [type, setType] = useState("expense");

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
            label : <p onClick={()=>setType("income")}>{t('home.income')}</p>,
            key : 'income',
            value : t('home.income')
        },
        {
            label : <p onClick={()=>setType("expense")}>{t('home.expense')}</p>,
            key : 'expense',
            value : t('home.expense')
        }

    ];

    const [typeLabel] = useState(typeOptions[1].value)

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

    const [monthLabel] = useState(`${allMonths[dayjs().month()]} ${dayjs().year()}`)

    const previousMonths = [];

    for (let i = 0; i < 12; i++) {
        const previousMonth = new Date(currentDate);
        previousMonth.setMonth(currentDate.getMonth() - i);
        const month = previousMonth.getMonth() + 1;
        previousMonths.push(month);
    }

    const monthOptions = previousMonths.map((month, index) => {

        const label = <p onClick={() => setMonth(month)}>
                            { currentDate.getMonth() + 1 > index ?
                                allMonths[month - 1] + " " + currentDate.getFullYear()
                                :
                                allMonths[month - 1] + " " + (currentDate.getFullYear() - 1)
                            }
                      </p>;
        const key = `month_${month}`;

        return { value: month.toString().toLowerCase(), label, key };

    });

    return <div className={classes['home']}>
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
                    <div className={classes['current-state']}>
                        <p>{t('home.title')}</p>
                    </div>
                    <div className={classes['filter-buttons']}>
                        <ChartFilterButton options={typeOptions} label={typeLabel}/>
                        <ChartFilterButton options={monthOptions} label={monthLabel}/>
                    </div>
                </div>
                <div style={{height:50, width:"100%"}}>
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