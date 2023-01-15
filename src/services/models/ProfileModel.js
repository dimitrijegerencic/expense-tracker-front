
class ProfileModel{

    constructor(data){
        this.id = data?.id;
        this.name = data?.name;
        this.email = data?.email;
        this.password = data?.password;
        this.profilePhoto = data?.profile_photo;
        this.profilePhotoPath = data?.profile_photo_path;
    }

    getUserPhoto(){
        if (this?.profilePhoto.includes('img'))
            return this?.profilePhotoPath;
        else
            return `https://expense-tracker.amplitudo.me/storage/${this.profilePhoto}`;
    }
    
}

export default ProfileModel;