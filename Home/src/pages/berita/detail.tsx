import Layout from "../../components/layout/Layout";
import CalenderICon from "../../components/icon/calenderIcon";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAgenda, getBeritaById } from "../../services/desaServices";
import { Berita } from "../../interfaces/berita";
import { Agenda } from "../../interfaces/agenda";

export default function DetailBeritaPage() {
     const { id } = useParams();
     const [berita, setBerita] = useState<Berita | null>(null);
     const [agenda, setAgenda] = useState<Agenda[]>([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
     useEffect(() => {
          const fetchBerita = async () => {
               try {
                    if (!id) {
                         return;
                    }
                    const data = await getBeritaById(id);
                    setBerita(data);
               } catch (error) {
                    console.error('Error fetching pengumuman:', error);
               } finally {
                    setLoading(false);
               }
          };
          fetchBerita();
     }, [id]);

     useEffect(() => {
          const fetchAgenda = async () => {
               try {
                    const data = await getAgenda();
                    const limaDataPertama = data.slice(0, 2);
                    setAgenda(limaDataPertama);
               } catch (error) {
                    console.error('Error fetching agenda:', error);
               }
          };
          fetchAgenda();
     }, []);

     if (loading) {
          return (
               <div className="loading-container">
                 <div className="loading-spinner"></div>
               </div>
             );
     }

     if (error) {
          return <div>Error: {error}</div>;
     }

     if (!berita) {
          return <div>No data found</div>;
     }

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
                    <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Detail Berita</div>
                    <div className="bg-white mt-4 mb-4 ml-[56px] mr-[56px] rounded-[10px] p-6">

                         <div className="flex justify-between mt-4">
                              <div className="">
                                   <div className="text-[20px] font-bold">{berita.judul_berita}</div>
                                   <div className="flex beritas-center mt-2">
                                        <CalenderICon size={28} />
                                        <div className="text-12 ">{new Date(berita.tgl_publikasi).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })} </div>
                                   </div>
                                   <div className="m-2">
                                        {berita.cover && typeof berita.cover === 'string' && (
                                             berita.cover.endsWith('.jpg') || berita.cover.endsWith('.png') || berita.cover.endsWith('.jpeg') ? (
                                                  <img src={`https://desa-api.desajanggadolok.id/images/cover/${berita.cover}`} alt="Cover Berita" className="w-full h-auto " />
                                             ) : (
                                                  <a href={`https://desa-api.desajanggadolok.id/images/cover/${berita.cover}`} target="_blank" rel="noopener noreferrer">{berita.cover}</a>
                                             )
                                        )}
                                   </div>
                                   <div className="text-justify text-[16px] mt-4 p-2" dangerouslySetInnerHTML={{ __html: (berita.isi_berita) }}>
                                   </div>
                                   <div className="m-2">
                                        {berita.file && typeof berita.file === 'string' && (
                                             berita.file.endsWith('.jpg') || berita.file.endsWith('.png') || berita.file.endsWith('.jpeg') ? (
                                                  <img src={`https://desa-digital-bakend-production.up.railway.app/images/file/${berita.file}`} alt="file Berita" className="w-full h-auto " />
                                             ) : (
                                                  <a href={`https://desa-digital-bakend-production.up.railway.app/images/file/${berita.file}`} download target="_blank" rel="noopener noreferrer" className="bg-[#D40F0F] p-2 rounded-[5px] text-[white]">Download PDF</a>
                                             )
                                        )}
                                   </div>


                              </div>
                              <div className="bg-[#0369A1] bg-opacity-20 w-[530px] rounded-[5px]">
                                   <div className="bg-[#E9871D] text-white text-center text-[20px] p-3 rounded-tr-[5px] rounded-tl-[5px]  ">Agenda Desa</div>
                                   {agenda.map((item, index) =>
                                        <Link to={`/agenda-detail/${item.id}`}>
                                             <div className="bg-[#ffffff] shadow w-[459px] mt-4 text-black m-3" > {/*card*/}
                                                  <div className="p-2">
                                                       <div className="ml-2">
                                                            <div className="text-[18px] font-medium text-black">{item.nama_kegiatan}</div>
                                                            <div className="flex beritas-center">
                                                                 <CalenderICon size={28} />
                                                                 <div className="text-12">{new Date(item.tanggal_kegiatan).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })} - {item.lokasi}</div>
                                                            </div>
                                                            <div className="text-[12px] mt-2" dangerouslySetInnerHTML={{ __html: (item.deskripsi_kegiatan) }}>
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
