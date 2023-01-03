import React from "react";
import "./CategoryForm.scss";
import {t} from "react-switch-lang";
import InputField from "../../../components/formFields/inputField/InputField";
import RadioField from "../../../components/formFields/radioField/RadioField";
import ButtonAddCategory from "../../../components/buttons/buttonAddCategory/ButtonAddCategory";
import {Card, message} from "antd";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {categoryService} from "../../../services/CategoryService";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {motion} from "framer-motion";

const CategoryForm = ({type, id, onClick}) => {

    const queryClient = useQueryClient();

    const schema = yup.object().shape({
        name: yup.string().trim()
            .required(t('categories.errors.required')),
        color: yup.string().required(t('categories.errors.required'))
    })

    const {handleSubmit, control, reset, formState:{errors}}=useForm({resolver: yupResolver(schema)})

    const addCategory = useMutation(data => categoryService.addCategory(data)
        .then(res=>{
            queryClient.invalidateQueries('all-categories')
            message.success(t('categories.add-success'))
        })
        .catch(err=>{
            message.error(t('common.form.error'))
        })
    )

    const getSelectedCategory = (id) => {
        categoryService.getParticularCategory(id)
            .then(result => {
                reset({
                    id:result?.id,
                    name:result?.name,
                    color:result?.color
                })
                return result;
            })
            .catch(()=>message.error('Did not get info!'))
    }

    const editCategory = useMutation((data) => categoryService.editCategory(data)
        .then(result => {
            queryClient.invalidateQueries('all-categories')
            message.success(t('categories.edit-success'))
            onClick()
        })
        .catch(()=>{
            message.error(t('common.form.error'))
        })
    )

    useQuery(
        ['category',id],
        () => getSelectedCategory(id),
        {enabled: type === 'edit'}
    )


    const submitForm = (data) => {
        if (type === 'add'){
            addCategory.mutate(data)
        }
        else{
            editCategory.mutate(data);
        }
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

    return <>
        <motion.div
            initial={{scale : 0}}
            animate={{rotate : 360, scale : 1}}
            transition={{
                type:"spring",
                stiffness : 140,
                damping : 20
            }}
        >
            <Card title={type==='add' ? t('categories.add-title') : t('categories.edit-title')}
                  className={'category-form-container'}>
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className={'content'}>
                        <InputField label={''}
                                    name="name"
                                    control={control}
                                    placeholder={t('categories.placeholder')}
                                    error={errors?.name?.message}
                                    use={'category'}
                        />
                        <div className={'colors'}>
                            <p>{t('categories.color')}</p>
                            <RadioField name="color"
                                        use={'categories'}
                                        options={colorOptions}
                                        control={control}
                                        error={errors?.color?.message}
                            />
                        </div>
                    </div>
                    <div className={'button-section'}>
                        <ButtonAddCategory
                            label={type==='add' ? t('categories.add') : t('categories.edit')}
                            onClick={() => {{}setTimeout(onClick, 1000)}}/>
                    </div>
                </form>
            </Card>

        </motion.div>

    </>
}

export default CategoryForm;