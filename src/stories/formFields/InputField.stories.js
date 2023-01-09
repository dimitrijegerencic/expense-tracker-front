import React from "react";
import {useForm} from "react-hook-form";
import InputField from "../../components/formFields/inputField/InputField";

export default {
    title : "InputField",
    content : InputField
}

const Template = (args) => {
    const {control} = useForm();
    return <InputField {...args} control={control}/>
}

export const Login = Template.bind({})
Login.args = {
    placeholder : '',
    name : '',
    use : 'login'
}

export const Profile = Template.bind({})
Profile.args = {
    placeholder : '',
    name : '',
    use : 'profile'
}


export const Category = Template.bind({})
Category.args = {
    placeholder : '',
    name : '',
    use : 'category'
}