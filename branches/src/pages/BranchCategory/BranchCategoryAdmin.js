import React, { useEffect, useState } from "react";
import { Row, Col, Input, Typography, Table, Spin } from "antd";
import { GetBranchCategory } from "../../api/BranchCategory";
const { Search } = Input;
const { Title } = Typography;

function BranchCategoryAdmin() {
  const [searchValue, setSearchValue] = useState(null);
  const [searching, setIsSearching] = useState(false);
  const [branchCategories, setBranchCategories] = useState([]);
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
      title: "is Active",
      dataIndex: "isActive",
      key: "isActive",
    },
    {
      title: "is outlet branch",
      dataIndex: "isOutletBranch",
      key: "isOutletBranch",
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
    async function GetBranchCategories() {
      const response = await GetBranchCategory();

      setBranchCategories(response);
    }
    console.log("loading");
    GetBranchCategories();
  }, [searchValue]);

  function handleSearch(value) {
    setSearchValue(value);
  }

  return (
    <Row justify="start" align="middle">
      <Col span={24}>
        <Row>
          <Col span={12}>
            <Title level={1}> Branch Category Admin </Title>
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
              <Table dataSource={branchCategories} columns={columns} />
            </Spin>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default BranchCategoryAdmin;
