import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Sponsors from "./pages/Sponsors";
import Blog from "./pages/Blog";
import Team from "./pages/Team";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/Sponsors" element={<Sponsors />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
