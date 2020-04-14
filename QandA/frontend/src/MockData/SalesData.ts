import { wait } from '@testing-library/react';

import axios from 'axios';
import { Redirect } from 'react-router-dom';

export interface SaleData {
  SaleID: number;
  Name: string;
  Surname: string;
  IDNumber: string;
  cellNumber: string;
  created: Date;
  item: ItemData[];
}

export interface ItemData {
  ItemID: number;
  ItemName: string;
  ItemQuantity: number;
  ItemPrice: number;
  ItemBrand: number;
}

export const getSpecificItem = async (
  param: number,
): Promise<ItemData | null> => {
  const results = Sales.filter(q => q.item.filter(x => x.ItemID === param));
  return results.length === 0 ? null : results[0].item[0];
};

export const getSpecificSale = async (
  param: number,
): Promise<SaleData[] | null> => {
  const results = Sales.filter(q => q.SaleID === param);
  return results.length === 0 ? null : results;
};

// export const getSalesByItem = async (criteria: string): Promise<SaleData[]> => {
//   return Sales.filter(
//     q =>
//       q.item.ItemName.toLowerCase().indexOf(criteria.toLowerCase()) >= 0 ||
//       q.item.ItemID,
//   );
// };

export const getAllSales = async (): Promise<SaleData[]> => {
  return Sales;
};

export const AddSale = async (criteria: SaleData): Promise<string> => {
  //add the sale to the list
  return 'yes';
};

export const EditSale = async (criteria: number): Promise<string> => {
  //edit a sale based on the sale ID
  return 'yes';
};
export interface PostItemData {
  ItemID: number;
  ItemName: string;
  ItemQuantity: number;
  ItemPrice: number;
  ItemBrand: number;
}
export const PostItemData = async (criteria: ItemData): Promise<void> => {};

export const PostItem = async (
  answer: PostItemData,
): Promise<ItemData | undefined> => {
  //await wait(500);
  const question = Sales.filter(q => q.SaleID === 1)[0];
  const answerInQuestion: ItemData = {
    ItemID: 99,
    ...answer,
  };
  question.item.push(answerInQuestion);
  return answerInQuestion;
};

//here be the mock data for now
const Sales: SaleData[] = [
  {
    SaleID: 1,
    Name: 'Jennifer',
    Surname: 'yes',
    IDNumber: '1234567890',
    cellNumber: '00879653342',
    created: new Date(),
    item: [
      {
        ItemID: 1,
        ItemName: 'butter',
        ItemQuantity: 5,
        ItemPrice: 20,
        ItemBrand: 5,
      },
      {
        ItemID: 2,
        ItemName: 'cream',
        ItemQuantity: 5,
        ItemPrice: 15,
        ItemBrand: 5,
      },
      {
        ItemID: 3,
        ItemName: 'toast',
        ItemQuantity: 5,
        ItemPrice: 5,
        ItemBrand: 5,
      },
      {
        ItemID: 4,
        ItemName: 'eggs',
        ItemQuantity: 5,
        ItemPrice: 10,
        ItemBrand: 5,
      },
      {
        ItemID: 5,
        ItemName: 'hashbrowns',
        ItemQuantity: 5,
        ItemPrice: 40,
        ItemBrand: 5,
      },
      {
        ItemID: 6,
        ItemName: 'coffee',
        ItemQuantity: 5,
        ItemPrice: 26,
        ItemBrand: 5,
      },
    ],
  },
  {
    SaleID: 2,
    Name: 'Michael',
    Surname: 'house',
    IDNumber: '94857634192',
    cellNumber: '6543756435',
    created: new Date(),
    item: [
      {
        ItemID: 2,
        ItemName: 'cream',
        ItemQuantity: 4,
        ItemPrice: 15,
        ItemBrand: 5,
      },
    ],
  },
];
