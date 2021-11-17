import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.body};
  box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.2);
`;
const Copyright = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <Container>
      <Copyright>takanome_dev &copy;</Copyright>
    </Container>
  );
};

export default Footer;
