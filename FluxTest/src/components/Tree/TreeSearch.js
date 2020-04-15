import React, { useEffect, useState } from "react";
import { Tree, Menu, Dropdown, Spin, Layout, Input } from "antd";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";

//constants
const Search = Input.Search;

export function TreeSearch(props) {
  //async function to search the tree
  async function treeSearch(e) {
    if (e != "") {
      const url = `${props.searchURLCall}${e}`;
      let obj = [];
      const response = await fetch(url, {
        method: "GET",
      });
      const json = await response.json();
      json.map((Main) => {
        obj.push({
          title: Main.data[2].value,
          key: Main.data[1].value,
          icon:
            Main.data[3].value === "0" ? <HomeOutlined /> : <UserOutlined />,
          isLeaf: Main.data[3].value === "0" ? false : true,
        });
      });
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
      onSearch={treeSearch}
    />
  );
}
TreeSearch.propTypes = {
  UpdateTree: PropTypes.func.isRequired,
  searchURLCall: PropTypes.string.isRequired,
};
