import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Profile from './pages/Profile';

function App() {
    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/projects" element={<Projects />} /> */}
                {/* <Route path="/profile" element={<Profile />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
