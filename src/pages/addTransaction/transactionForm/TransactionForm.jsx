import React from "react";
import classes from "./TransactionForm.module.scss";
import {t} from "react-switch-lang";
import SelectField from "../../../components/formFields/selectField/SelectField";
import DateField from "../../../components/formFields/dateField/DateField";
import TimeField from "../../../components/formFields/timeField/TimeField";
import NumberField from "../../../components/formFields/numberField/NumberField";
import TextAreaField from "../../../components/formFields/textAreaField/TextAreaField";
import {message, Space} from "antd";
import CheckboxField from "../../../components/formFields/checkboxField/CheckboxField";
import ButtonFormGroup from "../../../components/buttons/buttonFormGroup/ButtonFormGroup";
import {useNavigate} from "react-router-dom";
import {useMutation, useQuery, useQueryClient} from "react-query";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {categoryService} from "../../../services/CategoryService";
import {transactionService} from "../../../services/TransactionService";
import dayjs from "dayjs";

const TransactionForm = ({type, id}) => {

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const schema = yup.object().shape({
        type : yup.string().trim()
            .required(t('all-forms-validations.transactions.type-required')),
        date : yup.date()
            .required(t('all-forms-validations.transactions.date-required')),
        time : yup.string()
            .required(t('all-forms-validations.transactions.time-required')),
        amount : yup.number()
            .required(t('all-forms-validations.transactions.amount-required'))
            .min(0, t('all-forms-validations.transactions.amount-min', {number:0})),
        description : yup.string().trim()
            .required(t('all-forms-validations.transactions.description-required'))
            .min(3, t('all-forms-validations.transactions.description-min', {number : 3}))
            .max(100, t('all-forms-validations.transactions.description-max', {number : 100})),
        note : yup.string().trim()
            .min(3, t('all-forms-validations.transactions.note-min', {number : 3}))
            .max(400, t('all-forms-validations.transactions.note-min', {number : 400})),
        categories : yup.array().of(yup.number().integer())
            .required(t('all-forms-validations.transactions.categories-required'))
    })

    const {handleSubmit, reset, control, formState:{errors}}=useForm({resolver: yupResolver(schema)})

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
        () => getCategories(),
        {
            enabled:true,
            initialData:[]
        }
    )

    const addTransaction = useMutation(data => transactionService.addTransaction(data)
        .then(()=>{
            queryClient.invalidateQueries('transactions')
            message.success(t('transactions.add-success'))
            navigate('/transactions-history')
        })
        .catch(()=>{
            message.error("Error occured!")
        })
    )

    const getSelectedTransaction = (id) => {
        transactionService.getSpecificTransaction(id)
            .then(result => {
                reset({
                    id:result?.id,
                    date:dayjs(result?.date),
                    type:result?.type,
                    time:dayjs(result?.time,'HH:mm'),
                    amount:result?.amount,
                    description:result?.description,
                    note:result?.note,
                    categories:result?.categories.map(category => category?.id)
                })
                return result;
            })
            .catch(() => message.error('Did not get info!'))
    }


    const editTransaction = useMutation((data) => transactionService.editTransaction(data)
        .then(() => {
            queryClient.invalidateQueries("transactions")
            message.success(t('transactions.edit-success'))
            navigate('/transactions-history');
        })
        .catch(() => {
            message.error(t('common.form.error'))
        }))

    useQuery(
        ['transaction',id],
        () => getSelectedTransaction(id),
        {enabled: type === 'edit'}
    )

    const submitForm = (data) => {
        if(type==='add'){
            addTransaction.mutate(data);
        }
        else if (type === 'edit'){
            editTransaction.mutate(data);
        }
    }

    return <form onSubmit={handleSubmit(submitForm)}>
            <div className={classes['form-container']}>
                <div className={classes['form-title']}>
                    <h1>{type==='add' ? t('transactions.add-title') : t('transactions.edit-title')}</h1>
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
                                     prefix={t('transactions.form.amount')}
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
                                       placeholder={'(min 3, max 100, optional)'}
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
                <ButtonFormGroup onClick={()=>navigate('/transactions-history')}/>
            </div>
    </form>
}

export default TransactionForm;