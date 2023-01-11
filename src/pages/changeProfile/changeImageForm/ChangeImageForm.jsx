import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import "./ChangeImageForm.scss";
import {useForm} from 'react-hook-form';
import {t} from 'react-switch-lang';
import * as yup from 'yup';
import {useMutation, useQueryClient} from 'react-query';
import {profileService} from '../../../services/ProfileService';
import {useUser} from "../../../context/userContext/UserContext";
import ButtonAddImage from "../../../components/buttons/buttonAddImage/ButtonAddImage";
import ButtonFormGroup from "../../../components/buttons/buttonFormGroup/ButtonFormGroup";
import {message} from "antd";

const ChangeImageForm=({userID, onCancel})=>{

    const [profilePhoto, setProfilePhoto] = useState(null)
    const queryClient = useQueryClient();
    const {setUserData} = useUser();

    const changePhoto = useMutation(
        (data) => profileService.changeProfilePhoto(data)
            .then(result => {
                queryClient.invalidateQueries('user', userID)
                setUserData(result)
                onCancel();
            })
            .catch(() => {
                message.error(t('sign-up.fail'))
            })
    )

    const supportedImageFormats = ['jpg', 'jpeg', 'png', 'svg'];

    const getImageExtension = (image) => {
        const n = image.lastIndexOf('.')
        return image.substring(n + 1);
    }

    const schema = yup.object().shape({
        image: yup
            .mixed()
            .required(t('profile.errors.required'))
            .test('fileFormat',
                (t('profile.errors.format')),
                (value) => {return value && supportedImageFormats.includes(getImageExtension(value))})
    });

    const {handleSubmit,control,formState:{errors}} = useForm({resolver:yupResolver(schema)})

    const submitForm = () =>{
        changePhoto.mutate(profilePhoto)
    }

    return(
        <form onSubmit={handleSubmit(submitForm)}>
            <div className={'change-image-container'}>
                <ButtonAddImage
                    control={control}
                    error={errors?.image?.message}
                    name={'image'}
                    addImageClick={(e)=>setProfilePhoto(e.target.files[0])}
                />
                <div className='__buttons'>
                    <ButtonFormGroup onClick={()=>onCancel()}/>
                </div>
            </div>
        </form>
    )
}

export default ChangeImageForm;