import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index.js";
import ProfilPage from "./pages/profil/index.js";
import AgendaPage from "./pages/agenda/index.js";
import DetailAgenda from "./pages/agenda/detail.js";
import LaporanAgenda from "./pages/agenda/laporan.jsx";
import OrganisasiPage from "./pages/organisasi/index.js";
import PengumumanPage from "./pages/pengumuman/index.js";
import DetailPengumumanPage from "./pages/pengumuman/detail.js";
import DetailBeritaPage from "./pages/berita/detail.jsx";
import DetailOrganisasi from "./pages/organisasi/detail.js";
import BeritaPage from "./pages/berita/index.js";
import React from "react";
import PemerintahanPage from "./pages/profil/pemerintahan.js";
import TugasPage from "./pages/profil/tugas.js";
import ApbdesPage from "./pages/Apbdes/index.js";
import PendidikanPage from "./pages/penduduk/pendidikan.js";
import AgamaPage from "./pages/penduduk/agama.js";
import PekerjaanPage from "./pages/penduduk/pekerjaan.js";
import PerkawinanPage from "./pages/penduduk/perkawinan.js";
import UsiaPage from "./pages/penduduk/usia.js";
import DusunPage from "./pages/penduduk/dusun.js";
import DusunDetailPage from "./pages/penduduk/detailDusun.js";
import BantuanPage from "./pages/penduduk/bantuan.js";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<ProfilPage/>} />
        <Route path="/agenda" element={<AgendaPage/>} />
        <Route path="/berita" element={<BeritaPage/>} />
        <Route path="/bantuan" element={<BantuanPage/>} />
        <Route path="/pengumuman" element={<PengumumanPage/>} />
        <Route path="/pendidikan" element={<PendidikanPage/>} />
        <Route path="/perkawinan" element={<PerkawinanPage/>} />
        <Route path="/pekerjaan" element={<PekerjaanPage/>} />
        <Route path="/usia" element={<UsiaPage/>} />
        <Route path="/dusun" element={<DusunPage/>} />
        <Route path="/dusun/:id" element={<DusunDetailPage/>} />
        <Route path="/agama" element={<AgamaPage/>} />
        <Route path="/pemerintahan" element={<PemerintahanPage/>} />
        <Route path="/tugas" element={<TugasPage/>} />
        <Route path="/apbdes/:id" element={<ApbdesPage/>} />
        <Route path="/organisasi" element={<OrganisasiPage/>} />
        <Route path="/agenda-detail/:id" element={<DetailAgenda/>} />
        <Route path="/organisasi-detail/:id" element={<DetailOrganisasi/>} />
        <Route path="/berita-detail/:id" element={<DetailBeritaPage/>} />
        <Route path="/pengumuman-detail/:id" element={<DetailPengumumanPage/>} />
        <Route path="/detail-laporan/:id" element={<LaporanAgenda/>} />
      </Routes>
    </Router>
  );
}
