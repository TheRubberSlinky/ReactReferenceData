import React, { FC } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { AnswerData } from '../MockData/AnswerData';
import { gray3 } from '../Styles';

interface Props {
  data: AnswerData;
}

export const Answer: FC<Props> = ({ data }) => (
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
      {data.content}
    </div>{' '}
    <div
      css={css`
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
      `}
    >
      {`Answered by ${data.userName} on
        ${data.created.toLocaleDateString()} at
        ${data.created.toLocaleTimeString()}`}
    </div>
  </div>
);
