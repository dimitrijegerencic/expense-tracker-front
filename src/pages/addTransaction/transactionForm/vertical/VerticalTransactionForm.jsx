import React from "react";
import classes from "./VerticalTransactionForm.module.scss";
import SelectField from "../../../../components/formFields/selectField/SelectField";
import DateField from "../../../../components/formFields/dateField/DateField";
import TimeField from "../../../../components/formFields/timeField/TimeField";
import TextAreaField from "../../../../components/formFields/textAreaField/TextAreaField";
import {message, Space} from "antd";
import CheckboxField from "../../../../components/formFields/checkboxField/CheckboxField";
import ButtonFormGroup from "../../../../components/buttons/buttonFormGroup/ButtonFormGroup";
import {useNavigate} from "react-router-dom";
import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import NumberField from "../../../../components/formFields/numberField/NumberField";

const VerticalTransactionForm = () => {

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

    const categories = ['Kategorija 1', 'Kategorija 2', 'Kategorija 3'];


    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes['main']}>
                <div className={classes['form-container']}>
                    <div className={classes['form-title']}>
                        <h1>Dodaj transakciju</h1>
                    </div>
                    <div className={classes['boxes']}>
                        <div className={classes['left']}>
                            <SelectField use={'type-1'}
                                         options={typeOptions}
                                         placeholder={'Prihodi'}
                                         name={'Type'}
                                         control={control}
                                         error={errors?.Type?.message}
                            />
                            <div className={classes['date-time-container']}>
                                <DateField label={''}
                                           name={'Date'}
                                           control={control}
                                           error={errors?.Date?.message}
                                           use={'type-1'}/>
                                <TimeField label={''}
                                           name={'Time'}
                                           control={control}
                                           placeholder={''}
                                           error={errors?.Time?.message}
                                />
                            </div>
                            <NumberField label={''}
                                         name={'Amount'}
                                         control={control}
                                         error={errors?.Amount?.message}
                                         placeholder={''}
                                         prefix={'Iznos'}
                                         step='0.01'
                            />
                            <label htmlFor="{'descrp'}">Kratak opis</label>
                            <TextAreaField label={''}
                                           name={'Description'}
                                           control={control}
                                           placeholder={'(min 3, max 100, required)'}
                                           error={errors?.Description?.message}
                            />
                            <label htmlFor="{'note'}">Bilješka</label>
                            <TextAreaField label={''}
                                           name={'Note'}
                                           control={control}
                                           placeholder={'(min 3, max 100, required)'}
                                           error={errors?.Note?.message}
                                           type={'note'}
                            />
                        </div>
                        <div className={classes['right']}>
                            <div className={classes['categories-container']}>
                                <h5>Kategorija</h5>
                                <hr/>
                                <div className={classes['category-options']}>
                                    <Space direction={'vertical'}>
                                        <CheckboxField
                                            control={control}
                                            error={errors?.category?.message}
                                            name={'Category'}
                                            options={categories}
                                        />
                                    </Space>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes['form-buttons']}>
                    <ButtonFormGroup onClick={()=>navigate('/')}/>
                </div>
            </div>
        </form>

    </>
}

export default VerticalTransactionForm;