import {requestInstance} from '../config/requestInstance';
import AuthModel from "./models/AuthModel";

class AuthService{

    api = {
        login: '/login',
        logout: '/logout',
        sign_up: '/v1/users'
    }

    login(email, password){

        const formData = {
            "email": email,
            "password": password
        };

        return requestInstance.post(this.api.login, formData, {
            headers: {
                "Authorization": "undefined"
            }
        })
            .then(r => {
                return new AuthModel(r.data)
            })
            .catch(err => Promise.reject(err))
    }

    logout(){
        return requestInstance.post(this.api.logout)
            .then(res=>new AuthModel(res.data))
            .catch(err=>Promise.reject(err))
    }

    signUp(data){
        const formData = {
            "name" : data?.name,
            "email" : data?.email,
            "password" : data?.password,
        }
        return requestInstance.post(this.api.sign_up, formData)
            .then(result => new AuthModel(result?.data?.data))
            .catch(error => Promise.reject(error))
    }

}

export const authService = new AuthService();