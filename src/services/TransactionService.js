import {requestInstance} from "../config/requestInstance";
import TransactionModel from "./models/TransactionModel";
import dayjs from "dayjs";

class TransactionService {

    api = {
        expenses : '/v1/expenses'
    }

    params = {
        search : 'search=',
        type : 'type=',
        description : 'description=',
        category : 'category_id=',
        entry_date : 'entry_date='
    }

    getAll(type, description, categories, date){
        const typeParam = type.length > 0 ? `?${this.params.type}${type}` : '';
        const descParam = description.length > 0
            ? (typeParam ? `&${this.params.description}${description}`
                : `?${this.params.description}${description}`)
            : '';
        const multiCategoryParam = categories
            ? categories.map((category, index, array)=>{
                return (((typeParam || descParam) || array.indexOf(category)!==0)
                    ? `&${this.params.category}${category}` : `?${this.params.category}${category}`)
            })
            : '';
        const categoryParam = multiCategoryParam ? multiCategoryParam.join(''): '';
        const dateParam = date.length>0
            ? (((typeParam || descParam) || categoryParam) ? `&${this.params.date}${date}`
                : `?${this.params.date}${date}`)
            : '';
        return requestInstance.get
        (`${this.api.expenses}${typeParam}${descParam}${categoryParam}${dateParam}`)
            .then(result =>
                result?.data?.data.map(item => new TransactionModel(item)))
            .catch(error =>
                Promise.reject(error))

    }

    addTransaction(data){
        const formData={
            "type" : data?.type,
            "entry_date" : dayjs(data?.date).format('YYYY-MM-DD'),
            "entry_time" : dayjs(data?.time).format('HH:mm:ss'),
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

    getSpecificTransaction(id){
        return requestInstance.get(`${this.api.expenses}/${id}`)
            .then(res=>new TransactionModel(res?.data?.data))
            .catch(err=>Promise.reject(err))
    }

    editTransaction(data){
        const formData = {
            "type" : data?.type,
            "entry_date" : dayjs(data?.entry_date).format('YYYY-MM-DD'),
            "entry_time" : dayjs(data?.entry_time).format('HH:mm:ss'),
            "amount" : data?.amount,
            "description" : data?.description,
            "note" : data?.note ? data?.note : "",
            "categories" : data?.categories
        }
        return requestInstance.put(`${this.api.expenses}/${data?.id}`,formData)
            .then(res=>new TransactionModel(res?.data?.data))
            .catch(err=>Promise.reject(err))
    }

}

export const transactionService = new TransactionService();