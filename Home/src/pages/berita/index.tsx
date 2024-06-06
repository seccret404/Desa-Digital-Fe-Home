import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import SearchIcon from "../../components/icon/searchIcon";
import CalenderICon from "../../components/icon/calenderIcon";
import { Link } from "react-router-dom";
import React from "react";
import { Berita } from "../../interfaces/berita";
import { getBerita, getPengumuman } from "../../services/desaServices";
import { Pengumuman } from "../../interfaces/pengumuman";

export default function BeritaPage() {
     const [berita, setBerita] = useState<Berita[]>([]);
     const [searchText, setSearchText] = useState('');
     const [pengumuman, setPengumuman] = useState<Pengumuman[]>([]);

     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchText(event.target.value);
     };

     useEffect(() => {
          async function fetchBerita() {
               try {
                    const data = await getBerita();
                    const limaDataPertama = data.slice(0, 10);
                    setBerita(limaDataPertama);
               } catch (error) {
                    console.error('Error fetching berita:', error);
               }
          }
          fetchBerita();
     }, []);

     const limitTextTo30Words = (text: string) => {
          const words = text.split(' ');
          if (words.length > 15) {
               return words.slice(0, 15).join(' ') + '...';
          }
          return text;
     };

     //pengumuman
     useEffect(() => {
          async function fetchPengumuman() {
               try {
                    const data = await getPengumuman();
                    setPengumuman(data);
               } catch (error) {
                    console.error('Error fetching berita:', error);
               }
          }
          fetchPengumuman();
     }, []);

     // Filter berita based on searchText
     const filteredBerita = berita.filter(item =>
          item.judul_berita.toLowerCase().includes(searchText.toLowerCase())
     );

     return (


          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-white mt-4 mb-4 md:ml-[56px] md:mr-[56px] rounded-[10px] m-2 p-6">
                         <div className="flex justify-center">
                              <div className="items-center  ">
                                   <div className="text-[#0369A1] text-[22px] font-medium tracking-[5px] text-center">Berita Desa</div>
                                   <div className="md:w-[500px] w-[300px] flex mt-2 items-center">
                                   <input
                                             value={searchText}
                                             onChange={handleChange}
                                             type="search"
                                             className="border border-[2px] border-blue-500 w-full h-[40px] rounded-[20px] pl-5 text-[#0369A1] pr-4"
                                        />
                                        {searchText.length === 0 && (
                                             <div className="absolute md:ml-[450px] ml-[260px]">
                                                  <SearchIcon size={27} />
                                             </div>
                                        )}

                                   </div>
                              </div>
                         </div>
                         <div className="font-bold text-[20px]">Daftar Berita</div>
                         <div className="flex flex-wrap justify-between mt-4">
                              <div className="grid grid-cols-1  ">

                                   {filteredBerita.map((item, index) =>
                                        <Link to={`/berita-detail/${item.id}`}>
                                             <div className="bg-white shadow md:w-[499px] mt-2">
                                                  <div className="flex p-2">
                                                  {item.cover && typeof item.cover === 'string' && (
                                                    item.cover.endsWith('.jpg') || item.cover.endsWith('.png') || item.cover.endsWith('.jpeg') ? (
                                                        <img src={`https://desa-api.desajanggadolok.id/images/cover/${item.cover}`} alt="Cover Berita" className="md:w-[200px] w-[100px]  md:h-[100px]" />
                                                    ) : (
                                                        <a href={`https://desa-api.desajanggadolok.id/images/cover/${item.cover}`} target="_blank" rel="noopener noreferrer">{item.cover}</a>
                                                    )
                                                )}   
                                                       <div className="ml-2">
                                                            <div className="md:text-[14px] font-bold text-black">{item.judul_berita}</div>
                                                            <div className="flex items-center">
                                                                 <CalenderICon size={28} />
                                                                 <div className="text-12"> {new Date(item.tgl_publikasi).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}</div>
                                                            </div>
                                                            <div className="text-[12px] mt-2" dangerouslySetInnerHTML={{ __html: limitTextTo30Words(item.isi_berita) }}>

                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </Link>
                                   )}

                              </div>
                              <div className="bg-[#0369A1] bg-opacity-20 md:w-[530px] rounded-[5px] mt-4">
                                   <div className="bg-[#E9871D] text-white text-center text-[20px] p-3 rounded-tr-[5px] rounded-tl-[5px]  ">Pengumuman Desa</div>
                                   {pengumuman.map((item, index) =>
                                        <div className="bg-[#ffffff] shadow md:w-[459px] mt-4 text-black m-3" > {/*card*/}
                                             <div className="p-2">

                                                  <Link to={`/pengumuman-detail/${item.id}`}>
                                                       <div className="ml-2">
                                                            <div className="md:text-[18px] font-medium text-black">{item.judul_pengumuman}</div>
                                                            <div className="flex items-center">
                                                                 <CalenderICon size={28} />
                                                                 <div className="text-12">{new Date(item.tgl_publikasi).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })} </div>
                                                            </div>
                                                            <div className="text-[12px] mt-2" dangerouslySetInnerHTML={{ __html: limitTextTo30Words(item.deskripsi_pengumuman) }}>

                                                            </div>
                                                       </div>
                                                  </Link>

                                             </div>
                                        </div>
                                   )}
                              </div>
                         </div>

                    </div>
               </Layout>
          </div>

     )
}
