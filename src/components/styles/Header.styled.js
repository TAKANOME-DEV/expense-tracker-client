import styled from "styled-components";

export const Head = styled.header`
  position: fixed;
  height: 64px;
  width: 100%;
  left: 0px;
  top: 0px;
  background-color: ${({ theme }) => theme.body};
  box-shadow: var(--dark-boxShadow);
  transition: all 0.5s linear;
`;
export const Nav = styled.nav`
  margin: 10px 300px;
  ${"" /* margin: 10px 140px; */}
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 540px) and (max-width: 901px) {
    margin: 10px 100px;
  }
  @media (min-width: 405px) and (max-width: 539px) {
    margin: 10px 50px;
  }
  @media (max-width: 404px) {
    margin: 10px 10px;
  }
`;
export const Logo = styled.img`
  width: 270px;
  height: auto;
`;
