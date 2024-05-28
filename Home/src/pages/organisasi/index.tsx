import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import SearchIcon from "../../components/icon/searchIcon";
import CalenderICon from "../../components/icon/calenderIcon";
import organisasi from '../../assets/organisasi.png'
import { Link } from "react-router-dom";
import React from "react";
import { Organisasi } from "../../interfaces/organisasi";
import { getOrganisasi } from "../../services/desaServices";
export default function OrganisasiPage() {
     const [searchText, setSearchText] = useState('');
     const handleChange = (event) => {
          setSearchText(event.target.value);
     };

     const [organisasi, setOrganisasi] = useState<Organisasi[]>([])

     useEffect(() =>{
          async function fetchOrganisasi(){
               try{
                    const data = await getOrganisasi();
                    setOrganisasi(data);
               }
               catch (error) {
                    console.error('Error fetching profil:', error);
                }
          }
          fetchOrganisasi();
     },[])
     return (
          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-white mt-4 mb-4 ml-[56px] mr-[56px] rounded-[10px] p-6">
                         <div className="flex justify-center">
                              <div className="items-center  ">
                                   <div className="text-[#0369A1] text-[22px] font-medium tracking-[5px] text-center">Organisasi Desa</div>
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
                         <div className="font-bold text-[20px]">Daftar Organisasi</div>
                         <div className="flex justify-between mt-4">
                              <div className="grid grid-cols-3 gap-5 mr-[50px]">
                                   {organisasi.map((item,index) =>
                                    <Link to={`/organisasi-detail/${item.id}`}>
                                <div className="bg-[#0369A1] text-white flex flex-col shadow-lg ">
                                        <div className="flex justify-center"><img src={''} alt="" /></div>
                                        <div className="text-center p-10">{item.nama_lembaga}</div>
                                        <div className="flex justify-between">
                                             <div className="bg-white w-[25px]"></div>
                                             <div className="text-[12px] font-medium uderline  mt-4 mb-2">
                                             {new Date(item.tahun_berdiri).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}
                                                  <div className="bg-[#E9871D] h-1 rounded-[2px]"></div>
                                             </div>
                                             <div className="bg-white w-[25px]"></div>
                                        </div>
                                   </div>
                                </Link>
                                   )}
                              </div>
                              <div className="bg-[#0369A1] bg-opacity-20 w-[530px] rounded-[5px]">
                                   <div className="bg-[#E9871D] text-white text-center text-[20px] p-3 rounded-tr-[5px] rounded-tl-[5px]  ">Berita Desa</div>
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
