import { requestInstance } from "../config/requestInstance"
import ProfileModel from "./models/ProfileModel";

class ProfileService{

    api = {
        user: '/me'
    }

    getCurrentUserInfo(){
        return requestInstance.post(this.api.user)
            .then(r => new ProfileModel(r?.data))
            .catch(error => Promise.reject(error))
    }


}

export const profileService = new ProfileService()