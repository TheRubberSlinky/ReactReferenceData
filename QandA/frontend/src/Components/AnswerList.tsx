import React, { FC } from 'react';
import { AnswerData } from '../MockData/AnswerData';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Answer } from './Answer';
import { gray5 } from '../Styles';

interface Props {
  data: AnswerData[];
}
export const AnswerList: FC<Props> = ({ data }) => (
  <ul
    css={css`
      list-style: none;
      margin: 10px 0 0 0;
      padding: 0;
    `}
  >
    {data.map(answer => (
      <li
        css={css`
          border-top: 1px solid ${gray5};
        `}
        key={answer.answerId}
      >
        <Answer data={answer} />
      </li>
    ))}{' '}
  </ul>
);
