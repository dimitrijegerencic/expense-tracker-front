import React from "react";
import classes from "./TransactionsHistory.module.scss";
import Table from "../../components/tables/Table";
import {Tag} from "antd";
import DefaultCard from "../../components/cards/defaultCard/DefaultCard";
import ButtonTableGroup from "../../components/buttons/buttonTableGroup/ButtonTableGroup";
import HorizontalTransactionForm from "../addTransaction/transactionForm/horizontal/HorizontalTransactionForm";

const TransactionsHistory = () => {

    const dataSource = [
        {
            key: '1',
            type: 'Trošak',
            description: 'Neki tamo opis',
            value: '891',
            date_and_time:' 23.01.2023.',
            category: 'Kategorija 1'
        },
        {
            key: '2',
            type: 'Prihod',
            description: 'Neki tamo opis',
            value: '600',
            date_and_time:' 06.12.2022.',
            category: 'Kategorija 2'
        }
    ];
    const columns = [
        {
            title: 'Tip',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Kratak opis',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Iznos',
            dataIndex: 'value',
            key: 'value',
            align: 'center'
        },
        {
            title: 'Datum i vrijeme',
            dataIndex: 'date_and_time',
            key: 'date_and_time',
        },
        {
            title: 'Kategorija',
            dataIndex: 'category',
            key: 'category',
            render: (text) => (
                <Tag color="#f50">{text}</Tag>
            ),
        },
        {
            title: 'Opis',
            dataIndex: 'description',
            key: 'description',
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

    return <>
        <HorizontalTransactionForm/>
        <div className={classes['container']}>
            <hr/>
            <div className={classes['table-container']}>
                <DefaultCard title="Istorija transakcija"
                             content={<Table data={dataSource} columns={columns} size={600}/>}>
                </DefaultCard>
            </div>
        </div>
    </>
}

export default TransactionsHistory;