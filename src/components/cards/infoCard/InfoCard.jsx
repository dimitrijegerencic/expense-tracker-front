import React from "react";
import "./InfoCard.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

const InfoCard = ({title, value, use}) => {

    const incomeFormat = `+${value}€`;
    const expenseFormat = `-${value}€`
    const regularFormat = `${value}€`;

    return <div className={'info-card'}>
        <p className={'info-card-title'}>{title}</p>
        <h1 className={clsx('info-card-value', use)}>
            {use==='income' ? incomeFormat : use==='expense' ? expenseFormat : regularFormat}
        </h1>
    </div>
}

InfoCard.propTypes = {
    title:PropTypes.string,
    value:PropTypes.string,
    use : PropTypes.oneOf(['income', 'balance', 'expense'])
}


export default InfoCard;