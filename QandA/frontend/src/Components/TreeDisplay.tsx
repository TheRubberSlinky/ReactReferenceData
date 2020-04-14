import { FC, useState } from 'react';
import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { PageTitle } from './PageTitle';
import { Tree } from 'antd';
import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';

interface Props {
  DisplayOption: Number;
}

const initTreeData = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'my own parent',
        key: 'butt',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: 'a',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: 'parent 1-0',
        key: '0-0-0',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            icon: <CarryOutOutlined />,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
            icon: <CarryOutOutlined />,
          },
          {
            title: 'leaf',
            key: '0-0-0-2',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-1-0',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-2-0',
            icon: <CarryOutOutlined />,
          },
          {
            title: 'leaf',
            key: '0-0-2-1',
            icon: <CarryOutOutlined />,
            switcherIcon: <FormOutlined />,
          },
        ],
      },
    ],
  },
];

//have an inheritance that chooses if we display branches or products
export const TreeDisp: FC<Props> = ({ DisplayOption }) => {
  const [treeData, setTreeData] = useState(initTreeData);

  const onSelect = (selectedKeys: any, info: any) => {
    console.log('selected', selectedKeys, info);
  };
  return (
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
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  );
};
