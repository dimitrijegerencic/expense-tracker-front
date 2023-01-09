import React from "react";
import {useForm} from "react-hook-form";
import DateField from "../../components/formFields/dateField/DateField";

export default {
    title : "DateField",
    content : DateField
}

const Template = (args) => {
    const {control} = useForm();
    return <DateField {...args} control={control}/>
}

export const Type1 = Template.bind({})
Type1.args = {
    use : 'type-1',
    name : ''
}

export const Type2 = Template.bind({})
Type2.args = {
    use : 'type-2',
    name : ''
}