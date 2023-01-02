import React from "react";
import "./AddTransaction.module.scss";
import classes from "./AddTransaction.module.scss";
import TransactionForm from "./transactionForm/TransactionForm";

const AddTransaction = () => {

    return <>
        <div className={classes['main']}>
            <TransactionForm type={'add'}/>
        </div>
    </>
}

export default AddTransaction;