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
                    const kp = data.filter(p => p.jabatan == "Kepala Desa")
                    const sd = data.filter(p => p.jabatan == "Sekretaris Desa")
                    const bd = data.filter(p => p.jabatan == "Kaur Keuangan")
                    const bp = data.filter(p => p.jabatan == "Ketua BPD")

                    setkepdes(kp);
                    setSekdes(sd);
                    setbendahara(bd)
                    setBpd(bp);
               } catch (error) {
                    console.error('Error fetching pemerintah:', error);
               }

          }
          fetchPemerintah();
     }, [])
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
                                             <img src={''} alt={item.nama} className="rounded-[10px]" />
                                        </div>
                                        <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Kepala Desa</div>
                                   </div>
                              ))}
                              {sekdes.map((item, index) => (
                                   <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                        <div className="mt-3">
                                             <img src={''} alt={item.nama} className="rounded-[10px]" />
                                        </div>
                                        <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Sekretaris Desa</div>
                                   </div>
                              ))}
                              {bendahara.map((item, index) => (
                                   <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                        <div className="mt-3">
                                             <img src={''} alt={item.nama} className="rounded-[10px]" />
                                        </div>
                                        <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Bendahara Desa</div>
                                   </div>
                              ))}
                              {bpd.map((item, index) => (
                                   <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
                                        <div className="mt-3">
                                             <img src={''} alt={item.nama} className="rounded-[10px]" />
                                        </div>
                                        <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Ketua BPD</div>
                                   </div>
                              ))}
                         </div>

                         <div className="bg-[#E9871D] w-[200px] rounded-[17px] mt-4 ml-[50px]">
                              <div className="text-white text-center p-2">Bidang Kaur</div>
                         </div>
                         <div className="flex justify-between ml-[50px] mr-[50px] mt-4">

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
                         </div>
                         <div className="flex justify-between ml-[50px] mr-[50px] mt-4">
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
                         </div>
                         <div className="bg-[#E9871D] w-[200px] rounded-[17px] mt-4 ml-[50px]">
                              <div className="text-white text-center p-2">Anggota BPD</div>
                         </div>
                         <div className="flex justify-between ml-[50px] mr-[50px] mt-4">
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
                         </div>
                    </div>
               </Layout>
          </div>
     )
}
