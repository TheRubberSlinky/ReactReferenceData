import React, { useEffect, useState } from "react";
import { Tree, Menu, Dropdown, Spin, Layout, Input } from "antd";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { treeSearch } from "./calls";

//constants
const Search = Input.Search;

export function testSearch(props) {
  //async function to search the tree
  async function mainSearch(e) {
    if (e != "") {
      //const url = `${props.searchURLCall}${e}`;
      const obj = await treeSearch(props.searchURLCall, e);
      props.UpdateTree(obj);
    } else {
      props.UpdateTree();
    }
  }

  return (
    <Search
      placeholder="search..."
      enterButton="Search"
      size="medium"
      onSearch={mainSearch}
    />
  );
}
testSearch.propTypes = {
  UpdateTree: PropTypes.func.isRequired,
  searchURLCall: PropTypes.string.isRequired,
};
