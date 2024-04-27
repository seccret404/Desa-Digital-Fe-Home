import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import ProfilPage from "./pages/profil/index.jsx";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<ProfilPage/>} />
      </Routes>
    </Router>
  );
}
