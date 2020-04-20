import React, { useEffect, useState } from "react";
import { Row, Col, Input, Typography, Table, Spin } from "antd";
import { GetRoles } from "../../api/BankerRoles";
const { Search } = Input;
const { Title } = Typography;

function BankerRoleAdmin() {
  const [searchValue, setSearchValue] = useState(null);
  const [searching, setIsSearching] = useState(false);
  const [roles, setRoles] = useState([]);
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Sale Role?",
      dataIndex: "isSaleRole",
      key: "isSaleRole",
    },
    {
      title: "actions",
      key: "bankerRole",
      render: () => (
        <span>
          <a> Edit </a>
        </span>
      ),
    },
  ];

  useEffect(() => {
    async function getTheRoles() {
      const response = await GetRoles();
      setRoles(response);
    }
    console.log("loading roles");
    getTheRoles();
  }, [searchValue]);

  function handleSearch(value) {
    setSearchValue(value);
  }

  return (
    <Row justify="start" align="middle">
      <Col span={24}>
        <Row>
          <Col span={12}>
            <Title level={2}>Banker Role Admin</Title>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Search
              placeholder="search"
              loading={searching}
              onSearch={handleSearch}
              size="large"
              enterButton
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={24}>
            <Spin spinning={searching}>
              <Table dataSource={roles} columns={columns} />
            </Spin>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default BankerRoleAdmin;
