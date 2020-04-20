import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { Row, Col } from "antd";
import NoData from "../../components/Common/NoData/NoData";
import StructureTree from "../../components/StructureTree/StructureTree";
import BranchEditForm from "../../components/BranchEditForm/BranchEditForm";
import EmployeeEditForm from "../../components/EmployeeEditForm/EmployeeEditForm";
import { UpdateEmployee } from "../../api/employee";
import { UpdateBranch } from "../../api/Branch";

function StructureAdmin() {
  const [selectedID, setSelectedID] = useState(0);
  let { path } = useRouteMatch();
  const history = useHistory();

  function treeStructureOnMenuClick(type, data) {
    if (type === "Branch") history.push(`${path}/branch`);
    else history.push(`${path}/employee`);
  }

  function treeStructureOnSelect(key, data) {
    if (data.node.isLeaf) history.push(`${path}/employee/${data.node.dbid}`);
    else history.push(`${path}/branch/${data.node.dbid}`);
  }

  async function onFinishEmployee(data) {
    debugger;
    //employeepost
    console.log(data);
    //const response = await UpdateEmployee(data);
    //if (response) return true;
    //return false;
  }

  async function onFinishBranch(data) {
    //branchPost
    const response = await UpdateBranch(data);
    if (response) return true;
    return false;
  }

  function treeStructureOnDrop(childItem, parentItem) {
    console.log("childItem", childItem);
    console.log("parentItem", parentItem);
  }

  const structureConfig = {
    branchCode: 812,
    draggable: true,
    onMenuClick: treeStructureOnMenuClick,
    onDrop: treeStructureOnDrop,
    onSelect: treeStructureOnSelect,
  };

  return (
    <Row justify="center">
      <Col span={23}>
        <Row gutter={64} justify="center">
          <Col span={8} id="tree search">
            <StructureTree {...structureConfig} />
          </Col>
          <Col span={14}>
            <Switch>
              <Route exact path={path}>
                <NoData message="Please select a node from the tree structure" />
              </Route>
              <Route path={`${path}/branch`}>
                <BranchEditForm onFinish={onFinishBranch} id={selectedID} />
              </Route>
              <Route path={`${path}/employee`}>
                <EmployeeEditForm
                  FormFinish={onFinishEmployee}
                  id={selectedID}
                />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default StructureAdmin;
