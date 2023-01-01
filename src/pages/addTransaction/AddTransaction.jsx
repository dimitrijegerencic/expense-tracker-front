import React from "react";
import "./AddTransaction.module.scss";
import {t} from "react-switch-lang";
import SelectField from "../../components/formFields/selectField/SelectField";
import DateField from "../../components/formFields/dateField/DateField";
import TimeField from "../../components/formFields/timeField/TimeField";
import NumberField from "../../components/formFields/numberField/NumberField";
import TextAreaField from "../../components/formFields/textAreaField/TextAreaField";
import {message, Space} from "antd";
import CheckboxField from "../../components/formFields/checkboxField/CheckboxField";
import ButtonFormGroup from "../../components/buttons/buttonFormGroup/ButtonFormGroup";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {categoryService} from "../../services/CategoryService";
import {useMutation, useQuery, useQueryClient} from "react-query";
import classes from "./AddTransaction.module.scss";
import {transactionService} from "../../services/TransactionService";
const AddTransaction = () => {

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const schema = yup.object().shape({
        type : yup.string().trim()
            .required("This field is required!"),
        date : yup.date()
            .required("This field is required!"),
        time : yup.string()
            .required("This field is required!"),
        amount : yup.number()
            .required("This field is required!")
            .min(0, "Something"),
        description : yup.string().trim()
            .required("This field is required!")
            .min(3, "Description should be at least 3 characters long!")
            .max(100, "Description can not be longer than 100 characters!"),
        note : yup.string().trim()
            .required("This field is required!")
            .min(3, "Note should be at least 3 characters long!")
            .max(400, "Note can not be longer than 400 characters!"),
        categories : yup.array().of(yup.number().integer()).required("This field is required!")
    })

    const {handleSubmit, control, formState:{errors}}=useForm({resolver: yupResolver(schema)})

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

    const getCategories=()=>{
        return categoryService.getAll()
            .then(res=>{
                return res.map(category => {
                    return {
                        label: category?.name,
                        value: category?.id
                    }
                })
            })
    }

    const {data:categories} = useQuery(
        ['categories'],
        ()=>getCategories(),
        {
            enabled:true,
            initialData:[]
        }
    )

    const addTransaction = useMutation(data => transactionService.addTransaction(data)
        .then(result => {
            queryClient.invalidateQueries('expenses')
            message.success('Expense added!')
            navigate('/transactions-history')
        })
        .catch(err => {
            message.error('Error occured!')
        })
    )

    const submitForm = (data) => {
        console.log(data);
        addTransaction.mutate(data);
    }

    return <>
        <form onSubmit={handleSubmit(submitForm)}>
            <div className={classes['main']}>
                <div className={classes['form-container']}>
                    <div className={classes['form-title']}>
                        <h1>{t('transactions.title')}</h1>
                    </div>
                    <div className={classes['boxes']}>
                        <div className={classes['left']}>
                            <SelectField use={'type-1'}
                                         options={typeOptions}
                                         placeholder={t('transactions.form.type')}
                                         name={'type'}
                                         control={control}
                                         error={errors?.type?.message}
                            />
                            <div className={classes['date-time-container']}>
                                <DateField label={''}
                                           name={'date'}
                                           control={control}
                                           error={errors?.date?.message}
                                           use={'type-1'}/>
                                <TimeField label={''}
                                           name={'time'}
                                           control={control}
                                           placeholder={''}
                                           error={errors?.time?.message}
                                />
                            </div>
                            <NumberField label={''}
                                         name={'amount'}
                                         control={control}
                                         error={errors?.amount?.message}
                                         placeholder={''}
                                         prefix={'Iznos'}
                                         step='0.01'
                            />
                            <label htmlFor="{'descrp'}">{t('transactions.form.description')}</label>
                            <TextAreaField label={''}
                                           name={'description'}
                                           control={control}
                                           placeholder={'(min 3, max 100, required)'}
                                           error={errors?.description?.message}
                            />
                            <label htmlFor="{'note'}">{t('transactions.form.note')}</label>
                            <TextAreaField label={''}
                                           name={'note'}
                                           control={control}
                                           placeholder={'(min 3, max 100, required)'}
                                           error={errors?.note?.message}
                                           type={'note'}
                            />
                        </div>
                        <div className={classes['right']}>
                            <div className={classes['categories-container']}>
                                <h5>{t('transactions.form.category')}</h5>
                                <hr/>
                                <div className={classes['category-options']}>
                                    <Space direction={'vertical'}>
                                        <CheckboxField
                                            control={control}
                                            error={errors?.categories?.message}
                                            name={'categories'}
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

export default AddTransaction;