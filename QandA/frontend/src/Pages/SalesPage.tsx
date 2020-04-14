import React, { FC, useState, Fragment, useEffect } from 'react';
import { Page } from '../Components/Page';
import { RouteComponentProps } from 'react-router-dom';
import { SaleData, getAllSales, getSpecificSale } from '../MockData/SalesData';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { gray3, gray6 } from '../Styles';
import { AnswerList } from '../Components/AnswerList';
import { Form, Values, SubmitResult } from './Form';
import { Field } from '../Components/Field';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { ItemList } from '../Components/ItemList';

interface RouteParams {
  SaleID: string;
}

export const SalesPage: FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const [Sale, setSale] = useState<SaleData[] | null>(null); //my state
  useEffect(() => {
    const GetSpecificSale = async (SaleItemID: number) => {
      const foundSale = await getSpecificSale(SaleItemID);
      setSale(foundSale);
    };
    const GetAllSales = async () => {
      const foundSale = await getAllSales();
      setSale(foundSale);
    };
    if (match.params.SaleID) {
      const questionId = Number(match.params.SaleID);
      GetSpecificSale(questionId);
    } else {
      GetAllSales();
    }
  }, [match.params.SaleID]);
  const handleSubmit = async (values: Values) => {
    return true;
  };
  return (
    <Page>
      <div
        css={css`
          background-color: white;
          padding: 15px 20px 20px 20px;
          border-radius: 4px;
          border: 1px solid ${gray6};
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        {Sale?.map(sale => (
          <Fragment>
            <div
              css={css`
                font-size: 19px;
                font-weight: bold;
                margin: 10px 0px 5px;
              `}
            >
              {sale === null ? '' : sale.SaleID}
            </div>
            <p
              css={css`
                margin-top: 0px;
                background-color: white;
              `}
            >
              {`${sale.Name} ${sale.Surname}`}
            </p>
            <div
              css={css`
                font-size: 12px;
                font-style: italic;
                color: ${gray3};
              `}
            >
              {`Sale was made at ${sale.created}`}
            </div>
            <ItemList data={sale.item} />
            {/* <AnswerList data={Sale.item} /> */}
            <div
              css={css`
                margin-top: 20px;
              `}
            >
              <div
                css={css`
                  margin-top: 20px;
                `}
              >
                <DatePicker />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </Page>
  );
};
