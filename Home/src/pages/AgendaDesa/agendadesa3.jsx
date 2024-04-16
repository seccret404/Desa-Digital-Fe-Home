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
          <h2 className="text-lg font-semibold mb-2 text-center">Rapat Pelaksanaan Pembangunan Desa sesuai APBDesa</h2>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img src="/public/rapat.jpeg" alt="Pemungutansuara" className="mx-auto w-70 h-65 mb-4 rounded-lg shadow-lg" />
            <div className="flex items-left justify-left mb-4">
              <img src={kalenderIcon} alt="Kalender" className="w-6 h-6 mr-2" />
              <p className="text-gray-600">Mar 10, 2024</p>
              <img src={OrangIcon} alt="Orang" className="w-6 h-6 ml-4 mr-2" />
              <p className="text-gray-600">Robong Sulimbong</p>
            </div>
            <div className="flex items-leftt justify-left mb-4">
              <img src={lokasiIcon} alt="Lokasi" className="w-6 h-6 mr-2" />
              <p className="text-gray-600">Balai Desa Sosor Dolok</p>
              <img src={kalenderIcon} alt="Kalender" className="w-6 h-6 mr-1" />
                <p className="text-gray-600">Apr 04, 2024 s/d Apr 04, 2024</p>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Tujuan: Menyusun rencana pembangunan yang efektif dan berkelanjutan 
              sesuaidengan alokasi anggaran yang tersedia, serta memastikan partisipasi aktif dan keterlibatan 
              seluruh masyarakat dalam proses pembangunan.</h2>
            </div>
            <p className="text-gray-600 text-left">
            Rapat Pelaksanaan Pembangunan Desa sesuai Anggaran Pendapatan dan Belanja Desa (APBDesa) di Desa Sosor Dolok 
            merupakan sebuah forum berkala yang diadakan oleh pemerintah desa bersama Badan Permusyawaratan Desa (BPD). 
            Rapat ini menjadi wadah utama bagi masyarakat desa untuk secara aktif terlibat dalam proses perencanaan, 
            pelaksanaan, dan pengawasan pembangunan di lingkungan mereka. Dengan diadakannya rapat tersebut, tujuan utama 
            dari APBDesa yaitu untuk mengalokasikan sumber daya dan anggaran secara efisien sesuai dengan kebutuhan riil 
            masyarakat dapat tercapai. 
            Dalam rapat tersebut, berbagai agenda penting dibahas, termasuk prioritas pembangunan, alokasi anggaran 
            untuk setiap sektor, serta evaluasi pelaksanaan program-program yang telah direncanakan sebelumnya. 
            Selain itu, rapat ini juga menjadi sarana untuk mendiskusikan masalah-masalah yang dihadapi oleh masyarakat 
            desa serta mencari solusi bersama untuk mengatasinya. Dengan demikian, rapat Pelaksanaan Pembangunan Desa 
            tidak hanya sekadar sebagai forum formal, tetapi juga sebagai wahana untuk membangun kesepahaman, kebersamaan, 
            dan partisipasi aktif seluruh elemen masyarakat dalam pembangunan desa.
            Kehadiran BPD dalam rapat tersebut menjadi simbol penting dari partisipasi dan keterlibatan langsung masyarakat 
            dalam proses pengambilan keputusan. Sebagai lembaga perwakilan masyarakat, BPD memiliki peran krusial dalam 
            menyampaikan aspirasi dan kebutuhan masyarakat kepada pemerintah desa serta memastikan bahwa pengelolaan 
            anggaran dan pembangunan desa dilakukan secara transparan dan akuntabel. Dengan kerja sama antara pemerintah 
            desa dan BPD dalam rapat Pelaksanaan Pembangunan Desa, diharapkan setiap keputusan yang diambil dapat 
            mencerminkan kepentingan dan kebutuhan riil masyarakat serta mendukung tercapainya pembangunan yang 
            berkelanjutan dan inklusif. </p>
          </div>
        </div>
      </div>
    </div>
  );
}
