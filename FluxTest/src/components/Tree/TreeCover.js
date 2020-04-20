import React, { useEffect, useState } from "react";
import { Tree, Menu, Dropdown, Spin, Layout, Input } from "antd";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
//import { GetTreeData, GetTreeChildren } from "./MockData";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { TreeTree } from "./Tree";
import { testSearch } from "./TreeSearch";
import { UpdateCall, treeSearch } from "./calls";

//fixed calls
const rootURLCall = "https://localhost:5001/api/trees/"; //link to getting the root branches
const childURLCall = "https://localhost:5001/api/trees/"; //link to getting the children
const searchURLCall = "https://localhost:5001/api/tree/"; //link to search
const getEmployeeInfoCall = ""; //link to get all employee info
const getBranchInfoCall = ""; //link to get all branch info
const updateBranchCall = ""; //link to update the branch
const updateEmployeeCall = ""; //link to update the employee

const Search = Input.Search;
export function BranchTree(props) {
  //hooks
  const [treeData, setTreeData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [search, setSearch] = useState("");

  function TreeUpdate(e) {
    if (!e) setTreeData([]);
    else setTreeData(e);
  }

  //async function to search the tree
  async function mainSearch(e) {
    if (e != "") {
      //const url = `${props.searchURLCall}${e}`;
      const obj = await treeSearch(searchURLCall, e);
      TreeUpdate(obj);
    } else {
      TreeUpdate();
    }
  }

  async function UpdateDrag(dragNode, node) {
    // await UpdateCall(
    //   getEmployeeInfoCall,
    //   updateEmployeeCall,
    //   getBranchInfoCall,
    //   updateBranchCall,
    //   node,
    //   dragNode
    // );
  }

  //reset tree data each time rootBranch gets updated
  useEffect(() => {}, [props.rootBranch]);

  return (
    <Layout>
      <Spin spinning={isLoading}>
        {/* <Search searchURLCall={searchURLCall} UpdateTree={TreeUpdate} /> */}

        <Search
          placeholder="search..."
          enterButton="Search"
          size="medium"
          onSearch={mainSearch}
        />
        <TreeTree
          data={treeData}
          rootBranch="0"
          UpdateDrag={UpdateDrag}
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
