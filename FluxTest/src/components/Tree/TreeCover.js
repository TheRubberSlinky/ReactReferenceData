import React, { useEffect, useState } from "react";
import { Tree, Menu, Dropdown, Spin, Layout, Input } from "antd";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
//import { GetTreeData, GetTreeChildren } from "./MockData";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { TreeTree } from "./Tree";
import { TreeSearch } from "./TreeSearch";

//fixed calls
const rootURLCall = "https://localhost:5001/api/trees";
const childURLCall = "https://localhost:5001/api/trees/";
const searchURLCall = "https://localhost:5001/api/tree/";

export function BranchTree(props) {
  //hooks
  const [treeData, setTreeData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [search, setSearch] = useState("");

  function TreeUpdate(e) {
    setTreeData(e);
  }

  //reset tree data each time rootBranch gets updated
  useEffect(() => {}, [props.rootBranch]);

  return (
    <Layout>
      <Spin spinning={isLoading}>
        <TreeSearch searchURLCall={searchURLCall} UpdateTree={TreeUpdate} />

        <TreeTree
          data={treeData}
          rootBranch="0"
          onRightClick={props.onRightClick}
          onSelect={props.onSelect}
          rootURLCall={rootURLCall}
          childURLCall={childURLCall}
        />
      </Spin>
    </Layout>
  );
}
BranchTree.propTypes = {
  rootBranch: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
  isBranch: PropTypes.bool, //leave for now
  form: PropTypes.bool, //leave for now
};
