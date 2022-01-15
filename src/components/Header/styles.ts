import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: ${props => props.theme.colors.tertiary};
      border-radius: 500px;
      padding: 12px 16px;
      color: ${props => props.theme.colors.secondary};
      border: 0;
      font-family: UberMoveMedium;
      transition: background-color 0.2s;
      &:hover {
        background-color: #f0e2e2;
      }
    }
  }
`;

export { Container };