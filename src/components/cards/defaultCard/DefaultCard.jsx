import React from "react";
import "./DefaultCard.scss";
import Card from "antd/es/card/Card";

const DefaultCard = ({title, content}) => {
    return <Card title={title}
                 bordered={true}
                className={'default-card'}>
                {content}
            </Card>
}

export default DefaultCard;