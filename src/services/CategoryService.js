import CategoryModel from "./models/CategoryModel";
import {requestInstance} from "../config/requestInstance";

class CategoryService {

    api = {
        categories: '/v1/categories'
    }

    params = {
        search: 'search='
    }

    getAll(){
        return requestInstance.get(this.api.categories)
            .then(r => r?.data?.data?.map(item => new CategoryModel(item)))
            .catch(err => Promise.reject(err))
    }

    addCategory(data){
        const formData = {
            "name" : data?.name,
            "color" : data?.color
        }
        return requestInstance.post(this.api.categories,formData)
            .then(res => new CategoryModel(res?.data?.data))
            .catch(err => Promise.reject(err))
    }

    editCategory(data){
        const formData = {
            "name" : data?.name,
            "color" : data?.color
        }
        return requestInstance.put(`${this.api.categories}/${data?.id}`,formData)
                .then(result => new CategoryModel(result?.data?.data))
                .catch(error => Promise.reject(error))

    }

    deleteCategory(id){
        return requestInstance.delete(`${this.api.categories}/${id}`)
            .then(result => new CategoryModel(result?.data?.data))
            .catch(error => Promise.reject(error))
    }

    getParticularCategory(id){
        return requestInstance.get(`${this.api.categories}/${id}`)
            .then(result => new CategoryModel(result?.data?.data))
            .catch(err => Promise.reject(err))
    }


}

export const categoryService = new CategoryService();