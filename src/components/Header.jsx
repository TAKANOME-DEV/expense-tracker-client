import React from "react";
//* Image
import { lightLogo, darkLogo } from "../assets";
//* SVG
import Moon from "./svg/Moon";
import Sun from "./svg/Sun";
//* Styles
import { Head, Nav, Logo } from "./styles/Header.styled";

const Header = ({ theme, toggleTheme }) => {
  return (
    <Head>
      <Nav>
        <Logo
          src={theme === "light" ? darkLogo : lightLogo}
          alt="Expense Tracker Logo"
        />
        <div onClick={toggleTheme}>
          {theme === "light" ? <Moon /> : <Sun />}
        </div>
      </Nav>
    </Head>
  );
};

export default Header;
