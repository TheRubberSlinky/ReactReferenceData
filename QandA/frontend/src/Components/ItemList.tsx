import React, { FC } from 'react';
import { ItemData } from '../MockData/SalesData';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Answer } from './Answer';
import { gray5, PrimaryButton } from '../Styles';
import { Table, Row, Col, Tag } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

interface Props {
  data: ItemData[];
}
interface preps {
  data: ItemData;
}

const handleItemEdit = () => {
  //history.push('/ask');
  alert('Ping');
  //we want to open up a form here to edit this specific row of data
};
export const ItemList: FC<Props> = ({ data }) => (
  <ul
    css={css`
      list-style: none;
      margin: 10px 0 0 0;
      padding: 0;
    `}
  >
    <Table
      dataSource={data}
      columns={[
        {
          title: 'ID',
          dataIndex: 'ItemID',
          key: 'ItemName',
        },
        {
          title: 'Name',
          dataIndex: 'ItemName',
          key: 'ItemName',
        },
        {
          title: 'Price',
          dataIndex: 'ItemPrice',
          key: 'Price',
        },
        {
          title: 'Amount',
          dataIndex: 'ItemQuantity',
          key: 'Amount',
        },
        {
          title: 'Total',
          render: (text, record) => (
            <span>
              <p>{record.ItemPrice * record.ItemQuantity}</p>
            </span>
          ),
        },
        {
          title: 'Action',
          render: (text, record) => (
            <Link
              css={css`
                text-decoration: none;
                color: ${'#0077FF'};
              `}
              to={`../Components/Forms/ItemForm/${record.ItemID}`}
            >
              {`edit ${record.ItemName}`}
            </Link>
            //<PrimaryButton onClick={handleItemEdit}>Edit</PrimaryButton>
          ),
        },
      ]}
      size="small"
    />
    {/* {data.map(test => (
      <li
        css={css`
          border-top: 1px solid ${gray5};
        `}
        key={test.ItemName}
      >
        <Data data={test} />
      </li>
    ))}{' '} */}
  </ul>
);

export const Data: FC<preps> = ({ data }) => (
  <div
    css={css`
      padding: 10px 0px;
    `}
  >
    <div
      css={css`
        padding: 10px 0px;
        font-size: 13px;
      `}
    >
      {`${data.ItemName}
      ${data.ItemPrice}
      ${data.ItemQuantity}`}
    </div>{' '}
    <div
      css={css`
        font-size: 12px;
        font-style: italic;
        color: ${'#000000'};
      `}
    ></div>
  </div>
);
