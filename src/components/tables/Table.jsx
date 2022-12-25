import React from "react";
import {Table as AntdTable} from "antd";
import "./Table.scss";

const Table = ({data, columns}) => {

    return <AntdTable
                dataSource={data}
                columns={columns}
                pagination={false}
                className={'table'}
    />
}

export default Table;