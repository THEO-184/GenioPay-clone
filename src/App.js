import HeaderNav from "./components/HeaderNav/HeaderNav";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
	return (
		<div className="App">
			<Navbar />
			<HeaderNav />
			<Dashboard />
		</div>
	);
}

export default App;
