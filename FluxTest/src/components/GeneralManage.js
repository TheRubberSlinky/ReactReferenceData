import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import { Form, Input, NumberInput, Select, Layout, Button } from "antd";

import {
  getSpecificEmployeeByKey,
  getSpecificBranchByKey,
  PostData,
  GetTreeData,
} from "./MockData";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "This field is required!",
  types: {
    email: "Not a validate email!",
    number: "Not a validate number!",
  },
  number: {
    range: "Must be between ${min} and ${max}",
  },
};
const defaultBranch = [
  {
    key: "0",
    data: [
      {
        name: "BranchCode",
        value: "",
      },
      {
        name: "BranchName",
        value: "",
      },
      {
        name: "BranchCategory",
        value: "",
      },
      {
        name: "ParentBranch",
        value: "",
      },
    ],
  },
];
const defaultEmployee = [
  {
    key: "0",
    data: [
      {
        name: "EmployeeNumber",
        value: "",
      },
      {
        name: "EmployeeName",
        value: "",
      },
      {
        name: "EmployeeSurname",
        value: "",
      },
      {
        name: "EmployeeLastLoggedIn",
        value: "",
      },
      {
        name: "EmployeeID",
        value: "",
      },
      {
        name: "EmployeeBranch",
        value: [
          { value: "Branch1" },
          { value: "Branch2" },
          { value: "Branch3" },
          { value: "Branch4" },
          { value: "Branch5" },
        ],
      },
    ],
  },
];
const { Option } = Select;
export function GeneralDisplayPage(props) {
  const [form] = Form.useForm();
  const [data, setData] = useState(defaultEmployee);

  let Data = defaultBranch;

  const onFinish = (values) => {
    console.log(props.type, props.isEdit, values);
    PostData(props.type, props.isEdit, values);
    //post it
  };
  // if (props.GenKey !== undefined) {
  //   switch (props.type) {
  //     case "Branch":
  //       Data = props.isEdit
  //         ? getSpecificBranchByKey(props.GenKey)
  //         : defaultBranch;
  //       break;
  //     case "Employee":
  //       Data = props.isEdit
  //         ? getSpecificEmployeeByKey(props.GenKey)
  //         : defaultEmployee;
  //       break;
  //     default:
  //       break;
  //   }
  //}

  useEffect(() => {
    // async function GetTreeData() {
    //   const url = `https://localhost:5001/api/tree?code=${props.GenKey}&type=${
    //     props.type === "Branch" ? 0 : 1
    //   }`;
    //   let obj = [];
    //   let objDta = [];
    //   await fetch(url, {
    //     method: "GET",
    //     headers: new Headers({
    //       Accept: "application/vnd.github.cloak-preview"
    //     })
    //   })
    //     .then(res => res.json())
    //     .then(response => {
    //       console.log(response);
    //       response.map(Main => {
    //         objDta.push({
    //           name: Main.name,
    //           value: Main.value
    //         });
    //         // title: Main.data[0].value,
    //         // key: Main.data[1].value,
    //         // isLeaf: Main.data[2].value === "0" ? false : true
    //         obj.push({ key: Main.key, Data: objDta });
    //       });
    //       setData(obj);
    //       data[0].data.map(x =>
    //         form.setFieldsValue({
    //           [x.name]: x.value
    //         })
    //       );
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }
    // GetTreeData();
  }, []);
  return (
    <Layout>
      {data.map((memes) => {
        return (
          <>
            <h2>
              {props.isEdit
                ? `Editing for ${props.GenKey}`
                : `Adding new ${props.type} for ${props.GenKey}`}
            </h2>
            <Form
              form={form}
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              {memes.data.map((field) => {
                return Array.isArray(field.value) ? (
                  <div>
                    {field.name}
                    <Select name={field.name} style={{ width: "65%" }}>
                      {field.value.map((option) => {
                        return (
                          <Option value={option.value}>{option.value}</Option>
                        );
                      })}
                    </Select>
                  </div>
                ) : (
                  <Form.Item label={field.name} name={field.name}>
                    <Input label={field.name} />
                  </Form.Item>
                );
              })}
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </>
        );
      })}
    </Layout>
  );
}

GeneralDisplayPage.propTypes = {
  GenKey: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default GeneralDisplayPage;
