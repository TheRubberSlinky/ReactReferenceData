import styled from '@emotion/styled';

const NB1 = '#09a303';
const NB2 = '#07d600';
const fontFamily = "'Segoe UI', 'Helvetica Neue',sans-serif";
const fontSize = '16px';

export const EditButton = styled.button`
  background-color: ${NB1};
  border-color: ${NB1};
  border-style: solid;
  border-radius: 5px;
  box-shadow: 2px 0 0 black;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  padding: 5px 10px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${NB2};
  }
  :focus {
    outline-color: ${NB2};
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
