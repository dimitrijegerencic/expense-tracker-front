import {requestInstance} from "../config/requestInstance";
import TransactionModel from "./models/TransactionModel";
import {dateFormat} from "./models/TransactionModel";
import dayjs from "dayjs";


const timeFormat = "HH:mm:ss";

class TransactionService {

    api = {
        expenses : '/v1/expenses'
    }

    params = {
        search : 'search=',
        type : 'type=',
        description : 'description=',
        category : 'category_id',
        entry_date : 'entry_date'
    }

    getAll(){
        return requestInstance.get(`${this.api.expenses}`)
            .then(result =>result?.data?.data.map(item => new TransactionModel(item)))
            .catch(error => Promise.reject(error))
    }

    addTransaction(data){
        const formData={
            "type" : data?.type,
            "entry_date" : dayjs(data?.entry_date).format(dateFormat),
            "entry_time" : dayjs(data?.entry_time).format(timeFormat),
            "amount" : data?.amount,
            "description" : data?.description,
            "note" : data?.note ? data?.note : "",
            "categories" : data?.categories
        }
        return requestInstance.post(this.api.expenses,formData)
            .then(result => new TransactionModel(result?.data?.data))
            .catch(error => Promise.reject(error))
    }

    deleteTransaction(id){
        return requestInstance.delete(`${this.api.expenses}/${id}`)
            .then(result => new TransactionModel(result?.data?.data))
            .catch(error => Promise.reject(error))
    }

}

export const transactionService = new TransactionService();