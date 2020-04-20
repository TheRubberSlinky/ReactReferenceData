import React from 'react';
import { Row, Col, Menu } from 'antd';
import { HomeOutlined, LockOutlined, BranchesOutlined,BankOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

const Navigation = () => (
    <Row>
        <Col span={24}>
            <Menu mode={"horizontal"}>
                <Menu.Item key="home">
                    <Link to="/">
                        <HomeOutlined /> Home
                    </Link>
                </Menu.Item>
                <SubMenu
                    title={
                        <span>
                            <SettingOutlined /> Admin
                        </span>
                    }
                >
                    <Menu.Item key="admin:structure">
                        <Link to="/admin/structure">
                            <BranchesOutlined /> Structure
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="admin:roles"> 
                        <Link to="/admin/role">
                            <LockOutlined /> Roles
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="admin:branchCategory"> 
                        <Link to="/admin/branchcategory">
                            <BankOutlined /> Branch Category
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Col>
    </Row>
);

export default Navigation;