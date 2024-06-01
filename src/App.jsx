import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Layout from "./components/ui/Layout.jsx";
import UserProjects from "./pages/UserProjects.jsx";
import ExploreProjects from "./pages/ExploreProjects.jsx";
import Profile from "./pages/Profile.jsx";
import SpecificProject from "./pages/SpecificProject.jsx";
// import Projects from './pages/Projects';
// import Profile from './pages/Profile';

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/users-projects' element={<UserProjects />} />
					<Route
						path='/explore-projects'
						element={<ExploreProjects />}
					/>
					{/* <Route path="/projects" element={<Projects />} /> */}
					<Route path='/profile' element={<Profile />} />
					<Route path='/project' element={<SpecificProject />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
