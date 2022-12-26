import React, {useState} from "react";
import "./Categories.scss";
import Navbar from "../../components/navbar/Navbar";
import {Card} from "antd";
import ButtonAddGeneral from "../../components/buttons/buttonAddGeneral/ButtonAddGeneral";
import Table from "../../components/tables/Table";
import ButtonTableGroup from "../../components/buttons/buttonTableGroup/ButtonTableGroup";
import CategoryForm from "./categoryForm/CategoryForm";

const Categories = () => {

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [

        {
            title: 'Naziv kategorije',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Boja',
            dataIndex: 'address',
            key: 'address',
            align: 'center'
        },
        {
            title: '',
            dataIndex: 'x',
            key: 'x',
            render: () => <ButtonTableGroup
                onEdit={() => {
                    console.log("Edit")
                }}
                onDelete={() => {
                    console.log("Delete")
                }}
            />

        },
    ];

    const [isVisible, setIsVisible] = useState(false);

    const setFormVisible = () => {
        setIsVisible(true);
        const element1 = document.getElementById("categories-main");
        element1.classList.add("animationOpen");

    }

    return <>
      <Navbar/>
      <div className={'category-container'}>
          <Card title={<div className={'card-title'} >
                            <div><p>Dodaj kategoriju</p></div>
                            <div><ButtonAddGeneral size={'small'} onClick={()=>setFormVisible()}/></div>
                        </div>}
                        style={{width:650, height:449}}
                        id={"categories-main"}
                        className={'card-category'}
          >
            <Table data={dataSource} columns={columns} size={200}/>
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