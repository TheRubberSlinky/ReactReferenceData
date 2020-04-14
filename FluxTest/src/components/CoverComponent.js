import React, { useState, useEffect } from "react";
import { Demo } from "./AntTree";
import { Layout, Col, Spin, Row } from "antd";
import { GeneralDisplayPage } from "./GeneralManage";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function CoverPage() {
  const [KeySelected, setKeySelected] = useState({
    key: "1",
    isEdit: true,
    type: "Branch"
  });

  const { Content } = Layout;

  //useEffect(() => {}, [KeySelected]);

  const onClick = (value, BranchKey) => {
    setKeySelected({ key: BranchKey, isEdit: false, type: value });
  };

  const onChange = (selectedKeys, type) => {
    console.log("Trigger Select" + selectedKeys + type.node.isLeaf);
    if (selectedKeys[0] !== undefined) {
      //debugger;
      setKeySelected({
        key: selectedKeys[0],
        isEdit: true,
        type: type.node.isLeaf ? "Employee" : "Branch"
      });
    }
  };

  return (
    <Layout style={{ height: "100%", minHeight: "600px" }}>
      <Spin spinning={false}>
        <Content className="container-center">
          <h2>Hunting 2.0!</h2>
          <Row gutter={16} style={{ height: "100%", minHeight: "600px" }}>
            <Col span={1}></Col>
            <Col span={6}>
              <Demo mySelect={onChange} myClick={onClick} />
            </Col>
            <Col span={13}>
              <GeneralDisplayPage
                GenKey={KeySelected.key}
                isEdit={KeySelected.isEdit}
                type={KeySelected.type}
              />
            </Col>
          </Row>
        </Content>
      </Spin>
    </Layout>
  );
}

export default CoverPage;
