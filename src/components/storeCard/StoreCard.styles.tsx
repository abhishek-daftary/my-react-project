import styled from 'styled-components';

export const StoreCard = styled.div`
  background-color: white;
  box-shadow: 4px 13px 15px -9px rgba(0, 0, 0, 0.1);
  margin: 10px;
  border-radius: 15px;
  width: 440px;
  padding: 12px 0px 0px;
`;

export const StoreTitle = styled.div`
  padding-left: 20px;
  font-weight: bold;
`;

export const StoreParagraph = styled.div`
  font-weight: bold;
  padding-left: 20px;
`;

export const StoreDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  padding-left: 20px;
  padding-bottom: 2px;
`;

export const StoreInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding-left: 20px;
  padding-bottom: 10px;
`;

export const StoreVisible = styled.span`
  font-weight: 400;
  color: green;
  border-radius: 8px;
  padding: 2px 8px;
  background-color: #1bff7235;
  text-align: center;
  font-size: 12px;
`;

export const StoreImportant = styled.span`
  color: red;
  text-decoration: underline;
  font-size: 12px;
`;

export const StoreEdit = styled.div`
  background-color: #8080809e;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 12px 20px;
  text-align: center;
`;
