import React, {useState} from "react";
import "./Categories.scss";
import {Card} from "antd";
import ButtonAddGeneral from "../../components/buttons/buttonAddGeneral/ButtonAddGeneral";
import Table from "../../components/tables/Table";
import ButtonTableGroup from "../../components/buttons/buttonTableGroup/ButtonTableGroup";
import CategoryForm from "./categoryForm/CategoryForm";
import {useQuery} from "react-query";
import {categoryService} from "../../services/CategoryService";
import ColorCircle from "../../components/colorCircle/ColorCircle";
import {useModal} from "../../context/modalContext/ModalContext";

const Categories = () => {

    const {open, close} = useModal();

    const openCategoryModal = ({type}) => {
        open({
            title : type==='delete' ? 'Confirm delete' : 'Placeholder',
            content : <div><p>Are you sure you want to delete?</p></div>
        })
    }

    const openVehicleModal = (type, id = null) => {
        open({
            title: 'Bezveze radi viseee',
            content: <h1>RADI VISE AJDE</h1>
        })
    }

    const columns = [

        {
            title: 'Naziv kategorije',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Boja',
            dataIndex: 'color',
            key: 'color',
            align: 'center',
            render:(text,record)=>{
                return <ColorCircle color={record?.color}/>
            }
        },
        {
            title: '',
            dataIndex: 'x',
            key: 'x',
            render: (text, record) => <ButtonTableGroup
                onEdit={() => {
                    console.log("Edit")
                }}
                onDelete={() => {
                    openVehicleModal("delete", record?.id)
                }}
            />

        },
    ];

    const {data:categories}=useQuery(
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

    return <>
      <div className={'category-container'}>
          <Card title={<div className={'card-title'} >
                            <div><p>Dodaj kategoriju</p></div>
                            <div><ButtonAddGeneral size={'small'} onClick={()=>setFormVisible()}/></div>
                        </div>}
                        style={{width:650, height:449}}
                        id={"categories-main"}
                        className={'card-category'}
          >
            <Table data={categories} columns={columns} size={200}/>
          </Card>
          {isVisible && (
              <div id={"hidden-form"}>
                <CategoryForm/>
              </div>
          )}
      </div>
    </>
}

export default Categories;