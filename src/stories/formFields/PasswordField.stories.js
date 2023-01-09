import React from "react";
import {useForm} from "react-hook-form";
import PasswordField from "../../components/formFields/passwordField/PasswordField";

export default {
    title : "PasswordField",
    content : PasswordField
}

const Template = (args) => {
    const {control} = useForm();
    return <PasswordField {...args} control={control}/>
}

export const General = Template.bind({})
General.args = {
    name : '',
    placeholder : 'Insert password'
}

export const Profile = Template.bind({})
Profile.args = {
    name : '',
    placeholder : 'Insert password',
    use : 'profile'
}

