import React, { FC, useState, useEffect } from 'react';
import {
  getSpecificEmployeeByKey,
  getSpecificBranchByKey,
  GenericLoadData,
} from '../MockData/GenericData';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { gray5 } from '../Styles';
import { Switch } from 'react-router-dom';

interface Props {
  sType: string[] | undefined;
}

export const GeneralDisplay: FC<Props> = ({ sType }) => {
  const [Data, setData] = useState<GenericLoadData | null>();
  useEffect(() => {
    const GetSpecificEmployee = async () => {
      const DataFound = await getSpecificEmployeeByKey(
        Number(sType ? sType[1] : '1'),
      );
      setData(DataFound);
    };
    const GetSpecificBranch = async () => {
      const DataFound = await getSpecificBranchByKey(
        Number(sType ? sType[1] : '1'),
      );
      setData(DataFound);
    };
    switch (sType ? sType[0] : 'Employee') {
      case 'Locale':
      case 'Branch':
        GetSpecificBranch();
        break;
      case 'Employee':
        GetSpecificEmployee();
        break;
    }
  }, [sType]);
  return (
    <ul
      css={css`
        list-style: none;
        margin: 10px 0 0 0;
        padding: 0;
      `}
    >
      {Data?.key == null
        ? `Information for ${sType ? sType[0] : 'NaN'} Key: ${
            sType ? sType[1] : '1'
          }`
        : ''}
      {Data?.data.map(Values => (
        <li
          css={css`
            border-top: 1px solid ${gray5};
          `}
          key={Values.name}
        >
          <p>{Values.name}</p>
          <input value={Values.value} />
        </li>
      ))}
    </ul>
  );
};
