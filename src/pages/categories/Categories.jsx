import React, {useState} from "react";
import "./Categories.scss";
import {Card, message} from "antd";
import ButtonAddGeneral from "../../components/buttons/buttonAddGeneral/ButtonAddGeneral";
import Table from "../../components/tables/Table";
import ButtonTableGroup from "../../components/buttons/buttonTableGroup/ButtonTableGroup";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {categoryService} from "../../services/CategoryService";
import ColorCircle from "../../components/colorCircle/ColorCircle";
import {useModal} from "../../context/modalContext/ModalContext";
import { t } from "react-switch-lang";
import InputField from "../../components/formFields/inputField/InputField";
import RadioField from "../../components/formFields/radioField/RadioField";
import ButtonAddCategory from "../../components/buttons/buttonAddCategory/ButtonAddCategory";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import DeleteForm from "../../components/deleteFrom/DeleteForm";

const Categories = () => {

    const {open, close} = useModal();

    const [formType, setFormType] = useState('add');
    const [categoryID,setCategoryID]=useState(null);

    const openDeleteModal = (type, id) => {
        open({
            title : t('common.modal-content'),
            content : <DeleteForm id={id}
                                  onCancel={close}
                                  type={type}/>
        })
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: t('categories.name'),
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: t('categories.color'),
            dataIndex: 'color',
            key: 'color',
            align: 'center',
            render:(text,record)=>{
                return <ColorCircle color={record?.color}/>
            }
        },
        {
            title: '',
            dataIndex: 'options',
            key: 'options',
            render: (text, record) => <ButtonTableGroup
                onEdit={() => {
                    setCategoryID(record?.id);
                    setFormType('edit');
                    setIsVisible(true);
                    console.log(categoryID);
                    console.log(isVisible)
                }}
                onDelete={() => openDeleteModal('category', record?.id)}
            />

        },
    ];

    const {data:categories} = useQuery(
        ['all-categories'],
        ()=>categoryService.getAll(),
        {
            enabled:true,
            initialData:[]
        }
    )

    const [isVisible, setIsVisible] = useState(false);

    const setFormVisible = () => {
        setIsVisible(true);
        const element1 = document.getElementById("categories-main");
        element1.classList.add("animationOpen");
    }

    const queryClient = useQueryClient();

    const schema = yup.object().shape({
        name: yup.string().trim()
            .required(t('categories.errors.required')),
        color: yup.string().required(t('categories.errors.required'))
    })

    const {handleSubmit, control, formState:{errors}}=useForm({resolver: yupResolver(schema)})

    const addCategory = useMutation(data => categoryService.addCategory(data)
        .then(res=>{
            queryClient.invalidateQueries('all-categories')
            message.success("Category added!")
            setIsVisible(false);
            setFormType('add');
        })
        .catch(err=>{
            message.error("Error occured!")
        })
    )

    useQuery(
        ['category',categoryID],
        () => categoryService.getParticularCategory(categoryID)
            .then(res=>{
                // reset(res);
                return res;
            }),
        {
            enabled: formType === 'edit'
        }
    )

    const editCategory = useMutation(data => categoryService.editCategory(data)
        .then(result => {
            queryClient.invalidateQueries("all-categories")
            message.success("Category edited!")
            setIsVisible(false);
            setFormType('add');
        })
        .catch(error => console.log(error))
    )

    const submitForm = (data) => {
        if (formType === 'add'){
            addCategory.mutate(data)
        }
        else{
            editCategory.mutate({...data, id:categoryID});
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
      <div className={'category-container'}>
          <Card title={<div className={'card-title'} >
                            <div><p>{t('categories.title')}</p></div>
                            <div><ButtonAddGeneral size={'small'} onClick={()=>{setIsVisible(true); setFormType('add')}}/></div>
                        </div>}
                        style={{width:650, height:449}}
                        id={"categories-main"}
                        className={'card-category'}
          >
            <Table data={categories} columns={columns} size={200}/>
          </Card>
          {isVisible && (
              <div id={"hidden-form"}>
                  <Card title={formType==='add' ? t('categories.title') : 'Izmijeni'} className={'category-form-container'}>
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
                              <ButtonAddCategory label={t('categories.add')} onClick={() => {}}/>
                          </div>
                      </form>
                  </Card>
              </div>
          )}
      </div>
    </>
}

export default Categories;