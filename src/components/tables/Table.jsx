import React from "react";
import {Table as AntdTable} from "antd";
import "./Table.scss";
import PropTypes from "prop-types";

const Table = ({data, columns, size}) => {

    return <AntdTable
                dataSource={data}
                columns={columns}
                pagination={false}
                className={'table'}
                scroll={{ y: size }}
    />
}

Table.propTypes={
    size:PropTypes.number,
    columns:PropTypes.arrayOf(PropTypes.shape({
        title : PropTypes.string,
        dataIndex : PropTypes.string,
        key : PropTypes.string
    })).isRequired
}

export default Table;