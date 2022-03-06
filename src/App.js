import { createContext, useState } from "react";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Wallet from "./pages/Wallet/Wallet";

export const AppContext = createContext(null);
function App() {
	const [title, setTitle] = useState("Dashboard");

	return (
		<AppContext.Provider className="App" value={{ setTitle, title }}>
			<Navbar />
			<HeaderNav />
			{title === "Dashboard" ? (
				<Dashboard />
			) : title === "Wallet" ? (
				<Wallet />
			) : (
				<h1>{title}</h1>
			)}
		</AppContext.Provider>
	);
}

export default App;
