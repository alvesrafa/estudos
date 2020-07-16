import styled from 'styled-components';

export const Container = styled.nav`
  margin-top: 32px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style-type: none;
    > li {
      padding: 6px 6px;
      border-radius: 3px;
      background: #ffffff;
      border: 1px solid #00a8e8;
      font-weight: bold;
      color: #00a8e8;
      cursor: pointer;
      transition: all .2s ease-in-out;
      &.active,
      &:hover {
        color: #FFF;
        border-color: #007ea7;
        background: #00a8e8;
      }
    }
  }
  > p {
  }
`;