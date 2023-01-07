import ButtonAddGeneral from "../../components/buttons/buttonAddGeneral/ButtonAddGeneral";

export default {
    title : "ButtonAddGeneral",
    component : ButtonAddGeneral,
    argTypes : {onClick : {action : "onClick"}}
}

const Template = args => <ButtonAddGeneral {...args}/>

export const Small = Template.bind({})
Small.args = {
    size: "small",
    type : "submit"
}

export const Big = Template.bind({})
Big.args = {
    size: "big",
    type : "submit"
}