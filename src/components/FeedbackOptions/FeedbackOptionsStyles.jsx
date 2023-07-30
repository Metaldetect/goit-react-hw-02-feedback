import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: black;
  width: 100px;
  height: 50px;
  color: white;
  padding: 5px 15px;
  border-radius: 4px;
  text-transform: capitalize;

  &:not(:last-child) {
    margin-right: 10px;
  }

  :hover,
  :focus {
    background-color: white;
    color: black;
    border: solid #6c0599 1px;

    transition: all 0.3s;
  }
`;
