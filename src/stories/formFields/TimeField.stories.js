import React from "react";
import { useForm } from "react-hook-form";
import TimeField from "../../components/formFields/timeField/TimeField";

export default {
    title : "TimeField",
    component : TimeField
}

const Template = (args) => {
    const {control} = useForm();
    return <TimeField {...args} control={control}/>;
}

export const General = Template.bind({});
General.args={
    placeholder:'',
    error : " ",
    name : ""
}