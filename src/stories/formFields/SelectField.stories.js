import React from "react";
import {useForm} from "react-hook-form";
import SelectField from "../../components/formFields/selectField/SelectField";

export default {
    title : "SelectField",
    content : SelectField
}

const Template = (args) => {
    const {control} = useForm();
    return <SelectField {...args} control={control}/>
}

const options = [
    {
        value:'item1',
        label:'Item 1'
    },
]

export const Type1 = Template.bind({})
Type1.args = {
    name : '',
    placeholder : 'Select',
    use : 'type-1',
    error : '',
    options : options
}

export const Type2 = Template.bind({})
Type2.args = {
    name : '',
    placeholder : 'Select',
    use : 'type-2',
    error : '',
    options : options
}

