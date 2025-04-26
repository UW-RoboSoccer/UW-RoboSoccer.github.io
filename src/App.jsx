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
          <Route path="/join" element={<Join />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
