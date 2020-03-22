import styled from 'styled-components';

export const Card = styled.div`
  padding: 5px 10px;
  border: 2px solid #6e6f73;
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const VersionNumber = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

export const ReleaseDate = styled.div`
  font-style: italic;
  color: grey;
`;

const IsPublishedTag = styled.div`
  padding: 5px;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const PublishedTag = styled(IsPublishedTag)`
  background-color: green;
`;

export const NotPublishedTag = styled(IsPublishedTag)`
  background-color: red;
`;

export const CardBody = styled.div`
  min-height: 140px;
  font-size: 16px;
  &:hover {
    background-color: grey;
    opacity: 0.2;
  }
`;
