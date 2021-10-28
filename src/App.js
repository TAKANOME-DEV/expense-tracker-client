import "./App.css";
import { ThemeProvider } from "styled-components";
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
import { GlobalStyle, lightTheme, darkTheme } from "./styles/GlobalStyle";

const App = () => {
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={themeMode}>
			<Provider>
				<GlobalStyle />
				<Toggle theme={theme} toggleTheme={toggleTheme} />
				<Header />
				<div className="container">
					<Balance />
					<IncomeExpense />
					<TransactionList />
					<AddTransaction />
				</div>
			</Provider>
		</ThemeProvider>
	);
};

export default App;
