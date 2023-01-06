import React from 'react';
import { Modal as AntModal } from 'antd';
import PropTypes from "prop-types";

const Modal = ({isVisible, close, content}) => {
    return <AntModal
        title={false}
        centered
        closable={false}
        open={isVisible}
        footer={null}
        onCancel={() => close()}
    >
        {content}
    </AntModal>
}

Modal.propTypes={
    title:PropTypes.string,
    isVisitable:PropTypes.bool,
    close:PropTypes.func.isRequired
}

export default Modal;