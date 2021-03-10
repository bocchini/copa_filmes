import styled from 'styled-components';
import { shade } from 'polished';

export const Layout = styled.div`
  padding-top: 40px;
`;

export const BoxContext = styled.div`
  max-width: 1100px;
  max-height: 700px;
  padding: 40px 15px;
  text-align: center;
  background: #6e6e6e;
  font-size: 1.2em;
`;

export const BoxVotation = styled.div`
  padding: 15px 5px;
  max-width: 1100px;
  text-align: center;
  color: #020202;
  font-size: 1.1em;
`;

export const BoxForm = styled.div`
  padding: 20px 15px;

  button {
    background-color: #343434;
    border: none;
    color: #f4ede8;
    float: right;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#6e6e6e')};
    }
  }
`;

export const BoxMovie = styled.div`
  padding: 5px 25px 5px 20px;
  min-width: 25px;
  max-width: 350px;
  background-color: #ffffff;
`;
