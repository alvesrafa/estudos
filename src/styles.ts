import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFF;
  border-radius: 8px;
`
export const List = styled.div`
  width: 100%;
  display: grid;
  > div:first-child {
    border-bottom: 1px solid rgba(0,0,0,.3);
  }

`
export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 8px;
`