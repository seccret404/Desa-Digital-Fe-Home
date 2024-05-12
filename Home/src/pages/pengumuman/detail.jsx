import Layout from "../../components/layout/Layout";
import CalenderICon from "../../components/icon/calenderIcon";
import rapat from '../../assets/rapat.png'

export default function DetailPengumumanPage() {

     return (


          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Detail Pengumuman</div>
                    <div className="bg-white mt-4 mb-4 ml-[56px] mr-[56px] rounded-[10px] p-6">

                         <div className="flex justify-between mt-4">
                              <div className="">
                                   <div className="text-[20px] font-bold">Rapat Pertemuan Kepala Dusun Desa Sosor Dolok</div>
                                   <div className="flex items-center mt-2">
                                        <CalenderICon size={28} />
                                        <div className="text-12 ">Rabu, 17 April 2024 </div>
                                   </div>
                                   <div className="m-2">
                                        <img src={rapat} alt="" className="w-full h-[150px]" />
                                   </div>
                                   <div className="text-justify text-[16px] mt-4 p-2">
                                        Kegiatan pertemuan kepala dusun meliputi pembahasan isu-isu penting seperti keamanan, kesejahteraan, dan pembangunan di lingkungan dusun. Para kepala dusun dan warga secara aktif berdiskusi untuk mencari solusi terbaik atas berbagai permasalahan yang dihadapi. Selain itu, dalam pertemuan ini juga dilakukan penyampaian informasi terkait dengan program-program pemerintah, kegiatan sosial, dan kegiatan kemasyarakatan lainnya. Ada juga sesi untuk merencanakan kegiatan bersama yang akan dilaksanakan dalam periode tertentu untuk meningkatkan kesejahteraan dan keharmonisan masyarakat dusun. Setelah itu, dilakukan evaluasi terhadap hasil kegiatan sebelumnya dan perumusan langkah-langkah untuk mencapai tujuan-tujuan yang telah ditetapkan.
                                   </div>
                                   <div className="m-2">
                                        <img src={rapat} alt="" className="w-full h-[150px]" />
                                   </div>

                              </div>
                              <div className="bg-[#0369A1] bg-opacity-20 w-[530px] rounded-[5px]">
                                   <div className="bg-[#E9871D] text-white text-center text-[20px] p-3 rounded-tr-[5px] rounded-tl-[5px]  ">Agenda Desa</div>
                                   <div className="bg-[#ffffff] shadow w-[459px] mt-8 text-black m-3" > {/*card*/}
                                        <div className="p-2">
                                             <div className="ml-2">
                                                  <div className="text-[18px] font-medium text-black">Penyerahan Penerima Banuan Sosial</div>
                                                  <div className="flex items-center">
                                                       <CalenderICon size={28} />
                                                       <div className="text-12">Rabu, 17 April 2024 - Kantor Kepala Desa</div>
                                                  </div>
                                                  <div className="text-[12px] mt-2">
                                                       Penyerahan bantuan sosial kepaba maysrakat Desa Sosor Dolok pada hari Rabu, 17 April 2024 di kantor Kepala Desa Sosor..
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                    </div>
               </Layout>
          </div>

     )
}
