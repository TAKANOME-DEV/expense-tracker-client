import styled, { ThemeProvider } from "styled-components";
import {
  Header,
  Balance,
  IncomeExpense,
  TransactionList,
  AddTransaction,
} from "./components";
import { Provider } from "./context/GlobalState";
import { useDarkMode } from "./hooks/useDarkMode";
import { GlobalStyle, lightTheme, darkTheme } from "./components/styles/Global";

const Container = styled.div`
  margin: 100px 140px;
`;

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Provider>
        <GlobalStyle />
        <Header theme={theme} toggleTheme={toggleTheme} />
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
