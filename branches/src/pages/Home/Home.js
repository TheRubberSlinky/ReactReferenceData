import React, { useEffect, useState }  from 'react';
import { Row, Col, Input, Typography,Table, Spin } from 'antd';
const { Title } = Typography;

function Home(){
    return (
        <Row justify="center">
            <Col span={24}>
                <Row>
                    <Col span={12}>
                        <Title level={2}> Home </Title>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                    </Col>
                    <Col span={12}>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Home;