import React from 'react';
import { Modal as AntModal } from 'antd';
import PropTypes from "prop-types";

const Modal = ({title, isVisible, close, content}) => {
    return <AntModal
        title={false}
        centered
        visible={isVisible}
        footer={null}
        maskClosable={false}
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