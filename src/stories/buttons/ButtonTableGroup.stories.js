import ButtonTableGroup from "../../components/buttons/buttonTableGroup/ButtonTableGroup";

export default {
    title : "ButtonTableGroup",
    component : ButtonTableGroup,
    argTypes : {onEdit : {action : "onEdit"}, onDelete : {action: "onDelete"}}
}

export const Main = () => <ButtonTableGroup onEdit={()=>{}} onDelete={()=>{}}/>


