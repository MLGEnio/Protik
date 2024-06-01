import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Layout from "./components/ui/Layout.jsx";
import Profile from "./pages/Profile.jsx";
// import Projects from './pages/Projects';
// import Profile from './pages/Profile';

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					{/* <Route path="/projects" element={<Projects />} /> */}
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
