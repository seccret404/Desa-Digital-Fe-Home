import { Link } from 'react-router-dom';
import Header from "../../components/ui/header";
import kalenderIcon from "../../components/icon/kalender.jpg"; 
import lokasiIcon from "../../components/icon/lokasi.jpeg"; 



export default function Home() {
  return (
    <div className="">
      <Header />

      <div className="mt-4">
        <div className="bg-blue-500 text-white p-4 flex items-center justify-center">
          <h1 className="font-bold text-xl">Agenda Edu</h1>
        </div>
        <div className="ml-4">
          <h1 className="text-lg font-semibold mt-12 mb-4 text-left text-blue-600 text-3xl">Agenda</h1>

          {/* Berita 1 */}
          <div className="flex items-start bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img src="/public/pemungutansuara.jpeg" alt="Pemungutansuara" className="w-26 h-36 mr-4" />
            <div className="w-full flex flex-col">
              <h3 className="text-lg font-semibold mb-2 text-center sm:text-left">Sosialisasi Perhitungan Suara Pilpres</h3>
              <div className="flex justify-center sm:justify-start mb-2">
                <img src={kalenderIcon} alt="Kalender" className="w-6 h-6 mr-1" />
                <p className="text-gray-600">Mar 10, 2024</p>
              </div>
              <div className="flex justify-center sm:justify-start mb-2"> 
                <img src={lokasiIcon} alt="Lokasi" className="w-6 h-6 mr-1" />
                <div className="flex justify-center sm:justify-start mb-2"> 
              <p className="text-gray-600 ml-2">Balai Desa Sosor Dolok</p>
              <img src={kalenderIcon} alt="Kalender" className="w-6 h-6 mr-1" />
              <p className="text-gray-600">Mar 12, 2024 s/d Mar 12, 2024</p>
            </div>

              </div>
              <p className="text-gray-600">
                Sosialisasi mengenai perhitungan suara merupakan tugas yang diemban oleh Komisi Pemilihan Umum (KPU). Tahapan-tahapan dalam agenda perhitungan suara oleh KPU sangatlah terinci. Setelah proses pemungutan suara selesai dilakukan...
              </p>
              <div className="flex justify-end mt-2">
              <Link to="/agendadesa2" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Baca Selengkapnya</Link>
              </div>
            </div>
          </div>

          {/* Berita 2 */}
          <div className="flex items-start bg-white p-4 rounded-lg shadow-md mt-4 hover:shadow-lg transition duration-300">
            <img src="/public/rapat.jpeg" alt="rapat" className="w-26 h-36 mr-4" />
            <div className="w-full flex flex-col">
              <h3 className="text-lg font-semibold mb-2 text-center sm:text-left">Rapat Pelaksanaan Pembangunan Desa sesuai APBDesa</h3>
              <div className="flex justify-center sm:justify-start mb-2">
                <img src={kalenderIcon} alt="Kalender" className="w-6 h-6 mr-1" /> 
                <p className="text-gray-600">Mar 27, 2024</p>
              </div>
              <div className="flex justify-center sm:justify-start mb-2"> 
                <img src={lokasiIcon} alt="Lokasi" className="w-6 h-6 mr-1" />
                <div className="flex justify-center sm:justify-start mb-2"> 
                <p className="text-gray-600 ml-2">Balai Desa Sosor Dolok</p>
                <img src={kalenderIcon} alt="Kalender" className="w-6 h-6 mr-1" />
                <p className="text-gray-600">Apr 04, 2024 s/d Apr 04, 2024</p>
              </div>

              </div>
              <p className="text-gray-600">
                Rapat Pelaksanaan Pembangunan Desa sesuai Anggaran Pendapatan dan Belanja Desa (APBDesa) di Desa Sosor Dolok merupakan sebuah forum berkala yang diadakan oleh pemerintah desa bersama Badan Permusyawaratan Desa (BPD)...
              </p>
              <div className="flex justify-end mt-2">
                <Link to="/agendadesa3" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Baca Selengkapnya</Link>
              </div>
            </div>
          </div>

          {/* Berita 3 */}
          <div className="flex items-start bg-white p-4 rounded-lg shadow-md mt-4 hover:shadow-lg transition duration-300">
            <img src="/public/kunjungan.jpeg" alt="rapat" className="w-26 h-36 mr-4" />
            <div className="w-full flex flex-col">
              <h3 className="text-lg font-semibold mb-2 text-center sm:text-left">Kunjungan Bupati Samosir</h3>
              <div className="flex justify-center sm:justify-start mb-2">
                <img src={kalenderIcon} alt="Kalender" className="w-6 h-6 mr-1" /> 
                <p className="text-gray-600">Feb 18, 2024</p>
              </div>
              <div className="flex justify-center sm:justify-start mb-2"> 
                <img src={lokasiIcon} alt="Lokasi" className="w-6 h-6 mr-1" />
                <div className="flex justify-center sm:justify-start mb-2"> 
                <p className="text-gray-600 ml-2">Balai Desa Sosor Dolok</p>
                <img src={kalenderIcon} alt="Kalender" className="w-6 h-6 mr-1" />
                <p className="text-gray-600">Feb 20, 2024 s/d Feb 04, 2024</p>
              </div>
              </div>
              <p className="text-gray-600">
                Kunjungan Bupati Samosir ke Desa Sosor Dolok merupakan momen yang dinantikan oleh seluruh warga desa dengan antusiasme dan kegembiraan. Desa Sosor Dolok, yang terletak di kaki pegunungan yang hijau di Kabupaten Samosir, Sumatera Utara...
              </p>
              <div className="flex justify-end mt-2">
                <Link to="/agendadesa4" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Baca Selengkapnya</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
