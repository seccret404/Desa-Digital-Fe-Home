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
          <h2 className="text-lg font-semibold mb-2 text-center">Sosialisasi Perhitungan Suara Pilpres</h2>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img src="/public/pemungutansuara.jpeg" alt="Pemungutansuara" className="mx-auto w-70 h-65 mb-4 rounded-lg shadow-lg" />
            <div className="flex items-left justify-left mb-4">
              <img src={kalenderIcon} alt="Kalender" className="w-6 h-6 mr-2" />
              <p className="text-gray-600">Mar 10, 2024</p>
              <img src={OrangIcon} alt="Orang" className="w-6 h-6 ml-4 mr-2" />
              <p className="text-gray-600">Robong Sulimbong</p>
            </div>
            <div className="flex items-left justify-left mb-4">
              <img src={lokasiIcon} alt="Lokasi" className="w-6 h-6 mr-2" />
              <p className="text-gray-600">Balai Desa Sosor Dolok</p>  
              <img src={kalenderIcon} alt="Kalender" className="w-6 h-6 mr-1" />
              <p className="text-gray-600">Mar 12, 2024 s/d Mar 12, 2024</p>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Tujuan: Memberikan gambaran perhitungan suara</h2>
            </div>
            <p className="text-gray-600 text-left">
              Sosialisasi mengenai perhitungan suara merupakan tugas yang diemban oleh Komisi Pemilihan Umum (KPU). 
              Tahapan-tahapan dalam agenda perhitungan suara oleh KPU sangatlah terinci. Setelah proses pemungutan 
              suara selesai dilakukan, kotak suara dari setiap Tempat Pemungutan Suara (TPS) dikumpulkan dan dibawa 
              ke lokasi Tempat Pemungutan Suara yang telah ditentukan sebelumnya. Di sana, proses dimulai dengan 
              melakukan verifikasi terhadap surat suara untuk memastikan keabsahan dan keutuhan setiap lembarannya.
               Setelah verifikasi selesai dilakukan, tahapan berikutnya adalah proses perhitungan suara yang 
               dilakukan secara transparan di hadapan para saksi dari masing-masing calon atau partai politik 
               yang bersaing. Dalam proses ini, KPU menggunakan Sistem Informasi Perhitungan Suara (Situng) 
               untuk mempercepat dan mempermudah proses perhitungan. Langkah-langkah ini diambil untuk memastikan 
               kecepatan dan akurasi dalam menghasilkan hasil perhitungan suara. Setelah proses perhitungan selesai,
                hasilnya diumumkan secara resmi oleh KPU. Pentingnya pengumuman ini adalah untuk memberikan kejelasan
                 dan transparansi kepada masyarakat mengenai hasil pemilihan. Selama proses ini berlangsung, 
                 pengawasan yang ketat diterapkan untuk memastikan integritas dan akurasi dari seluruh proses
                  perhitungan. Selain itu, apabila terdapat kesalahan dalam perhitungan, KPU siap menangani 
                  sengketa atau pengaduan yang diajukan oleh pihak-pihak terkait. Hal ini dilakukan untuk 
                  menjamin keadilan dan keabsahan hasil pemilihan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
