import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import ProfilPage from "./pages/profil/index.jsx";
import AgendaPage from "./pages/agenda/index.jsx";
import DetailAgenda from "./pages/agenda/detail.jsx";
import LaporanAgenda from "./pages/agenda/laporan.jsx";
import OrganisasiPage from "./pages/organisasi/index.jsx";
import BeritaPage from "./pages/berita/index.jsx";
import PengumumanPage from "./pages/pengumuman/index.jsx";
import DetailPengumumanPage from "./pages/pengumuman/detail.jsx";
import DetailBeritaPage from "./pages/berita/detail.jsx";
import DetailOrganisasi from "./pages/organisasi/detail.jsx";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<ProfilPage/>} />
        <Route path="/agenda" element={<AgendaPage/>} />
        <Route path="/berita" element={<BeritaPage/>} />
        <Route path="/pengumuman" element={<PengumumanPage/>} />
        <Route path="/organisasi" element={<OrganisasiPage/>} />
        <Route path="/agenda-detail" element={<DetailAgenda/>} />
        <Route path="/organisasi-detail" element={<DetailOrganisasi/>} />
        <Route path="/berita-detail" element={<DetailBeritaPage/>} />
        <Route path="/pengumuman-detail" element={<DetailPengumumanPage/>} />
        <Route path="/agenda-detail-laporan" element={<LaporanAgenda/>} />
      </Routes>
    </Router>
  );
}
