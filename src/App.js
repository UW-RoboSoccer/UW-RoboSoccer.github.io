import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Join from './pages/Join';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import BlogPage from "./pages/BlogPage"; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/blog" element={<BlogPage />} />  {/* Add Blog Page route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
