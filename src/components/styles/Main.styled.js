import styled from "styled-components";

export const Container = styled.div`
  margin: 100px 300px;
  @media (min-width: 540px) and (max-width: 901px) {
    margin: 100px 100px;
  }
  @media (min-width: 405px) and (max-width: 539px) {
    margin: 100px 50px;
  }
  @media (max-width: 404px) {
    margin: 100px 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1230px) {
    flex-direction: column;
  }
`;
