import React from "react";
import Navbar from "../../components/navbar/Navbar";
import VerticalTransactionForm from "./transactionForm/vertical/VerticalTransactionForm";

const AddTransaction = () => {
    return <>
        <Navbar/>
        <VerticalTransactionForm/>
    </>
}

export default AddTransaction;