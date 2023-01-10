import { requestInstance } from "../config/requestInstance"
import ProfileModel from "./models/ProfileModel";

class ProfileService{

    api = {
        user: '/me',
        change_profile_image : '/v1/change-profile-photo',
        edit_user : '/v1/users'

    }

    getCurrentUserInfo(){
        return requestInstance.post(this.api.user)
            .then(r => new ProfileModel(r?.data))
            .catch(error => Promise.reject(error))
    }

    changeProfilePhoto(data){
        const formData = {
            "photo" : data
        }
        return requestInstance.post(this.api.change_profile_image, formData,{
            headers : {
                "content-type" : "multipart/form-data",
            }
        })
            .then(result => new ProfileModel(result?.data?.data))
            .catch(error => Promise.reject(error))
    }


    editUser(data, id){

        const formData = {
            "name" : data?.name,
            "email" : data?.email,
            "password" : data?.password
        }
        return requestInstance.put(`${this.api.edit_user}/${id}`,formData)
            .then(result=> new ProfileModel(result?.data))
            .catch(error => Promise.reject(error))
    }

}

export const profileService = new ProfileService()