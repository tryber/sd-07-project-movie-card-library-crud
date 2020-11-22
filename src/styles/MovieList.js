import styled from 'styled-components';

import Button from './Button';

export const Wrapper = styled.div`
  align-items: center;
  background-color: #55efc4;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;

  & ${Button} {
    align-self: flex-end;
  }
`;
