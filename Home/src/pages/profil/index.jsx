import CalIcon from "../../components/icon/calIcon"
import ManCheckIcon from "../../components/icon/manCheckIcon"
import MapIcon from "../../components/icon/mapIcon"
import PhoneIcon from "../../components/icon/phone"
import Layout from "../../components/layout/Layout"
import Button from "../../components/ui/button"
import profil from '../../assets/profil.png'
export default function ProfilPage() {
     return (
          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-white ml-[56px] mr-[56px] rounded-[10px]">
                         <div className="ml-[80px] mr-[90px] pt-10 mt-4 pb-10 mb-4 ">
                              <div className="flex justify-between">
                                   <div className="">
                                        <div className="text-[20px] font-bold">Desa Sosor Dolok</div>
                                        <div className="flex items-center mt-2">
                                             <PhoneIcon size={24} />
                                             <div className="ml-4">0822 4687 3787</div>
                                        </div>
                                        <div className="flex items-center mt-2">
                                             <MapIcon size={24} />
                                             <div className="ml-4">Jln Efrata, Kec. Harian, Kabupaten Samosir, Provinsi Sumatera Utara</div>
                                        </div>
                                        <div className="flex items-center mt-2">
                                             <CalIcon size={24} />
                                             <div className="ml-4">Jln Efrata, Kec. Harian, Kabupaten Samosir, Provinsi Sumatera Utara</div>
                                        </div>
                                        <div className="flex items-center mt-2">
                                             <ManCheckIcon size={24} />
                                             <div className="ml-4">Jln Efrata, Kec. Harian, Kabupaten Samosir, Provinsi Sumatera Utara</div>
                                        </div>
                                        <div className="mt-8">
                                             <Button bgColor="#E9871D" width={300} height={45} rounded={5} color="white">
                                                  Struktur Pemerintahan Desa
                                             </Button>
                                        </div>
                                   </div>
                                   <div className="">
                                        <img src={profil} alt="" />
                                   </div>
                              </div>
                              <div className="">
                                   <div className="text-black text-[24px] font-medium uderline w-[121px] mt-4">
                                        Profil Desa
                                        <div className="bg-[#0369A1] h-1"></div>
                                   </div>
                                   <div className="text-justify text-[14px]">
                                        Desa Sosor Dolok terletak di daerah dataran tinggi, menawarkan pemandangan alam yang menakjubkan dengan latar belakang pegunungan yang megah dan udara yang sejuk. Desa ini terkenal dengan kebun teh yang membentang luas, menciptakan panorama hijau yang menyejukkan mata. Penduduk desa yang mayoritas adalah petani teh, menjalani hidup dengan ritme yang tenang dan penuh kesederhanaan, jauh dari hiruk-pikuk kota.
                                        Keunikan Desa Sosor Dolok tidak hanya terletak pada keindahan alamnya, tetapi juga pada kekayaan budayanya. Warga desa masih memegang teguh adat istiadat dan tradisi yang turun-temurun, termasuk upacara-upacara yang berkaitan dengan pertanian dan kepercayaan lokal. Di sini, pengunjung dapat menyaksikan langsung berbagai festival budaya yang diadakan dengan penuh warna dan keceriaan. Selain itu, keramahan penduduk lokal menjadikan setiap pengalaman kunjungan menjadi lebih berkesan dan autentik.
                                   </div>

                                   <div className="text-black text-[24px] font-medium uderline w-[40px] mt-4">
                                        Visi
                                        <div className="bg-[#0369A1] h-1"></div>
                                   </div>
                                   <div className="text-justify text-[14px]">
                                        Visi Desa Sosor Dolok adalah menjadi desa wisata yang berkelanjutan, yang memadukan kearifan lokal dengan inovasi modern untuk mewujudkan kesejahteraan dan kebahagiaan bagi seluruh warganya serta memberikan pengalaman yang unik dan berkesan bagi para pengunjung. Desa ini berkomitmen untuk mengembangkan ekonomi lokal melalui pemanfaatan sumber daya alam dan budaya yang berkelanjutan, sekaligus melestarikan lingkungan dan adat istiadat yang ada.
                                   </div>
                                   <div className="text-black text-[24px] font-medium uderline w-[40px] mt-4">
                                        Misi
                                        <div className="bg-[#0369A1] h-1"></div>
                                   </div>
                                   <div className="text-justify text-[14px]">
                                        Visi Desa Sosor Dolok adalah menjadi desa wisata yang berkelanjutan, yang memadukan kearifan lokal dengan inovasi modern untuk mewujudkan kesejahteraan dan kebahagiaan bagi seluruh warganya serta memberikan pengalaman yang unik dan berkesan bagi para pengunjung. Desa ini berkomitmen untuk mengembangkan ekonomi lokal melalui pemanfaatan sumber daya alam dan budaya yang berkelanjutan, sekaligus melestarikan lingkungan dan adat istiadat yang ada.
                                   </div>

                                   <div className="text-center text-black text-[24px] font-medium mt-4">Peta Desa</div>
                                   <div className="flex justify-center">
                                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31887.264160649553!2d98.61863630425401!3d2.536889786251211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031d0933c31e0a5%3A0xdb7c1c2489e8d729!2sSosor%20Dolok%2C%20Kec.%20Harian%2C%20Kabupaten%20Samosir%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1713770166453!5m2!1sid!2sid"
                    width="800"
                    height="450"
                    className="border-0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                                   </div>
                              </div>
                         </div>
                    </div>
               </Layout>
          </div>

     )
}
