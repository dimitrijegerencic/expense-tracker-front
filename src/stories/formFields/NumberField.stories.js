import React from "react";
import {useForm} from "react-hook-form";
import NumberField from "../../components/formFields/numberField/NumberField";

export default {
    title : "NumberField",
    content : NumberField
}

const Template = (args) => {
    const {control} = useForm();
    return <NumberField {...args} control={control}/>
}

export const General = Template.bind({})
General.args = {
    name : '',
    placeholder : '',
    prefix : 'Prefix'
}

