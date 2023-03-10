import React from "react";
import "./HorizontalTransactionForm.scss";
import {Input, Radio} from "antd";
import {DatePicker} from "antd";
import {Select} from "antd";
import calendarImg from "../../../../img/inputs/calendar-days.png";
import arrowDown from "../../../../img/inputs/arrowDown.png";
import dayjs from "dayjs";
import {categoryService} from "../../../../services/CategoryService";
import {useQuery} from "react-query";
import {t} from "react-switch-lang";
import ButtonAddGeneral from "../../../../components/buttons/buttonAddGeneral/ButtonAddGeneral";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const HorizontalTransactionForm = ({typeSet, dateSet, descriptionSet, categorySet}) => {

    const navigate = useNavigate();

    const getCategories=()=>{
        return categoryService.getAll()
            .then(res=>{
                return res.map(category=>{
                    return {
                        label: category?.name,
                        value: category?.id
                    }
                })
            })
    }

    const {data : categoryOptions} = useQuery(
        ['all-categories'],
        ()=>getCategories(),
        {
            enabled : true,
            initialData: []
        }
    )

    return <div className={'form-container'}>
            <div className={'radio-buttons-container'}>
                <Radio.Group className={'filter-radio-buttons'} onChange={e=>typeSet(e)}>
                    <Radio value={'expense'}>{t('transactions.form.expense')}</Radio>
                    <Radio value={'income'}>{t('transactions.form.income')}</Radio>
                </Radio.Group>
            </div>
            <div className={'filter-inputs'}>
                <Input
                    placeholder={t('transactions.form.description2')}
                    onChange={e => descriptionSet(e)}
                    className={'filter-input-field'}
                />
                <DatePicker
                    className={'filter-date-field'}
                    placeholder={'_ _ /_ _/_ _ _ _'}
                    suffixIcon={<img src={calendarImg} alt="" style={{width:22, height:22}}/>}
                    allowClear={false}
                    format={'YYYY-MM-DD'}
                    picker={'date'}
                    onChange={date => dateSet(dayjs(date).format('YYYY-MM-DD'))}
                />
                <Select
                    className={'filter-select-field'}
                    placeholder={t('transactions.form.category')}
                    suffixIcon={<img src={arrowDown} alt={''} style={{paddingRight:10}}/>}
                    mode={'multiple'}
                    options={categoryOptions}
                    onChange={value => categorySet(value)}
                />
                <ButtonAddGeneral onClick={()=>navigate('/add-transaction')} size={'big'}/>
            </div>
        </div>
}

HorizontalTransactionForm.propTypes={
    typeSet : PropTypes.func,
    dateSet : PropTypes.func,
    descriptionSet : PropTypes.func,
    categorySet : PropTypes.func
}

export default HorizontalTransactionForm;