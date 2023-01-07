import ButtonModal from "../../components/buttons/buttonModal/ButtonModal";

export default {
    title : "ButtonModal",
    component : ButtonModal,
    argTypes : {onClick : {action : "onClick"}}
}

const Template = args => <ButtonModal{...args}/>

export const Delete = Template.bind({})
Delete.args = {
    label: "delete",
    color : "#DF2C14"
}

export const Cancel = Template.bind({})
Cancel.args = {
    label: "cancel",
    color : "#5E72EB"
}




