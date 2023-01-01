import {requestInstance} from "../config/requestInstance";

class DashboardService {

    api = {
        report : '/v1/incomes-expenses-report',
        chart : '/v1/bar-chart-report'
    }

    params = {
        type : 'type=',
        month : 'month='
    }

    getReportData(){
        return requestInstance.get(this.api.report)
            .then(result => result?.data)
            .catch(error => Promise.reject(error))
    }

    getChartData(type,month){
        return requestInstance.get(`${this.api.chart}?${this.params.type}${type}&${this.params.month}${month}`)
            .then(result => result?.data)
            .catch(error => Promise.reject(error))
    }


}

export const dashboardService = new DashboardService();