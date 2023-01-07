import ButtonAddCategory from "../../components/buttons/buttonAddCategory/ButtonAddCategory";

export default {
    title : "ButtonAddCategory",
    component : ButtonAddCategory,
    argTypes : {onClick : {action : "onClick"}}
}

const Template = args => <ButtonAddCategory {...args}/>

export const Main = Template.bind({})

Main.args = {
    label: "dodaj"
}