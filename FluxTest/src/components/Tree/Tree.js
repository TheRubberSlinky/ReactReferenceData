import React, { useEffect, useState } from "react";
import { Tree, Menu, Dropdown, Spin, Layout, Input } from "antd";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
//import { GetTreeData, GetTreeChildren } from "./MockData";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { GetChildNodes } from "./calls";

//constants
const Search = Input.Search;

//fixed layouts
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

//fixed pre load data
const baseTree = [{ title: "Branch1", key: "1", isLeaf: false }];

export function TreeTree(props) {
  //hooks
  const [treeData, setTreeData] = useState(baseTree);
  const [RCData, setRCData] = useState([]);

  //update with new children
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

  //call to get root object
  function GetRoot() {
    let obj = [];
    fetch(props.rootURLCall, {
      method: "GET",
      headers: new Headers({
        Accept: "application/vnd.github.cloak-preview",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        response.map((Main) => {
          //   obj.push({
          //     title: Main.name,
          //     key: Main.id,
          //     icon: <HomeOutlined />,
          //     isLeaf: false,
          //   });

          obj.push({
            //update this to represent his code
            title: Main.data[0].value,
            key: Main.data[1].value,
            icon:
              Main.data[2].value === "0" ? <HomeOutlined /> : <UserOutlined />,
            isLeaf: Main.data[2].value === "0" ? false : true,
            //loaded: false,
          });
        });
        setTreeData(obj);
      })
      .catch((error) => {
        console.log(error);
        return obj;
      });
  }

  //async function to find new children
  async function onLoadData({ key, children }) {
    const childNodes = await GetChildNodes(props.childURLCall, key);
    return new Promise((resolve) => {
      if (children) {
        resolve();
        return;
      }
      setTreeData((origin) => updateTreeData(origin, key, childNodes));
      resolve();
    });
  }

  //reset tree data each time rootBranch gets updated
  useEffect(() => {
    if (props.data.length !== 0) {
      setTreeData(props.data);
    } else {
      setTreeData(GetRoot());
    }
  }, [props.data]);

  //Right click menu
  const menu = (
    <Menu>
      {/* see if it is a branch, if it is, allow add new branch and add new employee */}
      {RCData.isBranch ? (
        <Menu.Item
          key="1"
          onClick={() => props.onRightClick("Branch", RCData.key)}
        >
          Add new Branch
        </Menu.Item>
      ) : (
        ""
      )}
      {RCData.isBranch ? (
        <Menu.Item
          key="2"
          onClick={() => props.onRightClick("Employee", RCData.key)}
          value="Employee"
        >
          Add new Employee
        </Menu.Item>
      ) : (
        ""
      )}
    </Menu>
  );

  //on right click, open a dropdown at that location
  const onRC = (event) => {
    setRCData(event.node);
    console.log(event);
  };

  const onDragEnter = (info) => {
    console.log(info);
  };
  //on drop, make a popup ask if they are sure they want to move X to Y
  const onDrop = (info) => {
    if (info.node.isLeaf) {
      return;
    }
    console.log(info.node);
    console.log(info.dragNode);
    debugger;
    const dPos = info.node.props.pos.split("-");
    const test = info.dragNode.props.pos.split("-");
    const tst = info.dragNode.props.pos.indexOf(info.node.props.pos);
    //ensure the node is being dragged to a new item, instead of the same position
    alert(test);
    if (
      !window.confirm(
        `Are you sure you wish to move ${info.dragNode.title} into ${info.node.title}`
      )
    )
      return;
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

    props.UpdateDrag(info.dragNode, info.node);
    //update actual system as well, if it works then set the tree data
    setTreeData(data);
  };

  return (
    <Dropdown overlay={menu} trigger={["contextMenu"]}>
      <div>
        <Tree
          {...layout}
          showIcon={true}
          style={{ height: "auto", minHeight: "570px" }}
          loadData={onLoadData}
          onSelect={props.onSelect}
          treeData={treeData}
          defaultExpandAll={false}
          allowClear={true}
          loadedKeys={[]}
          draggable
          onDragEnter={onDragEnter}
          onDrop={onDrop}
          onRightClick={onRC}
        />
      </div>
    </Dropdown>
  );
}
TreeTree.propTypes = {
  data: PropTypes.array.isRequired,
  rootURLCall: PropTypes.string.isRequired,
  childURLCall: PropTypes.string.isRequired,
  UpdateDrag: PropTypes.func.isRequired,
  rootBranch: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
  isBranch: PropTypes.bool, //leave for now
  form: PropTypes.bool, //leave for now
};
