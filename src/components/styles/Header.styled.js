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
  margin: 10px 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.img`
  width: 270px;
  height: auto;
`;
