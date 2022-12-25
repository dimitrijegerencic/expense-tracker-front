import React from "react";
import classes from "./TransactionsHistory.module.scss";
import RadioField from "../../components/formFields/radioField/RadioField";
import TransactionSelectField from "../../components/formFields/selectField/transactions/TransactionSelectField";
import TransactionDateField from "../../components/formFields/dateField/transactions/TransactionDateField";
import Navbar from "../../components/navbar/Navbar";
import ButtonAddGeneral from "../../components/buttons/buttonAddGeneral/ButtonAddGeneral";
import Table from "../../components/tables/Table";
import {Tag} from "antd";
import DefaultCard from "../../components/cards/defaultCard/DefaultCard";
import TransactionInputField from "../../components/formFields/inputField/transactions/TransactionInputField";

const TransactionsHistory = () => {

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
            title: 'Tip',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Kratak opis',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Iznos',
            dataIndex: 'address',
            key: 'address',
            align: 'center'
        },
        {
            title: 'Datum i vrijeme',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Kategorija',
            dataIndex: 'address',
            key: 'address',
            render: (text) => (
                <Tag color="#f50">{text}</Tag>
            ),
        },
        {
            title: 'Opis',
            dataIndex: 'address',
            key: 'address',
            align: 'center'
        }
    ];

    return <>
        <Navbar/>
            <div className={classes['upper-form-container']}>
                <RadioField option={'Trošak'}/>
                <RadioField option={'Prihod'}/>
                <TransactionInputField label={'Opis'}/>
                <TransactionDateField/>
                <TransactionSelectField label={'Kategorija'}/>
                <ButtonAddGeneral/>
            </div>

        <div className={classes['container']}>
            <hr/>
            <div className={classes['table-container']}>
                <DefaultCard title="Istorija transakcija"
                             content={<Table data={dataSource} columns={columns}/>}>
                </DefaultCard>
            </div>
        </div>

    </>
}

export default TransactionsHistory;