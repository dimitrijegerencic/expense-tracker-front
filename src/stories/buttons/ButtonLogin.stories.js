import ButtonLogin from "../../components/buttons/buttonLogin/ButtonLogin";

export default {
    title : "ButtonLogin",
    component : ButtonLogin,
    argTypes : {onClick : {action : "onClick"}}
}

const Template = args => <ButtonLogin {...args}/>

export const Main = Template.bind({})
Main.args = {
    label: "Log in",
    type : "submit"
}
