import styled, { ThemeProvider } from "styled-components";
import {
  Header,
  Balance,
  IncomeExpense,
  TransactionList,
  AddTransaction,
  Toggle,
} from "./components";
import { Provider } from "./context/GlobalState";
import { useDarkMode } from "./hooks/useDarkMode";
import { GlobalStyle, lightTheme, darkTheme } from "./components/styles/Global";

const Container = styled.div`
  width: 350px;
  margin: 30px auto;
`;

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Provider>
        <GlobalStyle />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Header />
        <Container>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </Container>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
