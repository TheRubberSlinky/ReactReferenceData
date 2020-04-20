import React, { useEffect, useState } from "react";
import { Tree, Menu, Dropdown, Spin, Layout, Input } from "antd";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";

//async function to search the tree
export async function treeSearch(Searchurl, e) {
  if (e != "") {
    const url = `${Searchurl}${e}`;
    let obj = [];
    const response = await fetch(url, {
      method: "GET",
    });
    const json = await response.json();
    json.map((Main) => {
      obj.push({
        title: Main.data[2].value,
        key: Main.data[1].value,
        icon: Main.data[3].value === "0" ? <HomeOutlined /> : <UserOutlined />,
        isLeaf: Main.data[3].value === "0" ? false : true,
        //loaded: false,
      });
    });
    return obj;
  } else {
    return [];
  }
}

export async function GetChildNodes(callUrl, ParentKey) {
  const url = `${callUrl}${ParentKey}`;
  let obj = [];
  const response = await fetch(url, {
    method: "GET",
  });
  const json = await response.json();
  json.map((Main) => {
    // obj.push({
    //   title: Main.name,
    //   key: Main.id,
    //   //icon: <HomeOutlined />, //find out how the response works to see fi it is a branch or employee
    //   isLeaf: false, //find out ow the response works to see if it is a branch or employee
    // });
    obj.push({
      title: Main.data[2].value,
      key: Main.data[1].value,
      icon: Main.data[3].value === "0" ? <HomeOutlined /> : <UserOutlined />,
      isLeaf: Main.data[3].value === "0" ? false : true,
      //loaded:false,
    });
  });
  return obj;
}

export async function UpdateCall(
  EmployeegetURL,
  employeeputURL,
  branchGetURL,
  branchPutURL,
  node,
  dragNode
) {
  const newBranch = node.key;
  if (dragNode.isLeaf) {
    let url = `${EmployeegetURL}${dragNode.key}`;
    let Employee = [];
    let response = await fetch(url, {
      method: "GET",
    });
    let json = await response.json();
    json.map((Main) => {
      Employee.push({
        empId: Main.id,
        empIsActive: Main.isActive,
        empBranchId: newBranch,
        empChannelId: Main.channel.id,
        empEmail: Main.empEmail,
        empFirstName: Main.firstName,
        empLastName: Main.lastName,
        empBankerRoleId: Main.bankerRole.id,
        empStaffNo: Main.staffNo,
      });
    });

    url = `${employeeputURL}${dragNode.key}`;
    //create a body to put the info in
    response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(Employee),
    });
    json = await response.json();
    //TODO: finish off this response depending on the result
  } else {
    let url = `${branchGetURL}${dragNode.key}`;
    let Branch = [];
    let response = await fetch(url, {
      method: "GET",
    });
    let json = await response.json();
    json.map((Main) => {
      Branch.push({
        Id: Main.id,
        BranchCode: Main.branchCode,
        BranchName: Main.branchName,
        BranchCategoryId: Main.branchCategory.id,
        ChannelId: Main.channel.id,
        CanReceiveSale: Main.CanReceiveSale,
        ParentBranchId: newBranch, //or null
        RegionId: Main.region.id, //or null
        IsActive: Main.isActive,
        IsPostBox: Main.isPostBox,
        OldCode: Main.oldCode, //or null
      });
    });

    url = `${branchPutURL}${dragNode.key}`;
    //make a body of the previous object
    response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(Branch),
    });
    json = await response.json();

    //TODO: complete this code
  }
}
