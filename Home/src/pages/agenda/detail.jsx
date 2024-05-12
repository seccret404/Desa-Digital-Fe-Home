import Layout from '../../components/layout/Layout'
import CalenderICon from '../../components/icon/calenderIcon'
import Button from '../../components/ui/button'
import { Link } from 'react-router-dom'
export default function DetailAgenda() {
     return (
          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Detail Agenda</div>
                    <div className="bg-white ml-[56px] mr-[56px] mt-[27px] mt-[17px] p-[20px] rounded-[10px] mb-[20px]">
                         <div className="text-[20px] font-bold">Rapat Pertemuan Kepala Dusun Desa Sosor Dolok</div>
                         <div className="flex items-center mt-2">
                              <CalenderICon size={28} />
                              <div className="text-12 ">Rabu, 17 April 2024 - Kantor Kepala Desa</div>
                         </div>
                         <div className="mt-4">
                              <Button bgColor='#0D9276' width={192} height={33} rounded={5} color='white'>
                                  <Link to={'/agenda-detail-laporan'}>Lihat Laporan</Link>
                              </Button>
                         </div>
                         <div className="text-[18px] font-medium mt-4">Tujuan :</div>
                         <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-[5px]">
                              <div className="text-[18px] text-white p-4 text-justify">
                              Tujuan pertemuan kepala dusun adalah untuk memperkuat koordinasi antarwarga dalam rangka mengatasi berbagai permasalahan di lingkungan, menyampaikan informasi penting terkait dengan pembangunan dan keamanan dusun, serta merumuskan program-program yang akan meningkatkan kualitas hidup masyarakat setempat.
                              </div>
                         </div>
                         <div className="text-justify text-[16px] mt-4">
                         Kegiatan pertemuan kepala dusun meliputi pembahasan isu-isu penting seperti keamanan, kesejahteraan, dan pembangunan di lingkungan dusun. Para kepala dusun dan warga secara aktif berdiskusi untuk mencari solusi terbaik atas berbagai permasalahan yang dihadapi. Selain itu, dalam pertemuan ini juga dilakukan penyampaian informasi terkait dengan program-program pemerintah, kegiatan sosial, dan kegiatan kemasyarakatan lainnya. Ada juga sesi untuk merencanakan kegiatan bersama yang akan dilaksanakan dalam periode tertentu untuk meningkatkan kesejahteraan dan keharmonisan masyarakat dusun. Setelah itu, dilakukan evaluasi terhadap hasil kegiatan sebelumnya dan perumusan langkah-langkah untuk mencapai tujuan-tujuan yang telah ditetapkan.
                         </div>
                    </div>
               </Layout>
          </div>
     )
}
