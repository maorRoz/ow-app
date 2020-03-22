import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
  cursor: pointer;
  justify-self: stretch;
  padding: 5px 10px;
  border: 2px solid #6e6f73;
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  transition: all ease-in-out 200ms;
  &:hover {
    border-color: #7487cc;
  }
  text-decoration: none;
  color: inherit;
`;

const AppField = styled.div`
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all ease-in-out 200ms;
  ${Card}:hover & {
    color: #7487cc;
  }
`;

export const AppName = styled(AppField)`
  font-size: 16px;
  font-weight: bold;
  color: #6d6e73;
`;

export const AppAuthor = styled(AppField)`
  font-size: 12px;
  font-style: italic;
`;
