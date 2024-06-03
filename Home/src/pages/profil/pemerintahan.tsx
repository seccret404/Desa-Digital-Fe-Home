import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { getPemerintah, getProfil } from '../../services/desaServices';
import { Pemerintah } from '../../interfaces/pemerintah';
import { Pengumuman } from '../../interfaces/pengumuman';
import { Profil } from '../../interfaces/profil';

export default function PemerintahanPage() {
     const [kepdes, setkepdes] = useState<Pemerintah[]>([]);
     const [sekdes, setSekdes] = useState<Pemerintah[]>([]);
     const [bendahara, setbendahara] = useState<Pemerintah[]>([]);
     const [bpd, setBpd] = useState<Pemerintah[]>([]);
     const [kup, setKup] = useState<Pemerintah[]>([]);
     const [keuangan, setKeuangan] = useState<Pemerintah[]>([]);
     const [pembangunan, setPembangunan] = useState<Pemerintah[]>([]);
     const [pemerintahan, setPemerintahan] = useState<Pemerintah[]>([]);
     const [kesejahteraan, setKesejahteraan] = useState<Pemerintah[]>([]);
     const [pemberdayaan, setPemberdayaan] = useState<Pemerintah[]>([]);
     const [profil, setProfil] = useState<Profil | null>(null);

     useEffect(() => {
          async function fetchProfil() {
               try {
                    const data = await getProfil();
                    setProfil(data[0]);
               } catch (error) {
                    console.error('Error fetching profil:', error);
               }
          }
          fetchProfil();
     }, []);

     useEffect(() => {
          async function fetchPemerintah() {
               try {
                    const data = await getPemerintah();
                    const currentYear = new Date().getFullYear();
                    const filteredData = data.filter(p => new Date(p.tahun_selesai).getFullYear() >= currentYear);

                    const kp = filteredData.filter(p => p.jabatan === "Kepala Desa");
                    const sd = filteredData.filter(p => p.jabatan === "Sekretaris Desa");
                    const bd = filteredData.filter(p => p.jabatan === "Kaur Keuangan");
                    const bp = filteredData.filter(p => p.jabatan === "Ketua BPD");

                    const kudp = filteredData.filter(p => p.jabatan === "Kaur Umum dan Perencanaan");
                    const ku = filteredData.filter(p => p.jabatan === "Kaur Keuangan");
                    const kb = filteredData.filter(p => p.jabatan === "Kaur Pembangunan");
                    const kpr = filteredData.filter(p => p.jabatan === "Kaur Pemerintahan");
                    const kkr = filteredData.filter(p => p.jabatan === "Kaur Kesejahteraan Rakyat");
                    const kpm = filteredData.filter(p => p.jabatan === "Kaur Pemberdayaan Masyarakat");



                    setkepdes(kp);
                    setSekdes(sd);
                    setbendahara(bd);
                    setBpd(bp);
                    setKup(kudp);
                    setKeuangan(ku);
                    setPemerintahan(kpr);
                    setKesejahteraan(kkr);
                    setPemberdayaan(kpm);


               } catch (error) {
                    console.error('Error fetching pemerintah:', error);
               }
          }
          fetchPemerintah();
     }, []);
     return (
          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Strukttur Pemerintahan</div>
                    <div className="text-center font-bold text-[24px]  flex justify-center ">
                         <div className="w-[600px]">
                              Pemerintahan {profil?.nama_desa} Kecamatan {profil?.kecamatan} {profil?.kabupaten} Provinsi {profil?.provinsi}
                         </div>
                    </div>
                    <div className="bg-[#ffffff] rounded-[8px] ml-[56px] mr-[56px] p-4 mt-4">
                         <div className="bg-[#E9871D] w-[200px] rounded-[17px] ml-[50px]">
                              <div className="text-white text-center p-2">Pemerintahan Desa</div>
                         </div>
                         <div className="flex justify-between ml-[50px] mr-[50px] mt-4">
                              {kepdes.map((item, index) => (
                                   <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                        <div className="mt-3">
                                             <img src={`https://desa-api.desajanggadolok.id/images/pemerintah/${item.profil}`} alt={item.nama} className="rounded-[10px] h-[200px]" />
                                        </div>
                                        <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Kepala Desa</div>
                                   </div>
                              ))}
                              {sekdes.map((item, index) => (
                                   <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                        <div className="mt-3">
                                             <img src={`https://desa-api.desajanggadolok.id/images/pemerintah/${item.profil}`} alt={item.nama} className="rounded-[10px] h-[200px]" />
                                        </div>
                                        <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Sekretaris Desa</div>
                                   </div>
                              ))}
                              {bendahara.map((item, index) => (
                                   <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                        <div className="mt-3">
                                             <img src={`https://desa-api.desajanggadolok.id/images/pemerintah/${item.profil}`} alt={item.nama} className="rounded-[10px] h-[200px]" />
                                        </div>
                                        <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Bendahara Desa</div>
                                   </div>
                              ))}
                              {bpd.map((item, index) => (
                                   <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                        <div className="mt-3">
                                             <img src={`https://desa-api.desajanggadolok.id/images/pemerintah/${item.profil}`} alt={item.nama} className="rounded-[10px] h-[200px]" />
                                        </div>
                                        <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Ketua BPD</div>
                                   </div>
                              ))}
                         </div>

                         <div className="bg-[#E9871D] w-[200px] rounded-[17px] mt-4 ml-[50px]">
                              <div className="text-white text-center p-2">Bidang Kaur</div>
                         </div>
                         <div className="flex justify-between flex-wrap ml-[50px] mr-[50px] mt-4">

                              {pembangunan.map((item, index) => (
                                   <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                        <div className="mt-3">
                                             <img src={`https://desa-api.desajanggadolok.id/images/pemerintah/${item.profil}`} alt={item.nama} className="rounded-[10px] h-[200px]" />
                                        </div>
                                        <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Kaur Umum dan Perencanaan</div>
                                   </div>
                              ))}

                              {keuangan.map((item, index) => (
                                   <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                         <div className="mt-3">
                                             <img src={`https://desa-api.desajanggadolok.id/images/pemerintah/${item.profil}`} alt={item.nama} className="rounded-[10px] h-[200px]" />
                                        </div>
                                        <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Kaur Keuangan</div>
                                   </div>
                              ))}
                              {kup.map((item, index) => (
                                   <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                         <div className="mt-3">
                                             <img src={`https://desa-api.desajanggadolok.id/images/pemerintah/${item.profil}`} alt={item.nama} className="rounded-[10px] h-[200px]" />
                                        </div>
                                        <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Kaur Pembangunan</div>
                                   </div>
                              ))}
                              {pemerintahan.map((item, index) => (
                                   <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                        <div className="mt-3">
                                             <img src={`https://desa-api.desajanggadolok.id/images/pemerintah/${item.profil}`} alt={item.nama} className="rounded-[10px] h-[200px]" />
                                        </div>
                                        <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Kaur Pemerintahan</div>
                                   </div>
                              ))}
                         </div>
                         <div className="flex justify-between ml-[50px] mr-[50px] mt-4">
                              {kesejahteraan.map((item, index) => (
                                   <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                         <div className="mt-3">
                                             <img src={`https://desa-api.desajanggadolok.id/images/pemerintah/${item.profil}`} alt={item.nama} className="rounded-[10px] h-[200px]" />
                                        </div>
                                        <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Kaur Kesejahteraan Rakyat</div>
                                   </div>
                              ))}
                              {pemberdayaan.map((item, index) => (
                                   <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                         <div className="mt-3">
                                             <img src={`https://desa-api.desajanggadolok.id/images/pemerintah/${item.profil}`} alt={item.nama} className="rounded-[10px] h-[200px]" />
                                        </div>
                                        <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Kaur Pemberdayaan Masyarakat</div>
                                   </div>
                              ))}

                         </div>
                         {/* <div className="bg-[#E9871D] w-[200px] rounded-[17px] mt-4 ml-[50px]">
                              <div className="text-white text-center p-2">Anggota BPD</div>
                         </div> */}
                         {/* <div className="flex justify-between ml-[50px] mr-[50px] mt-4">
                              <div className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                   <div className="mt-3">
                                        <img src={''} className="rounded-[10px]" />
                                   </div>
                                   <div className="text-[18px] font-medium mt-[16px]">Edard</div>
                                   <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Kepala Desa</div>
                              </div>
                              <div className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                   <div className="mt-3">
                                        <img src={''} className="rounded-[10px]" />
                                   </div>
                                   <div className="text-[18px] font-medium mt-[16px]">Edard</div>
                                   <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Sekretaris Desa</div>
                              </div>
                              <div className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                   <div className="mt-3">
                                        <img src={''} className="rounded-[10px]" />
                                   </div>
                                   <div className="text-[18px] font-medium mt-[16px]">Edard</div>
                                   <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Ketua BPD</div>
                              </div>
                              <div className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                   <div className="mt-3">
                                        <img src={''} className="rounded-[10px]" />
                                   </div>
                                   <div className="text-[18px] font-medium mt-[16px]">Edard</div>
                                   <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Bendahara Desa</div>
                              </div>
                         </div> */}
                    </div>
               </Layout>
          </div>
     )
}
