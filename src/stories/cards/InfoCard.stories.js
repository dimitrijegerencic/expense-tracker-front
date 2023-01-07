import InfoCard from "../../components/cards/infoCard/InfoCard";

export default {
    title : "InfoCard",
    component : InfoCard
}

const Template = args => <InfoCard{...args}/>

export const Income = Template.bind({})
Income.args = {
    title : "Income",
    value : '300',
    use : 'income'
}

export const Expense = Template.bind({})
Expense.args = {
    title : "Expense",
    value : '671',
    use : 'expense'
}

export const Balance = Template.bind({})
Balance.args = {
    title : "Balance",
    value : '1314',
    use : 'balance'
}







