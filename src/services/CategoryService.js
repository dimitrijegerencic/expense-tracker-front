import CategoryModel from "./models/CategoryModel";
import {requestInstance} from "../config/requestInstance";

class CategoryService {

    api = {
        categories: '/categories'
    }

    params = {
        search: 'search='
    }

    getAll(query){
        const queryParam = query?.length > 0 ? `?${this.params.search}${query}` : '';
        return requestInstance.get(`${this.api.categories}${queryParam}`)
            .then(r => r?.data?.data?.map(item => new CategoryModel(item)))
            .catch(err => Promise.reject(err))
    }

}

export const categoryService = new CategoryService();