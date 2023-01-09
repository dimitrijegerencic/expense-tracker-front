import React from "react";
import { useForm } from "react-hook-form";
import TextAreaField from "../../components/formFields/textAreaField/TextAreaField";

export default {
    title : "TextAreaField",
    component:TextAreaField,
}

const Template = (args) => {
    const {control} = useForm();
    return <TextAreaField {...args} control={control}/>;
}

export const General = Template.bind({});
General.args = {
    placeholder:"Insert some text here...",
    error:"",
    name:"",
    label:"Text field"
}