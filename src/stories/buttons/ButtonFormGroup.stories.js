import ButtonFormGroup from "../../components/buttons/buttonFormGroup/ButtonFormGroup";

export default {
    title : "ButtonFormGroup",
    component : ButtonFormGroup,
    argTypes : {onClick : {action : "onClick"}}
}

const Template = args => <ButtonFormGroup {...args}/>

export const Main = Template.bind({})
Main.args = {
    onClick: ()=>{}
}

