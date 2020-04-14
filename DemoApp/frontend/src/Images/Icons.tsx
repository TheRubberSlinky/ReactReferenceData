//import React from 'react';
//import user from './Images/user.svg';

/** @jsx jsx */
import { css, jsx } from '@emotion/core'; 
import user from './Images/user.svg';

export const UserIcon = () =>
  <img src={user} alt="User" css={css`
  width: 12px;
                 opacity: 0.6;
               `} />;