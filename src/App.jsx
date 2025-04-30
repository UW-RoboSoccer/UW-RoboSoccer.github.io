import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Sponsors from "./pages/Sponsors";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import "./App.css"; 

const App = () => {
  return (
    <div className="app-wrapper" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
