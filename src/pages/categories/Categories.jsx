import React, {useEffect, useState} from "react";
import "./Categories.scss";
import {Card} from "antd";
import ButtonAddGeneral from "../../components/buttons/buttonAddGeneral/ButtonAddGeneral";
import Table from "../../components/tables/Table";
import ButtonTableGroup from "../../components/buttons/buttonTableGroup/ButtonTableGroup";
import {useQuery} from "react-query";
import {categoryService} from "../../services/CategoryService";
import ColorCircle from "../../components/colorCircle/ColorCircle";
import {useModal} from "../../context/modalContext/ModalContext";
import { t } from "react-switch-lang";
import DeleteForm from "../../components/deleteFrom/DeleteForm";
import CategoryForm from "./categoryForm/CategoryForm";

const Categories = () => {

    const {open, close} = useModal();

    const [categoryID,setCategoryID] = useState(null);

    const [isEditVisible, setIsEditVisible] = useState(false);
    const [isAddVisible, setIsAddVisible] = useState(false);


    useEffect(()=>{
        setCategoryID(categoryID)
    }, [categoryID])

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
                   setIsEditVisible(true); setCategoryID(record?.id);
                   setIsAddVisible(false);
                }}
                onDelete={() => openDeleteModal('category', record?.id)}
            />

        },
    ];

    const {data:categories} = useQuery(
        ['all-categories'],
        ()=> categoryService.getAll(),
        {
            enabled:true,
            initialData:[]
        }
    )

    const setFormVisible = () => {
        setIsAddVisible(true);
        const element1 = document.getElementById("categories-main");
        element1.classList.add("animationOpen");
    }

    return <>
      <div className={'category-container'}>
          <Card title={<div className={'card-title'} >
                            <div><p>{t('categories.add-title')}</p></div>
                            <div><ButtonAddGeneral
                                size={'small'}
                                onClick={()=>{setFormVisible(); setIsEditVisible(false);}}/></div>
                        </div>}
                        style={{width:650, height:449}}
                        id={"categories-main"}
                        className={'card-category'}
          >
            <Table data={categories} columns={columns} size={200}/>
          </Card>
          {isAddVisible && (
              <div id={"hidden-form"}>
                <CategoryForm type={'add'} onClick={()=>setIsAddVisible(false)}/>
              </div>
          )}
          {isEditVisible && (
              <div id={"hidden-form"}>
                  <CategoryForm type={'edit'} onClick={()=>setIsEditVisible(false)} id={categoryID}/>
              </div>
          )}
      </div>
    </>
}

export default Categories;