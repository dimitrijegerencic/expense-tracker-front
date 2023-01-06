import React, {useState} from "react";
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
import {useNavigate} from "react-router-dom";

const TransactionsHistory = () => {

    const {open, close} = useModal();
    const navigate = useNavigate();

    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState(null);

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
        ['expenses', type, description, category, date],
        () => transactionService.getAll(type, description, category, date),
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
                            onEdit={() => navigate(`/edit-transaction/${record?.id}`)}
                            onDelete={() => openDeleteTransactionModal('transaction', record?.id)}
                        />
            }
        }
    ]

    return <>
        <HorizontalTransactionForm typeSet={e => setType(e.target.value)}
                                   descriptionSet={e => setDescription(e.target.value)}
                                   dateSet={e => setDate(e)}
                                   categorySet={value => setCategory(value)}

        />
        <div className={classes['container']}>
            <hr/>
            {expenses.length !== 0 ?
                <div className={classes['table-container']}>
                    <DefaultCard title={t('transactions.history')}
                                 content={<Table data={expenses} columns={headers} size={600}/>}>
                    </DefaultCard>
                </div>
                :
                <div className={classes['no-table-data']}>
                    <h1>{t('transactions-history.table.no-data')}</h1>
                </div>
            }
        </div>
    </>
}

export default TransactionsHistory;