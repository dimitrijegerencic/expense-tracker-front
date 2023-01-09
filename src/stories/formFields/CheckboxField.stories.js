import React from "react";
import {useForm} from "react-hook-form";
import CheckboxField from "../../components/formFields/checkboxField/CheckboxField";

export default {
    title : "CheckboxField",
    content : CheckboxField
}

const Template = (args) => {
    const {control} = useForm();
    return <CheckboxField {...args} control={control}/>
}

export const General = Template.bind({})
General.args = {
    label : '',
    name : '',
    options : ['a', 'b']
}