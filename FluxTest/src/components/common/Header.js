import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "#00FF69" };
  const { Header, Content, Sider } = Layout;
  return (
    <Layout>
      <Header className="header">
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
          <Menu.Item key="1">
            <NavLink activeStyle={activeStyle} exact to="/">
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink activeStyle={activeStyle} to="/courses">
              Courses
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink activeStyle={activeStyle} to="/Cover">
              Cover
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink activeStyle={activeStyle} to="/about">
              About
            </NavLink>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default Header;
