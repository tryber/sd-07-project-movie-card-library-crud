import styled from 'styled-components';

import Button from './Button';

export const MovieFormWrapper = styled.div`
  align-items: flex-start;
  background-color: #55efc4;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding-top: 30px;

  & ${Button} {
    align-self: center;
    background-color: #55efc4;
    font-family: Ubuntu, sans-serif;
    font-size: 18px;
  }
`;

export const FormWrapper = styled.form`
  background-color: #0984e3;
  border-radius: 8px;
  padding: 20px;
  width: 70vw;
`;

export const FormLine = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  
  & ${'label'} {
    color: white;
    font-size: 18px;
    margin: 5px 0;
  }

  & ${'input, textarea, select'} {
    border-style: none;
    border-radius: 5px;
    font-size: 16px;
    font-family: Ubuntu, sans-serif;
    outline-color: #55efc4;
    outline-width: 3px;
    padding: 8px;
  }
`;
