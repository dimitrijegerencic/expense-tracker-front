import Wrapper from "../../components/wrapper/Wrapper";

export default {
    title : "Wrapper",
    component : Wrapper
}

const Template = args => <Wrapper{...args}/>

export const Income = Template.bind({})
Income.args = {
    children : 'Something',
    error : 'error here'
}









