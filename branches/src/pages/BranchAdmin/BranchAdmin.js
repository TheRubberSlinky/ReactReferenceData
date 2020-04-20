import React, { useEffect, useState }  from 'react';
import { Row, Col, Input, Typography,Table, Spin } from 'antd';
import Form from 'antd/lib/form/Form';
const { Title } = Typography;

function BranchAdmin(){


    return (
        <Row justify="center">
            <Col span={24}>
                <Row>
                    <Col span={12}>
                        <Title level={2}> Branch Administration  </Title>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col md={24} lg={20} xl={20}>
                        <Form>
                            
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default BranchAdmin;