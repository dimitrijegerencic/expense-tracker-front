import React from "react";
import "./CategoryForm.scss";
import {Card} from "antd";
import InputField from "../../../components/formFields/inputField/InputField";
import ButtonAddCategory from "../../../components/buttons/buttonAddCategory/ButtonAddCategory";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {useMutation, useQueryClient} from "react-query";
import {categoryService} from "../../../services/CategoryService";
import {message} from "antd";
import RadioField from "../../../components/formFields/radioField/RadioField";

const CategoryForm = () => {

    const queryClient = useQueryClient();

    const schema = yup.object().shape({
        name: yup.string().trim()
            .required('This field is required!'),
        color: yup.string().required('This field is required!')
    })

    const {handleSubmit, control, formState:{errors}}=useForm({resolver: yupResolver(schema)})

    const addCategory = useMutation(data => categoryService.addCategory(data)
        .then(res=>{
            queryClient.invalidateQueries('all-categories')
            message.success("Category added!")
        })
        .catch(err=>{
            message.error("Error occured!")
        })
    )

    const submitForm = (data) => {
        addCategory.mutate(data)
    }

    const colorOptions = [
        {value:'#258FDC',label:'#258FDC'},
        {value:'#84C57A',label:'#84C57A'},
        {value:'#FFA800',label:'#FFA800'},
        {value:'#C2F1FB',label:'#C2F1FB'},
        {value:'#DC6788',label:'#DC6788'},
        {value:'#5E72EB',label:'#5E72EB'},
        {value:'#F52929',label:'#F52929'},
        {value:'#D946EF',label:'#D946EF'},
        {value:'#10B981',label:'#10B981'},
        {value:'#84CC16',label:'#84CC16'},
        {value:'#EC4899',label:'#EC4899'},
        {value:'#7628DA',label:'#7628DA'}
    ]

    return <Card title={'Nova kategorija'} className={'category-form-container'}>
        <form onSubmit={handleSubmit(submitForm)}>
            <div className={'content'}>
                <InputField label={''}
                            name="name"
                            control={control}
                            placeholder={'Kategorija'}
                            error={errors?.name?.message}
                            use={'category'}
                />
                <div className={'colors'}>
                    <p>Boja</p>
                    <RadioField
                        name="color"
                        use={'categories'}
                        options={colorOptions}
                        control={control}
                        error={errors?.color?.message}
                    />
                </div>
            </div>
            <div className={'button-section'}>
                <ButtonAddCategory label={'dodaj'} onClick={()=>{}}/>
            </div>
        </form>
            </Card>
}

export default CategoryForm;