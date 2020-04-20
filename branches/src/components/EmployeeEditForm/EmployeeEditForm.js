import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Input,
  Select,
  Typography,
  Form,
  Switch,
  Button,
} from "antd";
import { useHistory } from "react-router-dom";
import { GetEmployee } from "../../api/employee";
import { GetBranchCategory } from "../../api/BranchCategory";
import { GetRoles } from "../../api/BankerRoles";
import PropTypes from "prop-types";
const { Title } = Typography;
const { Option } = Select;
const FormItem = Form.Item;

function EmployeeEditForm(props) {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [rolesData, setRolesData] = useState([]);
  const [branchCatData, setBranchCatData] = useState([]);
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    //if props id is not null, get the data

    async function GetRolesData() {
      const response = await GetBranchCategory();
      setBranchCatData(response);
    }
    async function GetBranchesData() {
      const response = await GetRoles();
      setRolesData(response);
    }
    async function GetData() {
      const response = await GetEmployee(props.id);
      setData(response);
    }

    GetRolesData();
    GetBranchesData();
    if (props.id !== 0) GetData();
  }, [props.id]);

  const Finish = (values) => {
    props.FormFinish(values);
    //console.log("Success:", values);
  };

  useEffect(() => {
    data.map((x) =>
      form.setFieldsValue({
        EmployeeID: x.empId,
        channel: x.empChannelId,
        BranchName: x.empBranchId,
        StaffNumber: x.empStaffNo,
        FirstName: x.empFirstName,
        LastName: x.empLastName,
        BankerRole: x.empBankerRoleId,
        Email: x.empEmail,
      })
    );
  }, [data]);
  const formConfig = {
    labelCol: {
      span: 6,
    },
    labelAlign: "left",
    form,
    onFinish: { Finish },
    //onFinish: { FormFinish },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 2,
      span: 22,
    },
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Row>
          <Col span={12}>
            <Title level={2}> Employee Administration </Title>
          </Col>
        </Row>
        <Row justify="start">
          <Col md={20} lg={16} xl={16}>
            <Form {...formConfig}>
              <Row>
                <Col span={24}>
                  <FormItem
                    name="channelId"
                    label="Channel"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select placeholder="Select Employee Channel">
                      {branchCatData.map((x) => {
                        return <Option key={x.id}>{x.name}</Option>;
                      })}
                    </Select>
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem
                    name="branchId"
                    label="Branch Name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Sandton" value={data.empBranchId} />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem
                    name="staffNo"
                    label="Staff Number"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="NB000000" value={data.empStaffNo} />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem
                    name="firstName"
                    label="First Name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Morena" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem
                    name="lastName"
                    label="Last Name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Mantsha" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem name="bankerRoleId" label="Banker Role">
                    <Select placeholder="Select Banker Role">
                      {rolesData.map((x) => {
                        return <Option key={x.id}>{x.name}</Option>;
                      })}
                    </Select>
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem
                    name="email"
                    label="Email"
                    rules={[
                      {
                        type: "email",
                      },
                    ]}
                  >
                    <Input placeholder="banker@nedbank.co.za" />
                  </FormItem>
                </Col>
              </Row>
              <FormItem {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button
                  htmlType="button"
                  onClick={onReset}
                  style={{ margin: "0 16px" }}
                >
                  Reset
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

EmployeeEditForm.prototype = {
  FormFinish: PropTypes.func.required,
  id: PropTypes.number.required,
};

export default EmployeeEditForm;
