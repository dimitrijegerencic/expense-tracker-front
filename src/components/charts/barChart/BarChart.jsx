import React from "react";
import classes from "./BarChart.module.scss";
import {useQuery} from "react-query";
import {dashboardService} from "../../../services/DashboardService";
import {Bar, BarChart as Chart, CartesianGrid, Cell, XAxis, YAxis} from "recharts";
import {Tooltip} from "antd";
import {Legend} from "chart.js";
import {t} from "react-switch-lang";
import PropTypes from "prop-types";

const BarChart = ({type, month}) => {

    const {data : chartReport} = useQuery(
        ['chart-data', type, month],
        () => dashboardService.getChartData(type, month),{
            enabled : true,
            initialData : []
        }
    );

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return <div>
        {chartReport.length !== 0 ?
            <Chart
                width={1176}
                height={571}
                data={chartReport.sort((a, b) => b.total - a.total)}
            >
                <CartesianGrid strokeDasharray="0" stroke="#E1E1E1" />
                <XAxis dataKey={'name'}
                       fontSize={15}
                       fontFamily={'Montserrat'}
                       stroke={'black'}
                       axisLine={{ stroke: '#f5f5f5' }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill= {getRandomColor()} barSize={80} radius={[10, 10, 0, 0]}>
                    {chartReport.map((report, index) => (
                        <Cell key={`bar-${index}`} dataKey="total" fill={getRandomColor()} />
                    ))}
                </Bar>
            </Chart>
            :
           <div className={classes['no-data-container']}>
               <h1 className={classes['title']}>{t('home.chart.no-data')}</h1>
           </div>
        }
    </div>
}

BarChart.propTypes = {
    type : PropTypes.string.isRequired
}

export default BarChart;