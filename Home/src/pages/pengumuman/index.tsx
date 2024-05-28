import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import SearchIcon from "../../components/icon/searchIcon";
import CalenderICon from "../../components/icon/calenderIcon";
import { Link } from "react-router-dom";
import React from "react";
import { Pengumuman } from "../../interfaces/pengumuman";
import { getAgenda, getPengumuman } from "../../services/desaServices";
import { Agenda } from "../../interfaces/agenda";

export default function PengumumanPage() {
     const [searchText, setSearchText] = useState('');
     const [pengumuman, setPengumuman] = useState<Pengumuman[]>([]);
     const [agenda, setAgenda] = useState<Agenda[]>([]);

     const handleChange = (event) => {
          setSearchText(event.target.value);
     };

     //pengumuman
     useEffect(() => {
          async function fetchPengumuman() {
               try {
                    const data = await getPengumuman();
                    const limaDataPertama = data.slice(0, 3);
                    setPengumuman(limaDataPertama);
               } catch (error) {
                    console.error('Error fetching berita:', error);
               }
          }
          fetchPengumuman();
     }, []);
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

     const limitTextTo30Words = (text: string) => {
          const words = text.split(' ');
          if (words.length > 15) {
               return words.slice(0, 15).join(' ') + '...';
          }
          return text;
     };

     const limitTextToPengumuman = (text: string) => {
          const words = text.split(' ');
          if (words.length > 7) {
            return words.slice(0, 7).join(' ') + '...';
          }
          return text;
        };

     return (


          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-white mt-4 mb-4 ml-[56px] mr-[56px] rounded-[10px] p-6">
                         <div className="flex justify-center">
                              <div className="items-center  ">
                                   <div className="text-[#0369A1] text-[22px] font-medium tracking-[5px] text-center">Pengumuman Desa</div>
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
                         <div className="font-bold text-[20px]">Daftar Pengumuman</div>
                         <div className="flex justify-between mt-4">
                              <div className="grid grid-cols-1  ">
                                   {pengumuman.map((item, index) =>
                                        <Link to={`/pengumuman-detail/${item.id}`}>
                                             <div className="bg-white shadow w-[499px] mt-2">
                                                  <div className="flex p-2">
                                                  {item.file_pengumuman && typeof item.file_pengumuman === 'string' && (
                                                    item.file_pengumuman.endsWith('.jpg') || item.file_pengumuman.endsWith('.png') || item.file_pengumuman.endsWith('.jpeg') ? (
                                                        <img src={`https://desa-digital-bakend-production.up.railway.app/api/pengumuman_cover/${item.file_pengumuman}`} alt="Cover Pengumuman" className="w-20 h-auto" />
                                                    ) : (
                                                        <a href={`https://desa-digital-bakend-production.up.railway.app/api/pengumuman_cover/${item.file_pengumuman}`} target="_blank" rel="noopener noreferrer">{item.file_pengumuman}</a>
                                                    )
                                                )}
                                                       <div className="ml-2">
                                                            <div className="text-[18px] font-medium text-black">{item.judul_pengumuman}</div>
                                                            <div className="flex items-center">
                                                                 <CalenderICon size={28} />
                                                                 <div className="text-12">{new Date(item.tgl_publikasi).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}</div>
                                                            </div>
                                                            <div className="text-[12px] mt-2" dangerouslySetInnerHTML={{ __html: limitTextTo30Words(item.deskripsi_pengumuman) }}>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </Link>
                                   )}
                              </div>
                              <div className="bg-[#0369A1] bg-opacity-20 w-[530px] rounded-[5px]">
                                   <div className="bg-[#E9871D] text-white text-center text-[20px] p-3 rounded-tr-[5px] rounded-tl-[5px]  ">Agenda Desa</div>
                                   {agenda.map((item,index) =>
                                   <Link to={''}>
                                       <div className="bg-[#ffffff] shadow w-[459px] mt-4 text-black m-3" > {/*card*/}
                                        <div className="p-2">
                                             <div className="ml-2">
                                                  <div className="text-[18px] font-medium text-black">{item.nama_kegiatan}</div>
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
