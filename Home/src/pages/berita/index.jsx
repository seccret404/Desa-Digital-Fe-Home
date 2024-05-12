import { useState } from "react";
import Layout from "../../components/layout/Layout";
import SearchIcon from "../../components/icon/searchIcon";
import CalenderICon from "../../components/icon/calenderIcon";
import rapat from '../../assets/rapat.png'
import { Link } from "react-router-dom";

export default function BeritaPage() {
     const [searchText, setSearchText] = useState('');
     const handleChange = (event) => {
          setSearchText(event.target.value);
     };
     return (


          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-white mt-4 mb-4 ml-[56px] mr-[56px] rounded-[10px] p-6">
                         <div className="flex justify-center">
                              <div className="items-center  ">
                                   <div className="text-[#0369A1] text-[22px] font-medium tracking-[5px] text-center">Berita Desa</div>
                                   <div className="w-[500px] flex mt-2 items-center">
                                        <input
                                             value={searchText}
                                             onChange={handleChange}
                                             type="search"
                                             className="border border-[2px] border-blue-500 w-full h-[40px] rounded-[20px] pl-5 text-[#0369A1] pr-4"
                                        />
                                        {searchText.length === 0 && (
                                             <div className="absolute ml-[450px]">
                                                  <SearchIcon size={27} />
                                             </div>
                                        )}

                                   </div>
                              </div>
                         </div>
                         <div className="font-bold text-[20px]">Daftar Berita</div>
                         <div className="flex justify-between mt-4">
                              <div className="grid grid-cols-1  ">
                                  <Link to={'/berita-detail'}>
                                   <div className="bg-white shadow w-[499px] mt-2">
                                        <div className="flex p-2">
                                             <img src={rapat} alt="" width={139} height={118} />
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
                                  </Link>
                                  
                                  
                                   <div className="bg-white shadow w-[499px] mt-2">
                                        <div className="flex p-2">
                                             <img src={rapat} alt="" width={139} height={118} />
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
                              <div className="bg-[#0369A1] bg-opacity-20 w-[530px] rounded-[5px]">
                                   <div className="bg-[#E9871D] text-white text-center text-[20px] p-3 rounded-tr-[5px] rounded-tl-[5px]  ">Pengumuman Desa</div>
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
