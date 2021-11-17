import React from "react";
import { Head, Nav, Logo } from "./styles/Header.styled";
import { lightLogo, darkLogo } from "../assets";
import Moon from "./svg/Moon";
import Sun from "./svg/Sun";

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
