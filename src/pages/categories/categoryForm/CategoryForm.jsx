import React from "react";
import "./CategoryForm.scss";
import {Card} from "antd";
import InputField from "../../../components/formFields/inputField/InputField";
import {CirclePicker} from 'react-color';
import ButtonAddCategory from "../../../components/buttons/buttonAddCategory/ButtonAddCategory";

const CategoryForm = () => {
    return <Card title={'Nova kategorija'} className={'category-form-container'}>
                <div className={'content'}>
                    <InputField label={'Naziv kategorije'} use={'category'}/>
                    <div className={'colors'}>
                        <p>Boja</p>
                        <CirclePicker circleSpacing={29} circleSize={26}/>
                    </div>
                </div>
                <div className={'button-section'}>
                    <ButtonAddCategory label={'dodaj'} onClick={()=>console.log("Kategorija dodata!")}/>
                </div>
            </Card>
}

export default CategoryForm;