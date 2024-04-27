import Layout from "../../components/layout/Layout"
import Button from "../../components/ui/button"
import CalenderICon from "../../components/icon/calenderIcon"
import ManCheckIcon from "../../components/icon/manCheckIcon"
import img from '../../assets/profil.png'
import MoneyIcon from "../../components/icon/mondeyIcon"
export default function LaporanAgenda() {
     return (
          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Detail Agenda</div>
                    <div className="bg-white ml-[56px] mr-[56px] mt-[27px] mt-[17px] p-[29px] rounded-[10px] mb-[20px]">
                         <div className="text-[20px] font-bold">Rapat Pertemuan Kepala Dusun Desa Sosor Dolok</div>
                         <div className="flex items-center mt-2">
                              <CalenderICon size={28} />
                              <div className="text-12 ml-2">Rabu, 17 April 2024 - Kantor Kepala Desa</div>
                         </div>
                         <div className="flex items-center mt-2">
                              <ManCheckIcon size={28} />
                              <div className="text-12 ml-2">Koordinator - Kepala Desa</div>
                         </div>
                         <div className="mt-4">
                              <Button bgColor='#0D9276' width={192} height={33} rounded={5} color='white'>
                                   129 Peserta
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
                         <div className="text-[18px] font-medium mt-4">Dokumentasi :</div>
                         <div className="grid grid-cols-3 gap-4">
                              <img src={img} alt="" />
                              <img src={img} alt="" />
                              <img src={img} alt="" />
                              <img src={img} alt="" />
                         </div>
                         <div className="text-[18px] font-medium mt-4">Administrasi</div>
                         <div className="flex items-center justify-center mt-4">
                             <div className="grid grid-cols-2 gap-10">
                             <div className="bg-white w-[305px] shadow rounded-[5px]">
                                   <div className="flex justify-between pl-2">
                                        <div className="text-[#E9871D] text-[18px] font-medium uderline w-[130px] mt-4">
                                             Anggaran Desa
                                             <div className="bg-[#0369A1] h-1"></div>
                                        </div>
                                        <div className="bg-[#0369A1] flex items-center pl-4 pr-4 rounded-tr-[5px]">
                                             <MoneyIcon size={32} />
                                        </div>
                                   </div>
                                   <div className="text-[24px] font-medium mt-6 p-2">
                                   Rp 10.570.000
                                   </div>
                              </div>
                              <div className="bg-white w-[305px] shadow rounded-[5px]">
                                   <div className="flex justify-between pl-2">
                                        <div className="text-[#0369A1] text-[18px] font-medium uderline w-[70px] mt-4">
                                            Donasi
                                             <div className="bg-[#E9871D] h-1"></div>
                                        </div>
                                        <div className="bg-[#E9871D] flex items-center pl-4 pr-4 rounded-tr-[5px]">
                                             <MoneyIcon size={32} />
                                        </div>
                                   </div>
                                   <div className="text-[24px] font-medium mt-6 p-2">
                                   Rp 10.570.000
                                   </div>
                              </div>
                             </div>
                         </div>

                    </div>
               </Layout>
          </div>
     )
}
