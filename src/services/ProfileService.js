import { requestInstance } from "../config/requestInstance"
import ProfileModel from "./models/ProfileModel";

class ProfileService{

    api = {
        user: '/me',
        change_profile_image : '/v1/change-profile-photo',
        users : '/users'

    }

    getCurrentUserInfo(){
        return requestInstance.post(this.api.user)
            .then(r => new ProfileModel(r?.data))
            .catch(error => Promise.reject(error))
    }

    editUser(data){

        const formData = {
            "name" : data?.name,
            "email" : data?.email,
            "password" : data?.password
        }
        return requestInstance.put(`${this.api.users}/${data?.id}`,formData)
            .then(result=>{console.log(result?.data);return new ProfileModel(result?.data)})
            .catch(error => Promise.reject(error))
    }

}

export const profileService = new ProfileService()