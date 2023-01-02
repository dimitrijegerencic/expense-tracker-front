import React from "react";
import classes from "./EditTransaction.module.scss";
import TransactionForm from "../addTransaction/transactionForm/TransactionForm";
import {useParams} from "react-router-dom";

const EditTransaction = () => {

    const {id} = useParams();

    return <>
        <div className={classes['main']}>
            <TransactionForm type={'edit'} id={id}/>
        </div>
    </>
}

export default EditTransaction;