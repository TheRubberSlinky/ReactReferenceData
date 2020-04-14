import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
//import { Form, Button, Input } from 'antd';
import {
  ItemData,
  PostItemData,
  PostItem,
  getSpecificItem,
} from '../../MockData/SalesData';
import { Page } from '../Page';
import { Field } from '../Field';
import {
  Form,
  required,
  minLength,
  Values,
  noNeg,
  maxLength,
} from '../../Pages/Form';

export interface Props {
  ItemID: string;
}

export const ItemForm: FC<RouteComponentProps<Props>> = ({ match }) => {
  //let submitResult: SubmitResult | undefined;
  const [Item, setItem] = useState<ItemData | null>(); //my state
  useEffect(() => {
    const GetSpecificItem = async (SaleItemID: number) => {
      const foundItem = await getSpecificItem(SaleItemID);
      setItem(foundItem);
    };
    GetSpecificItem(Number(match.params.ItemID));
  }, [match.params.ItemID]);
  const handleSubmit = async (values: Values) => {
    console.log('thing be doo');
    const result = await PostItem({
      ItemID: 99,
      ItemName: values.Name,
      ItemPrice: values.price,
      ItemQuantity: values.Amount,
      ItemBrand: 5,
    });
    return { success: result ? true : false };
  };
  return (
    <Page title="Item">
      <Form
        submitCaption="Submit Your Question"
        validationRules={{
          Name: [
            { validator: required },
            { validator: minLength, arg: 10 },
            { validator: maxLength, arg: 20 },
          ],
          Price: [{ validator: required }, { validator: noNeg }],
          Amount: [{ validator: required }, { validator: noNeg }],
        }}
        onSubmit={handleSubmit}
        //submitResult={submitResult}
        failureMessage="There was a problem with your question"
        successMessage="Your question was successfully submitted"
      >
        <Field name="Name" label="Name" type="Text" />
        <Field name="Price" label="Price" type="Number" />
        <Field name="Amount" label="Amount" type="Number" />
        <Field name="Amount" label="Amount" type="DropDown" />
      </Form>
    </Page>
  );
};
