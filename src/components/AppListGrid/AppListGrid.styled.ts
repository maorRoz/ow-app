import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 200px);
  grid-auto-rows: 100px;
`;
