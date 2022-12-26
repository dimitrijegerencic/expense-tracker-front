import React from "react";
import classes from "./VerticalTransactionForm.module.scss";
import SelectField from "../../../../components/formFields/selectField/SelectField";
import DateField from "../../../../components/formFields/dateField/DateField";
import TimeField from "../../../../components/formFields/timeField/TimeField";
import TextAreaField from "../../../../components/formFields/textAreaField/TextAreaField";
import {Space} from "antd";
import CheckboxField from "../../../../components/formFields/checkboxField/CheckboxField";
import ButtonFormGroup from "../../../../components/buttons/buttonFormGroup/ButtonFormGroup";

const VerticalTransactionForm = () => {

    return <div className={classes['main']}>
        <div className={classes['form-container']}>
            <div className={classes['form-title']}>
                <h1>Dodaj transakciju</h1>
            </div>
            <div className={classes['boxes']}>
                <div className={classes['left']}>
                    <SelectField use={'type-1'}/>
                    <div className={classes['date-time-container']}>
                        <DateField use={'type-1'}/>
                        <TimeField/>
                    </div>
                    <label htmlFor="{'descrp'}">Kratak opis</label>
                    <TextAreaField type={'description'} placeholder={'(min 3, max 100, required)'} id={'descrp'}/>
                    <label htmlFor="{'note'}">Bilješka</label>
                    <TextAreaField type={'note'} placeholder={'(min 3, max 100, optional)'} id={'note'}/>
                </div>
                <div className={classes['right']}>
                    <div className={classes['categories-container']}>
                        <h5>Kategorija</h5>
                        <hr/>
                        <div className={classes['category-options']}>
                            <Space direction={'vertical'}>
                                <CheckboxField option={'Kategorija 1'}/>
                                <CheckboxField option={'Kategorija 2'}/>
                                <CheckboxField option={'Kategorija 3'}/>
                                <CheckboxField option={'Kategorija 4'}/>
                                <CheckboxField option={'Kategorija 5'}/>
                            </Space>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes['form-buttons']}>
            <ButtonFormGroup/>
        </div>
    </div>
}

export default VerticalTransactionForm;