import React from "react";
import classes from "./DeleteForm.module.scss";
import ButtonModal from "../buttons/buttonModal/ButtonModal";
import {t} from "react-switch-lang";
import {useMutation, useQueryClient} from "react-query";
import {categoryService} from "../../services/CategoryService";
import {message} from "antd";
import {transactionService} from "../../services/TransactionService";

const DeleteForm = ({id, onCancel, type}) => {

    const queryClient = useQueryClient();

    const deleteCategory = useMutation(
        () => categoryService.deleteCategory(id)
            .then(result => {
                queryClient.invalidateQueries('all-categories')
                onCancel()
            })
            .catch(error => message.error(error))
    )

    const deleteTransaction = useMutation(
        () => transactionService.deleteTransaction(id)
            .then(result => {
                queryClient.invalidateQueries('expenses')
                message.success('Transaction deleted successfuly!')
                onCancel()
            })
            .catch(error => message.error(error))
    )

    const deleteAction = (id) => {
        if (type === 'category')
            deleteCategory.mutate(id);
        else if (type === 'transaction')
            deleteTransaction.mutate(id);
    }

    return <>
        <div className={classes['delete-form-container']}>
            <h4>{t('common.modal-content')}</h4>
            <div className={classes['delete-form-buttons']}>
                <ButtonModal label={t('common.cancel')} onClick={(e)=>onCancel(e)} color={'#5E72EB'}/>
                <ButtonModal label={t('common.delete')} onClick={()=>deleteAction(id)} color={'red'}/>
            </div>
        </div>
    </>
}

export default DeleteForm;