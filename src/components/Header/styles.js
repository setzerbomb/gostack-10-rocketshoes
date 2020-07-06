import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2% 0;

  img {
    max-width: 97.5%;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 5%;

    strong {
      display: inline-block;
      color: #fff;
    }

    span {
      display: inline-block;
      font-size: 12px;
      color: #999;
    }
  }
`;
