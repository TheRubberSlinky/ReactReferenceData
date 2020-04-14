import React, { FC, useState, useEffect } from 'react'; //general
import { RouteComponentProps } from 'react-router-dom';
import { Page } from '../Components/Page';
//import { QuestionList } from '../Components/QuestionList';
//import { searchQuestions, QuestionData } from '../MockData/TreeData';
/** @jsx jsx */
//import { TreeDisp } from '../Components/TreeDisplay';
import { css, jsx } from '@emotion/core';
import { GeneralDisplay } from '../Components/GeneralDisplay';
//import { Provider } from 'react-redux';
import { Tree } from 'antd';
import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';

export const HuntingPage: FC<RouteComponentProps> = ({ location }) => {
  const [SType, setSType] = useState<string[]>();
  const [treeData, setTreeData] = useState(initTreeData);
  useEffect(() => {
    setSType(['Employee', '0']);
  }, []);
  const ActivateTrapCard = (selectedKeys: any) => {
    if (selectedKeys[0] !== undefined) {
      const splitted = selectedKeys[0].split('-');
      //return results.length === 0 ? null : results[0];
      //console.log(splitted);
      switch (splitted[0]) {
        case 'L':
          setSType(['Product', splitted[1]]);
          break;
        case 'B':
          setSType(['Branch', splitted[1]]);
          break;
        case 'E':
          setSType(['Employee', splitted[1]]);
          break;
      }
      alert(SType);
    }
    //setSType('Product');
    //console.log('yes');
  };
  return (
    // <Provider store={HuntingStore}>
    <Page title="Tree Display">
      {/*  OKAY! so we need: */}
      {/* tree display on the left */}
      <div
        css={css`
          width: 49%;
          float: left;
          background-color: white;
          padding: 15px 20px 20px 20px;
          border-radius: 4px;
          border: 1px solid #999999;
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        <div
          css={css`
            margin: 50px auto 20px auto;
            padding: 30px 20px;
            max-width: 600px;
          `}
        >
          {/* we want to display the tree here directly using antD */}
          <Tree
            showLine={true}
            showIcon={true}
            defaultExpandedKeys={['0-0-0']}
            onSelect={ActivateTrapCard}
            treeData={treeData}
          />
        </div>
      </div>
      <div
        css={css`
          width: 49%;
          float: left;
          background-color: white;
          padding: 15px 20px 20px 20px;
          border-radius: 4px;
          border: 1px solid #999999;
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        {/* <button onClick={ActivateTrapCard}>Button</button> */}
        <GeneralDisplay sType={SType} />
      </div>
      {/* a lovely content dispaly on the right, which changes depending on what you click on the left */}
    </Page>
    // </Provider>
  );
};

const initTreeData = [
  {
    title: 'locale 1',
    key: 'L-1',
    type: 'Locale',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'Branch 1',
        key: 'B-1',
        type: 'Branch',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'Employee1',
            key: 'E-1',
            type: 'Employee',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: 'Branch 2',
        key: 'B-2',
        type: 'Branch',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'Employee2',
            key: 'E-2',
            type: 'Employee',
            icon: <CarryOutOutlined />,
          },
          {
            title: 'Employee3',
            key: 'E-3',
            type: 'Employee',
            icon: <CarryOutOutlined />,
          },
          {
            title: 'Employee4',
            key: 'E-4',
            type: 'Employee',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: 'Branch 3',
        key: 'B-3',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'Employee5',
            key: 'E-5',
            type: 'Employee',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: 'Branch 4',
        key: 'B-4',
        type: 'Branch',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'Employee6',
            key: 'E-6',
            type: 'Employee',
            icon: <CarryOutOutlined />,
          },
          {
            title: 'Employee7',
            key: 'E-7',
            type: 'Employee',
            icon: <CarryOutOutlined />,
            switcherIcon: <FormOutlined />,
          },
        ],
      },
    ],
  },
];
