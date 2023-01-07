import ButtonAddTransaction from "../../components/buttons/buttonAddTransaction/ButtonAddTransaction";

export default {
    title : "ButtonAddTransaction",
    component : ButtonAddTransaction,
    argTypes : {onClick : {action : "onClick"}}
}

export const Main = () => <ButtonAddTransaction onClick={()=>{}}/>
