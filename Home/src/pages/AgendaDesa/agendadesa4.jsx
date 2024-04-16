import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../components/ui/header";
import kalenderIcon from "../../components/icon/kalender.jpg"; 
import lokasiIcon from "../../components/icon/lokasi.jpeg";
import OrangIcon from "../../components/icon/orang.jpeg"; 

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <div className="mt-8">
        <div className="bg-blue-500 text-white py-4 flex items-center justify-center">
          <h1 className="font-bold text-xl">Agenda Desa</h1>
        </div>
        
        <div className="mt-8">
          <h1 className="text-lg font-semibold mt-12 mb-4 text-left text-blue-600">Agenda</h1>
          <h2 className="text-lg font-semibold mb-2 text-center">Kunjungan Bupati Samosir</h2>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img src="/public/kunjungan.jpeg" alt="Pemungutansuara" className="mx-auto w-70 h-65 mb-4 rounded-lg shadow-lg" />
            <div className="flex items-left justify-left mb-4">
              <img src={kalenderIcon} alt="Kalender" className="w-6 h-6 mr-2" />
              <p className="text-gray-600">Feb 18, 2024</p>
              <img src={OrangIcon} alt="Orang" className="w-6 h-6 ml-4 mr-2" />
              <p className="text-gray-600">Robong Sulimbong</p>
            </div>
            <div className="flex items-leftt justify-left mb-4">
              <img src={lokasiIcon} alt="Lokasi" className="w-6 h-6 mr-2" />
              <p className="text-gray-600">Balai Desa Sosor Dolok</p> 
              <img src={kalenderIcon} alt="Kalender" className="w-6 h-6 mr-2" />
              <p className="text-gray-600">Feb 20, 2024 s/d Feb 04, 2024</p>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Tujuan: Memberikan dorongan dan dukungan langsung kepada warga desa, 
              memperkuat kerjasama antara pemerintah daerah dan masyarakat setempat.</h2>
            </div>
            <p className="text-gray-600 text-left">
            Kunjungan Bupati Samosir ke Desa Sosor Dolok adalah momen yang dinantikan oleh seluruh warga desa dengan antusiasme 
            dan kegembiraan yang luar biasa. Kehadiran beliau menjadi kesempatan langka bagi penduduk Desa Sosor Dolok untuk 
            berinteraksi langsung dengan pemimpin daerah mereka. Sebagai figur penting dalam pemerintahan daerah, kunjungan 
            Bupati tidak hanya menjadi ajang untuk menyampaikan program-program pembangunan yang direncanakan, tetapi juga 
            menjadi momen emosional yang mempererat hubungan antara pemerintah daerah dan masyarakat. Dalam setiap kunjungannya, 
            Bupati Samosir selalu membawa semangat positif serta komitmen yang kuat untuk memajukan setiap wilayah di bawah kepemimpinannya.
            Desa Sosor Dolok, yang terletak di kaki pegunungan yang hijau di Kabupaten Samosir, Sumatera Utara, merupakan suatu 
            daerah yang kaya akan keindahan alam dan kebudayaan. Kehadiran Bupati Samosir tidak hanya menjadi kesempatan untuk membicarakan 
            perkembangan infrastruktur dan layanan publik di desa tersebut, tetapi juga memberikan apresiasi atas potensi dan keunikan Desa Sosor Dolok. 
            Dengan latar belakang alam yang memesona dan keberagaman budaya yang kaya, desa ini memiliki potensi yang besar untuk dikembangkan sebagai 
            destinasi wisata yang menarik. Melalui kunjungan Bupati, diharapkan akan tercipta sinergi antara pemerintah daerah, masyarakat, dan pihak 
            terkait lainnya untuk mengembangkan Desa Sosor Dolok menjadi lebih maju, sejahtera, dan lestari bagi generasi-generasi mendatang.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
