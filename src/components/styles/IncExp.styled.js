import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 350px;
  @media (max-width: 1230px) {
    width: 100%;
  }
`;

export const Income = styled.div`
  padding-right: 35px;
  border-right: 2px solid #dedede;
`;

export const Expense = styled.div`
  padding-left: 35px;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const IncAmount = styled.p`
  color: var(--green-color);
  font-size: 23px;
`;

export const ExpAmount = styled.p`
  color: var(--red-color);
  font-size: 23px;
`;
