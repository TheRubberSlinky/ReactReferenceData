import React, { useEffect, useState, Fragment } from "react";
import { Tree, Button, Menu, Dropdown, Form } from "antd";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import { GetTreeData, GetTreeChildren } from "./MockData";
import axios from "axios";
//import { onRightClick } from "./popup";

function updateTreeData(list, key, children) {
  return list.map((node) => {
    if (node.key === key) {
      return { ...node, children };
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
function GetChildNodes(ParentKey) {
  const url = `https://localhost:5001/api/trees/${ParentKey}`;
  //debugger;
  let obj = [];
  fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(GetTreeChildren(ParentKey));
      console.log(response);
      response.map((Main) => {
        obj.push({
          title: Main.data[2].value,
          key: Main.data[1].value,
          isLeaf: Main.data[3].value === "0" ? false : true,
        });
      });
    })
    .catch((error) => {
      console.log(error);
      return obj;
    });
  let children = obj; //GetTreeChildren(ParentKey);
  return children;
}

export function Demo(props) {
  const [treeData, setTreeData] = useState([]);
  const [RCData, setRCData] = useState([]);
  const url = `https://localhost:5001/api/trees`;

  let DataTree = [];
  useEffect(() => {
    let obj = [];
    //const response = await fetch(url);
    //console.log(response);
    fetch(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/vnd.github.cloak-preview",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        //console.log(response);
        response.map((Main) => {
          obj.push({
            title: Main.data[0].value,
            key: Main.data[1].value,
            isLeaf: Main.data[2].value === "0" ? false : true,
          });
        });
        setTreeData(obj);
      })
      .catch((error) => {
        console.log(error);
        return obj;
      });
    if (treeData) setTreeData(GetTreeData());
    //if (treeData) setTreeData(fetchData());
    //DataTree = fetchData();
  }, []);
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  function onLoadData({ key, children }) {
    return new Promise((resolve) => {
      if (children) {
        resolve();
        return;
      }
      const childNodes = GetChildNodes(key);
      setTimeout(() => {
        setTreeData((origin) => updateTreeData(origin, key, childNodes));
        resolve();
      }, 1000);
    });
  }
  const menu = (
    <Menu>
      {/* see if it is a branch, if it is, allow add new branch and add new employee */}
      {!RCData.isLeaf ? (
        <Menu.Item key="1" onClick={() => props.myClick("Branch", RCData.key)}>
          Add new Branch
        </Menu.Item>
      ) : (
        ""
      )}
      {!RCData.isLeaf ? (
        <Menu.Item
          key="2"
          onClick={() => props.myClick("Employee", RCData.key)}
          value="Employee"
        >
          Add new Employee
        </Menu.Item>
      ) : (
        ""
      )}
    </Menu>
  );
  const onDragEnter = (info) => {
    console.log(info);
  };
  //on right click, open a dropdown at that location
  const onRightClick = (event) => {
    setRCData(event.node);
    console.log(event);
  };

  //on drop, make a popup ask if they are sure they want to move X to Y
  const onDrop = (info) => {
    if (
      !window.confirm(
        `Are you sure you wish to move ${info.dragNode.title} into ${info.node.title}`
      )
    )
      return;
    console.log(info);
    console.log(`DragNode: ${info.dragNode.title}   Node: ${info.node.title}`);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = [...treeData];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert
        item.children.push(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert
        item.children.unshift(dragObj);
      });
    } else {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }
    //update actual system as well, if it works then set the tree data
    setTreeData(data);
  };

  return (
    <Dropdown overlay={menu} trigger={["contextMenu"]}>
      <div>
        <Tree
          {...layout}
          style={{ height: "auto", minHeight: "570px" }}
          loadData={onLoadData}
          onSelect={props.mySelect}
          treeData={treeData}
          draggable
          onDragEnter={onDragEnter}
          onDrop={onDrop}
          onRightClick={onRightClick}
        />
      </div>
    </Dropdown>
  );
}

//TODO: move the keys away from a delimited string
//      add popup instead of buttons to add
Demo.propTypes = {
  mySelect: PropTypes.func.isRequired,
  myClick: PropTypes.func.isRequired,
};

export default Demo;
