import { ThemeProvider } from "styled-components";
import { Header, Main } from "./components";
import { Provider } from "./context/GlobalState";
import { useDarkMode } from "./hooks/useDarkMode";
import { GlobalStyle, lightTheme, darkTheme } from "./components/styles/Global";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Provider>
        <GlobalStyle />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Main theme={theme} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
