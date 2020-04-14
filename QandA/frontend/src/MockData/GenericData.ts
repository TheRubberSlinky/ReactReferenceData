import { wait } from '@testing-library/react';

import axios from 'axios';
import { Redirect } from 'react-router-dom';

export interface GenericLoadData {
  key: number;
  data: FormData[];
}

export interface FormData {
  name: string;
  value: any;
}
//get alls

//get specifics
export const getSpecificBranchByKey = async (
  param: number,
): Promise<GenericLoadData | null> => {
  const results = Branches.filter(q => q.key === param);
  return results.length === 0 ? null : results[0];
};
export const getSpecificBranchByData = async (
  Name: string,
  value: string,
): Promise<GenericLoadData | null> => {
  const results = Branches.filter(q =>
    q.data.filter(x => x.name === Name && x.value === value),
  );
  return results.length === 0 ? null : results[0];
};

export const getSpecificEmployeeByKey = async (
  param: number,
): Promise<GenericLoadData | null> => {
  const results = Employees.filter(q => q.key === param);
  return results.length === 0 ? null : results[0];
};
export const getSpecificEmployeeByData = async (
  Name: string,
  value: string,
): Promise<GenericLoadData | null> => {
  const results = Employees.filter(q =>
    q.data.filter(x => x.name === Name && x.value === value),
  );
  return results.length === 0 ? null : results[0];
};

//here be the mock data for now
const Branches: GenericLoadData[] = [
  {
    key: 1,
    data: [
      {
        name: 'BranchCode',
        value: '182',
      },
      {
        name: 'BranchName',
        value: 'Clearwater',
      },
      {
        name: 'BranchCategory',
        value: 'Branch',
      },
      {
        name: 'ParentBranch',
        value: 'Locale1',
      },
    ],
  },
  {
    key: 2,
    data: [
      {
        name: 'BranchCode',
        value: '526',
      },
      {
        name: 'BranchName',
        value: 'cresta',
      },
      {
        name: 'BranchCategory',
        value: 'Credit card branch',
      },
      {
        name: 'ParentBranch',
        value: 'Locale1',
      },
    ],
  },
  {
    key: 3,
    data: [
      {
        name: 'BranchCode',
        value: '55',
      },
      {
        name: 'BranchName',
        value: 'westgate',
      },
      {
        name: 'BranchCategory',
        value: 'Home loans branch',
      },
      {
        name: 'ParentBranch',
        value: 'Locale1',
      },
    ],
  },
  {
    key: 4,
    data: [
      {
        name: 'BranchCode',
        value: '19',
      },
      {
        name: 'BranchName',
        value: 'key west',
      },
      {
        name: 'BranchCategory',
        value: 'Fraud branch',
      },
      {
        name: 'ParentBranch',
        value: 'Locale1',
      },
    ],
  },
];

const Employees: GenericLoadData[] = [
  {
    key: 1,
    data: [
      {
        name: 'EmployeeNumber',
        value: 'cc309921',
      },
      {
        name: 'EmployeeName',
        value: 'Tristan',
      },
      {
        name: 'EmployeeSurname',
        value: 'Donovan',
      },
      {
        name: 'EmployeeLastLoggedIn',
        value: '2020-03-12',
      },
      {
        name: 'EmployeeID',
        value: '9610225060083',
      },
      {
        name: 'EmployeeBranch',
        value: 182,
      },
    ],
  },
  {
    key: 2,
    data: [
      {
        name: 'EmployeeNumber',
        value: 'cc302066',
      },
      {
        name: 'EmployeeName',
        value: 'mulalo',
      },
      {
        name: 'EmployeeSurname',
        value: 'mudao',
      },
      {
        name: 'EmployeeLastLoggedIn',
        value: '2020-03-12',
      },
      {
        name: 'EmployeeID',
        value: '5678341290875',
      },
      {
        name: 'EmployeeBranch',
        value: 77,
      },
    ],
  },
  {
    key: 3,
    data: [
      {
        name: 'EmployeeNumber',
        value: 'cc059873',
      },
      {
        name: 'EmployeeName',
        value: 'herman',
      },
      {
        name: 'EmployeeSurname',
        value: 'Nel motors',
      },
      {
        name: 'EmployeeLastLoggedIn',
        value: '2020-03-12',
      },
      {
        name: 'EmployeeID',
        value: '45838489684353',
      },
      {
        name: 'EmployeeBranch',
        value: 57,
      },
    ],
  },
  {
    key: 4,
    data: [
      {
        name: 'EmployeeNumber',
        value: 'cc034568',
      },
      {
        name: 'EmployeeName',
        value: 'Louis',
      },
      {
        name: 'EmployeeSurname',
        value: 'Armstrong',
      },
      {
        name: 'EmployeeLastLoggedIn',
        value: '2020-03-12',
      },
      {
        name: 'EmployeeID',
        value: '2348794835435',
      },
      {
        name: 'EmployeeBranch',
        value: 57,
      },
    ],
  },
  {
    key: 5,
    data: [
      {
        name: 'EmployeeNumber',
        value: 'cc284564',
      },
      {
        name: 'EmployeeName',
        value: 'Tiisetso',
      },
      {
        name: 'EmployeeSurname',
        value: 'smith',
      },
      {
        name: 'EmployeeLastLoggedIn',
        value: '2020-03-12',
      },
      {
        name: 'EmployeeID',
        value: '4538963578493543',
      },
      {
        name: 'EmployeeBranch',
        value: 57,
      },
    ],
  },
  {
    key: 6,
    data: [
      {
        name: 'EmployeeNumber',
        value: 'cc309921',
      },
      {
        name: 'EmployeeName',
        value: 'Mark',
      },
      {
        name: 'EmployeeSurname',
        value: 'Holloway',
      },
      {
        name: 'EmployeeLastLoggedIn',
        value: '2020-03-12',
      },
      {
        name: 'EmployeeID',
        value: '345864839579843',
      },
      {
        name: 'EmployeeBranch',
        value: 57,
      },
    ],
  },
  {
    key: 7,
    data: [
      {
        name: 'EmployeeNumber',
        value: 'cc485647',
      },
      {
        name: 'EmployeeName',
        value: 'michael',
      },
      {
        name: 'EmployeeSurname',
        value: 'Jordan',
      },
      {
        name: 'EmployeeLastLoggedIn',
        value: '2020-03-12',
      },
      {
        name: 'EmployeeID',
        value: '3495867583464',
      },
      {
        name: 'EmployeeBranch',
        value: 57,
      },
    ],
  },
];
