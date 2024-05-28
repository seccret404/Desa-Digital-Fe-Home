import SearchIcon from "../../components/icon/searchIcon";
import Layout from "../../components/layout/Layout";
import CalenderICon from "../../components/icon/calenderIcon";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAgenda } from "../../services/desaServices";
import { Agenda } from "../../interfaces/agenda";
export default function AgendaPage() {
     const [searchText, setSearchText] = useState('');
     const [agenda, setAgenda] = useState<Agenda[]>([]);

     const handleChange = (event) => {
          setSearchText(event.target.value);
     };

     //agenda
     useEffect(() => {
          async function fetchAgenda() {
               try {
                    const data = await getAgenda();
                    const limaDataPertama = data.slice(0, 2);
                    setAgenda(limaDataPertama);
               } catch (error) {
                    console.error('Error fetching berita:', error);
               }
          }
          fetchAgenda();
     }, []);
     const limitTextToPengumuman = (text: string) => {
          const words = text.split(' ');
          if (words.length > 7) {
               return words.slice(0, 7).join(' ') + '...';
          }
          return text;
     };

     return (
          <div className="">
               <Layout>
                    <div className="bg-white mt-4 mb-4 ml-[56px] mr-[56px] rounded-[10px] p-6">
                         <div className="flex justify-center">
                              <div className="items-center  ">
                                   <div className="text-[#0369A1] text-[22px] font-medium tracking-[5px] text-center">Agenda Desa</div>
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
                         <div className="flex justify-center items-center">
                              <div className="grid grid-cols-2 gap-8">
                                   {agenda.map((item, index) =>
                                        <Link to={`/agenda-detail/${item.id}`}>
                                             <div className="bg-[#0369A1] shadow w-[499px] mt-8 text-white" > {/*card*/}
                                                  <div className="p-2">
                                                       <div className="ml-2">
                                                            <div className="text-[18px] font-medium text-white">{item.nama_kegiatan}</div>
                                                            <div className="flex items-center">
                                                                 <CalenderICon size={28} />
                                                                 <div className="text-12">{new Date(item.tanggal_kegiatan).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })} - {item.lokasi}</div>
                                                            </div>
                                                            <div className="text-[12px] mt-2" dangerouslySetInnerHTML={{ __html: limitTextToPengumuman(item.deskripsi_kegiatan) }}>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </Link>
                                   )}
                              </div>
                         </div>
                    </div>
               </Layout>
          </div>
     )
}
