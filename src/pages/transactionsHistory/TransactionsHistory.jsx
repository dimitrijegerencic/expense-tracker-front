import React from "react";
import classes from "./TransactionsHistory.module.scss";
import Table from "../../components/tables/Table";
import {Tag} from "antd";
import DefaultCard from "../../components/cards/defaultCard/DefaultCard";
import ButtonTableGroup from "../../components/buttons/buttonTableGroup/ButtonTableGroup";
import HorizontalTransactionForm from "../addTransaction/transactionForm/horizontal/HorizontalTransactionForm";
import {useQuery} from "react-query";
import {transactionService} from "../../services/TransactionService";
import {t} from "react-switch-lang";
import {useModal} from "../../context/modalContext/ModalContext";
import DeleteForm from "../../components/deleteFrom/DeleteForm";

const TransactionsHistory = () => {

    const {open, close} = useModal();

    const openDeleteTransactionModal = (type, id) => {
        open({
            title : '',
            content : <DeleteForm
                            id={id}
                            onCancel={close}
                            type={'transaction'}
            />
        })
    }

    const {data : expenses} = useQuery(
        ['expenses'],
        () => transactionService.getAll(),
        {
            enabled : true,
            initialData : []
        }
    )

    const headers = [
        {
            title : t('transactions-history.table.type'),
            dataIndex : 'type',
            key : 'type'
        },
        {
            title : t('transactions-history.table.description'),
            dataIndex : 'description',
            key : 'description'
        },
        {
            title : t('transactions-history.table.amount'),
            dataIndex : 'amount',
            key : 'amount',
            align : 'center'
        },
        {
            title : t('transactions-history.table.date'),
            dataIndex : 'date',
            key : 'date',
            render : (text, record) => {
                return record?.getDateAndTimeFormatted()
            }
        },

        {
            title : t('transactions-history.table.category'),
            dataIndex : 'categories',
            key : 'categories',
            align: 'center',
            render : (text, record) => {
                return record?.categories?.map(category => {
                    return <Tag key={category?.id} color={category?.color}>{category?.name}</Tag>
                })
            }
        },
        {
            title : t('transactions-history.table.note'),
            dataIndex : 'note',
            key : 'note',
            align : 'center'
        },
        {
            title: '',
            dataIndex: 'options',
            key: 'options',
            render: (text,record)=>{
                return <ButtonTableGroup
                    onEdit={()=>console.log("Edit", record?.id)}
                    onDelete={()=>openDeleteTransactionModal('transaction', record?.id)}
                />
            }
        }
    ]

    return <>
        <HorizontalTransactionForm/>
        <div className={classes['container']}>
            <hr/>
            <div className={classes['table-container']}>
                <DefaultCard title="Istorija transakcija"
                             content={<Table data={expenses} columns={headers} size={600}/>}>
                </DefaultCard>
            </div>
        </div>
    </>
}

export default TransactionsHistory;