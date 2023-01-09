import React from "react";
import {useForm} from "react-hook-form";
import RadioField from "../../components/formFields/radioField/RadioField";

export default {
    title : "RadioField",
    content : RadioField,
    argTypes : {onChange : {action : "onChange"}}
}

const colorOptions = [
    {value:'#258FDC', label:'#258FDC'},
    {value:'#84C57A', label:'#84C57A'},
    {value:'#FFA800', label:'#FFA800'},
    {value:'#C2F1FB', label:'#C2F1FB'},
    {value:'#DC6788', label:'#DC6788'},
    {value:'#5E72EB', label:'#5E72EB'},
    {value:'#F52929', label:'#F52929'},
    {value:'#D946EF', label:'#D946EF'},
    {value:'#10B981', label:'#10B981'},
    {value:'#84CC16', label:'#84CC16'},
    {value:'#EC4899', label:'#EC4899'},
    {value:'#7628DA', label:'#7628DA'}
]

const Template = (args) => {
    const {control} = useForm();
    return <RadioField {...args} control={control}/>
}

export const Colors = Template.bind({})
Colors.args = {
    name : '',
    options :colorOptions
}
