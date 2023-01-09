import React from "react";
import {Input} from "antd";
import Wrapper from "../../wrapper/Wrapper";
import {Controller} from 'react-hook-form';
import "./ButtonAddImage.scss";

const ButtonAddImage=({name, error, control, addImageClick})=>{
    return (
        <Wrapper error={error}>
            <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <Input
                        type={'file'}
                        className={'add-img-button'}
                        status={error ? "error" : ""}
                        {...field}
                        onChange={(e)=>{addImageClick(e);field.onChange(e)
                        }}
                    />
                )}
            />
        </Wrapper>
    );
}
export default ButtonAddImage;