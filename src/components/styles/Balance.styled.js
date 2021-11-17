import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 26px 0;
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 300px;
  @media (max-width: 1230px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Total = styled.p`
  font-size: 25px;
  letter-spacing: 2px;
  color: ${({ color }) => color};
`;
