import { ThemeProvider } from "styled-components";
//* Components
import { Header, Main, Footer } from "./components";
import { GlobalStyle, lightTheme, darkTheme } from "./components/styles/Global";
//* Provider
import { Provider } from "./context/GlobalState";
//* Hooks
import { useDarkMode } from "./hooks/useDarkMode";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Provider>
        <GlobalStyle />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Main theme={theme} />
        <Footer />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
