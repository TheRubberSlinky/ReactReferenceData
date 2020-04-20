import React, { useEffect, useState } from "react";
import {
  Tree,
  Row,
  Col,
  Input,
  Typography,
  Spin,
  message,
  Dropdown,
  Menu,
} from "antd";
import { BankOutlined, UserOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { GetBranchChildren, SearchStructure } from "../../api/StructureApi";
import FormItem from "antd/lib/form/FormItem";
const { Search } = Input;
const { Paragraph } = Typography;

function updateTreeData(list, key, children) {
  return list.map((node) => {
    if (node.key === key) {
      let isLeaf = children.length === 0;
      return { ...node, children, isLeaf };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children),
      };
    }
    return node;
  });
}

function StructureTree(props) {
  const [searching, setIsSearching] = useState(false);
  const [treeLoading, setTreeLoad] = useState(true);
  const [treeData, setTreeData] = useState([]);
  const [RCData, setRCData] = useState([]);

  useEffect(() => {
    const loadCurrentUserBranch = async () => {
      const response = await GetBranchChildren();
      if (response.errorMessage)
        message.error("Failed to load tree structure, try again later");
      else {
        const treeData = response.map((node) => {
          node.icon = node.isBranch ? <BankOutlined /> : <UserOutlined />;
          node.isLeaf = !node.isBranch;
          return node;
        });
        setTreeData(treeData);
        setTreeLoad(false);
      }
    };
    loadCurrentUserBranch();
  }, [props.branchCode]);

  //on right click, open a dropdown at that location
  const onRC = (event) => {
    setRCData(event.node);
    console.log(event.node);
  };
  //Right click menu
  const menu = (
    <Menu>
      {/* see if it is a branch, if it is, allow add new branch and add new employee */}
      {RCData.isBranch ? (
        <Menu.Item
          key="1"
          onClick={() => props.onMenuClick("Branch", RCData.key)}
        >
          Add new Branch
        </Menu.Item>
      ) : (
        ""
      )}
      {RCData.isBranch ? (
        <Menu.Item
          key="2"
          onClick={() => props.onMenuClick("Employee", RCData.key)}
          value="Employee"
        >
          Add new Employee
        </Menu.Item>
      ) : (
        ""
      )}
    </Menu>
  );

  const mapStructureNode = (node) => {
    node.icon = node.isBranch ? <BankOutlined /> : <UserOutlined />;
    node.isLeaf = !node.isBranch;
    return node;
  };

  const handleSearch = async (searchKey) => {
    if (!searchKey) return;
    setIsSearching(true);
    setTreeLoad(true);
    setTreeData([]);
    const response = await SearchStructure(searchKey);
    if (response.errorMessage) message.error(response.errorMessage);
    else {
      const searchedNodes = response.map(mapStructureNode);
      setTreeData(searchedNodes);
      setIsSearching(false);
      setTreeLoad(false);
    }
  };

  const onLoadData = ({ key, children }) => {
    if (children.length !== 0) {
      return Promise.resolve();
    }
    const loadSelectedNodeChildren = async () => {
      const response = await GetBranchChildren(key);
      if (response.errorMessage) message.error(response.errorMessage);
      else {
        const expandedChildren = response.map(mapStructureNode);
        setTreeData((origin) => {
          return updateTreeData(origin, key, expandedChildren);
        });
      }
    };
    return loadSelectedNodeChildren();
  };

  return (
    <Row justify="space-between">
      <Col span={24}>
        <Row>
          <Col span={24}>
            <Search
              placeholder="search"
              loading={searching}
              onSearch={handleSearch}
              enterButton
              rules={[
                {
                  min: 3,
                },
              ]}
            />
          </Col>
          <Col span={16}>
            <Paragraph className="light-text">
              Enter a branch name or code OR enter an employee surname OR staff
              number
            </Paragraph>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Spin size="small" spinning={treeLoading}>
              <Dropdown overlay={menu} trigger={["contextMenu"]}>
                <div>
                  <Tree
                    showIcon
                    height={500}
                    showLine={true}
                    loadData={onLoadData}
                    treeData={treeData}
                    onSelect={props.onSelect}
                    draggable={props.draggable}
                    blockNode={props.draggable}
                    onRightClick={onRC}
                  />
                </div>
              </Dropdown>
            </Spin>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

StructureTree.prototype = {
  branchCode: PropTypes.number.Required,
  draggable: PropTypes.bool.Required,
  onDrop: PropTypes.func,
  onSelect: PropTypes.func.Required,
  onMenuClick: PropTypes.func.Required,
};

export default StructureTree;
