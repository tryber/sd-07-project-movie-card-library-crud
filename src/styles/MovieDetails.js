import styled from 'styled-components';

export const MovieDetailsWrapper = styled.div`
  align-items: center;
  background-color: #55efc4;
  display: flex;
  flex-direction: column;
  padding: 20px;

  & ${'img'} {
    border-radius: 12px;
  }
`;

export const MovieInfoWrapper = styled.div`
  background-color: #0984e3;
  border-radius: 8px;
  margin: 15px 0;
  padding: 8px 0;

  & ${'h1'} {
    color: white;
    font-size: 18px;
  }
`;