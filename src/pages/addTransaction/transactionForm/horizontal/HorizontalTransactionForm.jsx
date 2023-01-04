import React from "react";
import "./HorizontalTransactionForm.scss";
import {Input, Radio} from "antd";
import {DatePicker} from "antd";
import {Select} from "antd";
import calendarImg from "../../../../img/inputs/calendar-days.png";
import arrowDown from "../../../../img/inputs/arrowDown.png";
import ButtonAddGeneral from "../../../../components/buttons/buttonAddGeneral/ButtonAddGeneral";
import {useNavigate} from "react-router-dom";
import dayjs from "dayjs";
import {categoryService} from "../../../../services/CategoryService";
import {useQuery} from "react-query";

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
                <Radio value={'expense'}>Trošak</Radio>
                <Radio value={'income'}>Prihod</Radio>
            </Radio.Group>
        </div>
        <div className={'filter-inputs'}>
            <Input
                placeholder={'Opis'}
                onChange={e=>descriptionSet(e)}
                className={'filter-input-field'}
            />
            <DatePicker
                className={'filter-date-field'}
                placeholder={'_ _ /_ _/_ _ _ _'}
                suffixIcon={<img src={calendarImg} alt="" style={{width:22, height:22}}/>}
                allowClear={false}
                format={'YYYY/MM/DD'}
                onChange={(d,ds) => dateSet(ds ? dayjs(d).format('YYYY-MM-DD') : '')}
            />
            <Select
                className={'filter-select-field'}
                placeholder={'Kategorija'}
                suffixIcon={<img src={arrowDown} alt={''} style={{paddingRight:10}}/>}
                mode={'multiple'}
                options={categoryOptions}
                onChange={value => categorySet(value)}
            />
        </div>
        <ButtonAddGeneral size={'big'} onClick={()=>navigate('/transactions-history')}/>
    </div>
}

export default HorizontalTransactionForm;