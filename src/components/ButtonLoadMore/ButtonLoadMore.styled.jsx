import styled from 'styled-components';

export const BtnMore = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #7d7e9f;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: transparent;
  text-decoration: none;
  cursor: pointer;
  margin: 30px 50%;
  font-family: inherit;
  font-size: 22px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #ccccdf;
    color: #4e5079;
  }
`;
