import React from "react";
import classes from "./HorizontalTransactionForm.module.scss";
import RadioField from "../../../../components/formFields/radioField/RadioField";
import InputField from "../../../../components/formFields/inputField/InputField";
import DateField from "../../../../components/formFields/dateField/DateField";
import SelectField from "../../../../components/formFields/selectField/SelectField";
import ButtonAddGeneral from "../../../../components/buttons/buttonAddGeneral/ButtonAddGeneral";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {message} from "antd";

const HorizontalTransactionForm = () => {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        Type : yup.string().trim()
            .required("This field is required!"),
        Date : yup.date()
            .required("This field is required!"),
        Time : yup.string()
            .required("This field is required!"),
        Amount : yup.number()
            .required("This field is required!")
            .min(0, "Something"),
        Description : yup.string().trim()
            .required("This field is required!")
            .min(3, "Description should be at least 3 characters long!")
            .max(100, "Description can not be longer than 100 characters!"),
        Note : yup.string().trim()
            .required("This field is required!")
            .min(3, "Note should be at least 3 characters long!")
            .max(400, "Note can not be longer than 400 characters!"),
        Category : yup.array().of(yup.number().integer()).required("This field is required!")
    })

    const {handleSubmit, control, formState:{errors}}=useForm({resolver: yupResolver(schema)})

    const onSubmit=(data)=>{
        message.success("Transaction added successful!");
        navigate('/');
    }

    const typeOptions=[
        {
            label: 'Expense',
            value: 'expense'
        },
        {
            label: 'Income',
            value: 'income'
        }
    ]


    return <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes['form-container']}>
                    <RadioField option={'Trošak'}/>
                    <RadioField option={'Prihod'}/>
                    <InputField label={'Opis'}
                                use={'transaction'}
                                name={'Description'}
                                control={control}
                                placeholder={'Opis'}
                                error={errors?.Description?.message}
                    />
                    <DateField label={''}
                               name={'Date'}
                               control={control}
                               error={errors?.Date?.message}
                               use={'type-2'}/>
                    <SelectField use={'type-2'}
                                 options={typeOptions}
                                 placeholder={'Prihodi'}
                                 name={'Type'}
                                 control={control}
                                 error={errors?.Type?.message}
                    />
                    <ButtonAddGeneral size={'big'} type={'submit'} onClick={()=>{}}/>
                </div>
            </form>
}

export default HorizontalTransactionForm;