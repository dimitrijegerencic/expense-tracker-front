import ColorCircle from "../../components/colorCircle/ColorCircle";

export default {
    title : "ColorCircle",
    component : ColorCircle
}

const Template = args => <ColorCircle{...args}/>

export const Red = Template.bind({})
Red.args = {
    color : 'red'
}








