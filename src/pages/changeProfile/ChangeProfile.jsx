import React from "react";
import classes from "./ChangeProfile.module.scss";
import InputField from "../../components/formFields/inputField/InputField";
import ButtonFormGroup from "../../components/buttons/buttonFormGroup/ButtonFormGroup";
import PasswordField from "../../components/formFields/passwordField/PasswordField";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {useUser} from "../../context/userContext/UserContext";
import {profileService} from "../../services/ProfileService";
import * as yup from 'yup';
import {t} from "react-switch-lang";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {useForm} from "react-hook-form";
import {message} from "antd";
import {useModal} from "../../context/modalContext/ModalContext";
import ChangeImageForm from "./changeImageForm/ChangeImageForm";
import {useNavigate} from "react-router-dom";
import defaultUserImg from "../../img/profile/user-128.png";
import pencilImg from "../../img/button/edit pen.png";

const ChangeProfile = () => {

    const {userData, setUserData} = useUser();
    const queryClient = useQueryClient();
    const {open, close} = useModal();
    const navigate = useNavigate();

    const openImageModal = () => {
        open({
            title : '',
            content: <ChangeImageForm userID={userData?.id} onCancel={()=>close()}/>
        })
    }

    const shema = yup.object().shape({
        name: yup.string().trim().min(3,t('profile.errors.min'), )
            .max(100,t('profile.errors.max')).required(t('profile.errors.required')),
        password: yup.string().min(8,t('profile.errors.min'))
            .max(16,t('profile.errors.max')).required(t('profile.errors.required'))
    })

    const {handleSubmit,control,reset,formState:{errors}} = useForm({resolver:yupResolver(shema)})

    const {data : currentUser} = useQuery(
        ['user', userData?.id],
        () => profileService.getCurrentUserInfo()
            .then(result => {
                reset({
                    name : result?.name,
                    password : result?.password
                })
                setUserData(result);
                return result
            }),
    {
                enabled : true
            }
    )

    const editProfile = useMutation(
        (data) => profileService.editUser(data, userData?.id)
            .then(result => {
                queryClient.invalidateQueries('user', userData?.id)
                setUserData(result);
                message.success('Successfull!')
            })
            .catch(error => {
                console.log(error);
                alert(userData?.id)
                message.error("Error")
            })
    )

    const submitForm = (data) => {
        editProfile.mutate(data);
    }

    return <div>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className={classes['user-form-container']}>
                    <div className={classes['main']}>
                       <div className={classes['title']}>
                           <h1>{t('profile.title')}</h1>
                       </div>
                        <div className={classes['info']}>
                            <div className={classes['user-image']}>
                                <img src={currentUser ? currentUser?.getUserPhoto() : defaultUserImg} alt={''} className={classes['profile-img']}/>
                                <img src={pencilImg} alt={''} onClick={()=>openImageModal()} className={classes['edit-img']}/>
                            </div>
                            <div className={classes['inputs']}>
                               <div>
                                   <label htmlFor={'name-input'}>{t('profile.first-last-name')}</label>
                                   <InputField name={'name'}
                                               use={'profile'}
                                               control={control}
                                               placeholder={'Password'}
                                               error={errors?.name?.message}
                                               id={'name-input'}/>
                               </div>
                                <div>
                                    <label htmlFor={'pass-input'}>{t('profile.password')}</label>
                                    <PasswordField name={'password'}
                                                   use={'profile'}
                                                   control={control}
                                                   error={errors?.password?.message}
                                                   id={'pass-input'}
                                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes['form-buttons']}>
                        <ButtonFormGroup onClick={()=>{navigate('/')}}/>
                    </div>
                </div>
            </form>
    </div>
}

export default ChangeProfile;