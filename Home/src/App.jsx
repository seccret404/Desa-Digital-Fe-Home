import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import ProfilPage from "./pages/profil/index.jsx";
import AgendaPage from "./pages/agenda/index.jsx";
import DetailAgenda from "./pages/agenda/detail.jsx";
import LaporanAgenda from "./pages/agenda/laporan.jsx";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<ProfilPage/>} />
        <Route path="/agenda" element={<AgendaPage/>} />
        <Route path="/agenda-detail" element={<DetailAgenda/>} />
        <Route path="/agenda-detail-laporan" element={<LaporanAgenda/>} />
      </Routes>
    </Router>
  );
}
