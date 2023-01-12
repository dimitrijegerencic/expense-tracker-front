import React, {useState} from "react";
import "./TransactionsHistory.scss";
import {Card, Table, Tag} from "antd";
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
        ['all-expenses', type, description, category, date],
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
            key : 'type',
            render : (text, record) => {
                return record?.getTypeName()
            }

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
            render : (text, record) => {
                return record?.categories?.map(category => {
                    return <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <Tag key={category?.id}
                             color={category?.color}
                             style={{fontFamily : "Inter", fontSize:14, borderRadius : 6,
                                    width: 127, height: 35, display: "flex",
                                    alignItems : "center", justifyContent: "center"}}
                        >
                            {category?.name}
                        </Tag>
                    </div>
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
            render: (text, record)=>{
                return <ButtonTableGroup
                            onEdit={() => navigate(`/edit-transaction/${record?.id}`)}
                            onDelete={() => openDeleteTransactionModal('transaction', record?.id)}
                        />
            }
        }
    ]

    return <div className={'history'}>
        <HorizontalTransactionForm typeSet={e => setType(e.target.value)}
                                   descriptionSet={e => setDescription(e.target.value)}
                                   dateSet={value => setDate(value)}
                                   categorySet={e => setCategory(e)}
        />
        <div style={{height: 30, width: "85%"}}>
            <hr/>
        </div>
        <div className={'container'}>
            {expenses.length !== 0 ?
                <div className={'table-container'}>
                    <Card title={<div className={'table-card-title'}>{t('transactions.history')}</div>}>
                        <Table dataSource={expenses} columns={headers}
                               scroll={{y : 600}}
                               rowKey={record => record.id}
                               className={'history-table'}
                               pagination={false}
                        />
                    </Card>
                </div>
                :
                <div className={'no-table-data'}>
                    <h1>{t('transactions-history.table.no-data')}</h1>
                </div>
            }
        </div>
    </div>
}

export default TransactionsHistory;