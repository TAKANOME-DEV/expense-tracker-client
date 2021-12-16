import styled from "styled-components";

export const Amount = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-top: -25px;
`;

export const Button = styled.button`
  margin-left: -30px;
  margin-top: -25px;
  position: absolute;
  padding: 2px 5px;
  font-size: 20px;
  border: none;
  background-color: #e74c3c;
  color: #fff;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.5s ease;
`;

export const List = styled.li`
  list-style-type: none;
  background-color: ${({ theme }) => theme.body};
  margin: 10px 0;
  font-size: 20px;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-right: 5px solid ${({ color }) => color};
  position: relative;
  &:hover {
    Button {
      opacity: 1;
    }
  }
`;
