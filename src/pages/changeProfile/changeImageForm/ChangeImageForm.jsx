import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import "./ChangeImageForm.scss";
import { useForm } from 'react-hook-form';
import { t } from 'react-switch-lang';
import * as yup from 'yup';
import { useMutation, useQueryClient } from 'react-query';
import { profileService } from '../../../services/ProfileService';
import {useUser} from "../../../context/userContext/UserContext";
import ButtonAddImage from "../../../components/buttons/buttonAddImage/ButtonAddImage";
import ButtonFormGroup from "../../../components/buttons/buttonFormGroup/ButtonFormGroup";

const ChangeImageForm=({userID, onCancel})=>{

    const [profilePhoto, setProfilePhoto] = useState(null)
    const queryClient=useQueryClient();
    const {setUserData} = useUser();

    const changePhoto = useMutation(
        (data)=>profileService.changeProfilePhoto(data)
            .then(res=>{
                queryClient.invalidateQueries('user', userID)
                setUserData(res)
                onCancel();
            })
            .catch(err=>{
                console.log(err);
                alert("Error")
            })
    )

    const schema = yup.object().shape({
        image: yup
            .mixed()
            .required(t('profile.errors.required'))

    });

    const {handleSubmit,control,formState:{errors}} = useForm({resolver:yupResolver(schema)})

    const submitForm=()=>{
        changePhoto.mutate(profilePhoto)
    }

    return(
        <form onSubmit={handleSubmit(submitForm)}>
            <div className={'change-image-container'}>
                <ButtonAddImage
                    control={control}
                    error={errors?.image?.message}
                    name='image'
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