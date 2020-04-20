import React  from 'react';
import { Empty } from 'antd';
import PropTypes from "prop-types";

const NoData = (props) => {
    return (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={props.message}
        />
    )
}

NoData.prototype = {
    message: PropTypes.string.isRequired
};

export default NoData;