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
import { GetBranch } from "../../api/Branch";
import PropTypes from "prop-types";
const { Title } = Typography;
const { Option } = Select;
const FormItem = Form.Item;

function BranchEditForm(props) {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    //if props id is not null, get the data
    if (props.id !== 0) setData(GetBranch(props.id));
  }, [props.id]);

  useEffect(() => {
    data.map((x) =>
      form.setFieldsValue({
        channel: x.channelid,
        branchName: x.BranchName,
        ParentBranch: x.ParentBranchId,
        BranchCategory: x.BranchCategoryId,
        isActive: x.isActive,
        isPostBox: x.isPostBox,
        canReceiveSale: x.CanReceiveSale,
      })
    );
  }, [data]);
  const gotoAddEmployee = () => {
    history.push("/admin/structure/employee");
  };

  const formConfig = {
    labelCol: {
      span: 7,
    },
    name: "BranchEditForm",
    labelAlign: "left",
    form,
  };

  const tailLayout = {
    wrapperCol: {
      offset: 2,
      span: 22,
    },
  };

  const branchCategoryOptions = [];

  return (
    <Row justify="center">
      <Col span={24}>
        <Row>
          <Col span={12}>
            <Title level={2}> Branch Administration </Title>
          </Col>
        </Row>
        <Row>
          <Col md={20} lg={17} xl={17}>
            <Form {...formConfig}>
              <Row>
                <Col span={24}>
                  <FormItem
                    name="channel"
                    label="Channel"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select placeholder="Select Channel"></Select>
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem
                    name="branchName"
                    label="Branch Name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Sandton" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem
                    name="ParentBranch"
                    label="Parent Branch"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Johannesburg North" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem
                    name="BranchCategory"
                    label="Branch Category"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select placeholder="Select Branch Category">
                      {branchCategoryOptions}
                    </Select>
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem name="isActive" label="Is Active">
                    <Switch defaultChecked />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem name="isPostBox" label="Is PostBox">
                    <Switch />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem name="canReceiveSale" label="Can Receive Sale">
                    <Switch />
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
        <Row>
          <Col span={12}>
            <Title level={4}> Add branch or employee </Title>
          </Col>
        </Row>
        <Row justify="" gutter={16}>
          <Col span={6}>
            <Button htmlType="button" block>
              add branch
            </Button>
          </Col>
          <Col span={6}>
            <Button htmlType="button" block onClick={gotoAddEmployee}>
              Add employee
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

BranchEditForm.prototype = {
  OnFinish: PropTypes.func.required,
  id: PropTypes.number.required,
};

export default BranchEditForm;
