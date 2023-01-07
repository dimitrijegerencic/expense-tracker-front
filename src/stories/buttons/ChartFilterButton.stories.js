import ChartFilterButton from "../../components/buttons/chartFilterButton/ChartFilterButton";

export default {
    title : "ButtonChartFilter",
    component : ChartFilterButton
}


const Template = args => <ChartFilterButton{...args}/>

export const Type = Template.bind({})
Type.args = {
    label: "Type"
}

export const Month = Template.bind({})
Month.args = {
    label: 'Month'
}





