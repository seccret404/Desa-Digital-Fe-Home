import Layout from "../../components/layout/Layout"
import organisasi from '../../assets/organisasi.png'
import pemerintah from '../../assets/pemerintah.png'
import KetuaIcon from "../../components/icon/ketua"
import WakilIcon from "../../components/icon/wakil"
import SekreIcon from "../../components/icon/sekretaris"
import BendaharaIcon from "../../components/icon/bendahara"

export default function DetailOrganisasi() {
     return (
          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Detail Organisasi</div>
                    <div className="text-[24px] text-center font-bold ml-[150px] mr-[150px] ">Pemerintahan Desa Sosor Dolok Kecamatan Harian Kabupaten Samosir Provinsi Sumatera Utara</div>
                    <div className="bg-white ml-[56px] mr-[56px] mt-[27px] mt-[17px] p-[29px] rounded-[10px] mb-[20px]">
                         <div className="flex justify-between items-center ml-[100px] mr-[100px] border-[#000000] border p-2">
                              <img src={organisasi} alt="" className="w-[300px]" />
                              <div className="border-[2px] border-[#000000] p-4">
                                   <div className="flex border border-[#000000] p-2">
                                        <div className="w-[200px] ">Nama Organisasi</div>
                                        <div className="font-bold">Pemberdayaan Kesejahteraan Keluarga</div>
                                   </div>
                                   <div className="flex border border-[#000000] p-2">
                                        <div className="w-[200px]">Tahun Berdiri</div>
                                        <div className="font-bold">12 Maret 2009</div>
                                   </div>
                                   <div className="flex border border-[#000000] p-2">
                                        <div className="w-[200px]">Singkatan</div>
                                        <div className="font-bold">PKK</div>
                                   </div>
                                   <div className="flex border border-[#000000] p-2">
                                        <div className="w-[200px]">Pembina</div>
                                        <div className="font-bold">Edward Tua</div>
                                   </div>
                              </div>
                         </div>
                         <div className="text-justify text-[16px] mt-4">
                              Kegiatan pertemuan kepala dusun meliputi pembahasan isu-isu penting seperti keamanan, kesejahteraan, dan pembangunan di lingkungan dusun. Para kepala dusun dan warga secara aktif berdiskusi untuk mencari solusi terbaik atas berbagai permasalahan yang dihadapi. Selain itu, dalam pertemuan ini juga dilakukan penyampaian informasi terkait dengan program-program pemerintah, kegiatan sosial, dan kegiatan kemasyarakatan lainnya. Ada juga sesi untuk merencanakan kegiatan bersama yang akan dilaksanakan dalam periode tertentu untuk meningkatkan kesejahteraan dan keharmonisan masyarakat dusun. Setelah itu, dilakukan evaluasi terhadap hasil kegiatan sebelumnya dan perumusan langkah-langkah untuk mencapai tujuan-tujuan yang telah ditetapkan.
                         </div>

                         <div className="font-bold mt-4">Struktur Organisasi</div>
                         <div className="flex items-center justify-center">
                              <div className="grid grid-cols-4 gap-10">
                                   <div className="bg-white shadow w-[205px] h-[270px] flex flex-col justify-between  items-center">
                                        <div className="mt-8">
                                             <KetuaIcon size={100}/>
                                        </div>
                                        <div className="text-[18px] font-medium mt-[50px]">Ketua</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Exaudi Siregar</div>
                                   </div>
                                   <div className="bg-white shadow w-[205px] h-[270px] flex flex-col justify-between  items-center">
                                        <div className="mt-8">
                                             <WakilIcon size={100}/>
                                        </div>
                                        <div className="text-[18px] font-medium mt-[50px]">Wakil Ketua</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Exaudi Siregar</div>
                                   </div>
                                   <div className="bg-white shadow w-[205px] h-[270px] flex flex-col justify-between  items-center">
                                        <div className="mt-8">
                                             <SekreIcon size={100}/>
                                        </div>
                                        <div className="text-[18px] font-medium mt-[50px]">Sekretaris</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Exaudi Siregar</div>
                                   </div>
                                   <div className="bg-white shadow w-[205px] h-[270px] flex flex-col justify-between  items-center">
                                        <div className="mt-8">
                                             <BendaharaIcon size={100}/>
                                        </div>
                                        <div className="text-[18px] font-medium mt-[50px]">Bendahara</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Exaudi Siregar</div>
                                   </div>
                              </div>
                         </div>
                         <div className="flex justify-center mt-8">
                              <div className="bg-[#E13A3A] text-white w-[150px] text-[18px] text-center p-2">24 Anggota</div>
                         </div>


                    </div>
               </Layout>
          </div>
     )
}
