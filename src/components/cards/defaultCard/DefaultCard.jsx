import React from "react";
import "./DefaultCard.scss";
import Card from "antd/es/card/Card";
import PropTypes from "prop-types";

const DefaultCard = ({title, content}) => {
    return <Card title={title}
                 bordered={true}
                className={'default-card'}>
                {content}
            </Card>
}

DefaultCard.propTypes = {
    title:PropTypes.string,
    content:PropTypes.string
}

export default DefaultCard;