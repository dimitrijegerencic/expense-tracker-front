import React from "react";
import classes from "./HorizontalTransactionForm.module.scss";
import RadioField from "../../../../components/formFields/radioField/RadioField";
import InputField from "../../../../components/formFields/inputField/InputField";
import DateField from "../../../../components/formFields/dateField/DateField";
import SelectField from "../../../../components/formFields/selectField/SelectField";
import ButtonAddGeneral from "../../../../components/buttons/buttonAddGeneral/ButtonAddGeneral";

const HorizontalTransactionForm = () => {
    return <div className={classes['form-container']}>
        <RadioField option={'Trošak'}/>
        <RadioField option={'Prihod'}/>
        <InputField label={'Opis'} use={'transaction'}/>
        <DateField use={'type-2'}/>
        <SelectField label={'Kategorija'} use={'type-2'}/>
        <ButtonAddGeneral size={'big'}/>
    </div>
}

export default HorizontalTransactionForm;