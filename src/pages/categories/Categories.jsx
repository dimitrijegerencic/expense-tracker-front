import React, {useEffect, useState} from "react";
import "./Categories.scss";
import {Card, Table} from "antd";
import ButtonAddGeneral from "../../components/buttons/buttonAddGeneral/ButtonAddGeneral";
import ButtonTableGroup from "../../components/buttons/buttonTableGroup/ButtonTableGroup";
import {useQuery} from "react-query";
import {categoryService} from "../../services/CategoryService";
import ColorCircle from "../../components/colorCircle/ColorCircle";
import {useModal} from "../../context/modalContext/ModalContext";
import { t } from "react-switch-lang";
import DeleteForm from "../../components/deleteFrom/DeleteForm";
import CategoryForm from "./categoryForm/CategoryForm";
import {AnimatePresence, motion} from "framer-motion";
import {useSpring, animated} from "react-spring";

const Categories = () => {

    const {open, close} = useModal();

    const [categoryID,setCategoryID] = useState(null);

    const [isEditVisible, setIsEditVisible] = useState(false);
    const [isAddVisible, setIsAddVisible] = useState(false);

    const [cardWidth, setCardWidth] = useSpring(()=>({ width : '80%'}))

    const reduceWidth = () => {
        setCardWidth({ width: '40%', config: { duration: 1000 } })
    }

    const increaseWidth = () => {
        setCardWidth({ width: '80%', config: { duration: 1000 } })
    }

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
            dataIndex: '',
            key: '',
            render: (text, record) => <ButtonTableGroup
                onEdit={() => {
                    setCategoryID(record?.id);
                    setEditFormVisible();
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

    const setAddFormVisible = () => {
        reduceWidth();
        setTimeout(setIsAddVisible(true), 10000);
    }

    const setEditFormVisible = () => {
        reduceWidth();
        setTimeout(setIsEditVisible(true), 3000);
    }

    return <>
      <div className={'category-container'}>
          <animated.div style={cardWidth}>
              <Card title={<div className={'card-title'} >
                  <div className={'start'}>{t('categories.add-title')}</div>
                  <div className={'end'} title={t('common.open')}><ButtonAddGeneral
                      size={'small'}
                      onClick={()=>{setAddFormVisible(); setIsEditVisible(false);}}/></div>
              </div>}
                    className={'card-category'}
                    style={{height:449}}
              >
                  <Table dataSource={categories}
                         columns={columns}
                         scroll={{y : 250}}
                         pagination={false}
                         rowKey={record => record.id}
                         className={'category-table'}
                  />
              </Card>
          </animated.div>
          <AnimatePresence>
              {isAddVisible && (
                  <motion.div initial={{scale : 0}}
                              animate={{rotate : 360, scale : 1}}
                              exit={{
                                x: '+200%',
                                transition: { duration: 1 },
                  }}>
                      <CategoryForm type={'add'}
                                    onClick={()=>{setIsAddVisible(false);setTimeout(increaseWidth, 1000)}}
                                    onClose={()=>{setIsAddVisible(false);setTimeout(increaseWidth, 1000)}}
                      />
                  </motion.div>
              )}
          </AnimatePresence>
          <AnimatePresence>
              {isEditVisible && (
                  <motion.div initial={{scale : 0}}
                              animate={{rotate : 360, scale : 1}}
                              exit={{
                                  x: '+200%',
                                  transition: { duration: 1 },
                              }}>
                      <CategoryForm type={'edit'} onClick={()=>{setIsEditVisible(false); setTimeout(increaseWidth, 1000)}}
                                    id={categoryID}
                                    onClose={()=>{setIsEditVisible(false);setTimeout(increaseWidth, 1000)}}/>
                  </motion.div>
              )}
          </AnimatePresence>
      </div>
    </>
}

export default Categories;