import Layout from "../../components/layout/Layout"
import KetuaIcon from "../../components/icon/ketua"
import WakilIcon from "../../components/icon/wakil"
import SekreIcon from "../../components/icon/sekretaris"
import BendaharaIcon from "../../components/icon/bendahara"
import React, { useEffect, useState } from "react"
import { Organisasi } from "../../interfaces/organisasi"
import { useParams } from "react-router-dom"
import { getOrganisasiById, getProfil } from "../../services/desaServices"
import { Profil } from "../../interfaces/profil"

export default function DetailOrganisasi() {
     const { id } = useParams();
     const [organisasi, setOrganisasi] = useState<Organisasi | null>(null);
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
          const fetchBerita = async () => {
            try {
              if (!id) {
                return;
              }
              const data = await getOrganisasiById(id);
              setOrganisasi(data);
            } catch (error) {
          console.error('Error fetching pengumuman:', error);
            } 
          };
          fetchBerita();
        }, [id]);
     return (
          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Detail Organisasi</div>
                    <div className="text-[24px] text-center font-bold ml-[150px] mr-[150px] ">Pemerintahan {profil?.nama_desa} Kecamatan {profil?.kecamatan} {profil?.kabupaten} Provinsi {profil?.provinsi}</div>
                    <div className="bg-white ml-[56px] mr-[56px] mt-[27px] mt-[17px] p-[29px] rounded-[10px] mb-[20px]">
                         <div className="flex justify-between items-center ml-[100px] mr-[100px] border-[#000000] border p-2">
                              <img src={''} alt="" className="w-[300px]" />
                              <div className="border-[2px] border-[#000000] p-4">
                                   <div className="flex border border-[#000000] p-2">
                                        <div className="w-[200px] ">Nama Organisasi</div>
                                        <div className="font-bold">{organisasi?.nama_lembaga}</div>
                                   </div>
                                   <div className="flex border border-[#000000] p-2">
                                        <div className="w-[200px]">Tahun Berdiri</div>
                                        <div className="font-bold"> {new Date(organisasi?.tahun_berdiri).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}</div>
                                   </div>
                                   <div className="flex border border-[#000000] p-2">
                                        <div className="w-[200px]">Singkatan</div>
                                        <div className="font-bold">{organisasi?.singkatan}</div>
                                   </div>
                                   <div className="flex border border-[#000000] p-2">
                                        <div className="w-[200px]">Ketua</div>
                                        <div className="font-bold">{organisasi?.ketua}</div>
                                   </div>
                              </div>
                         </div>
                         <div className="text-justify text-[16px] mt-4" dangerouslySetInnerHTML={{ __html: (organisasi?.deskripsi) }}>
                         </div>

                         <div className="font-bold mt-4">Struktur Organisasi</div>
                         <div className="flex items-center justify-center">
                              <div className="grid grid-cols-4 gap-10">
                                   <div className="bg-white shadow w-[205px] h-[270px] flex flex-col justify-between  items-center">
                                        <div className="mt-8">
                                             <KetuaIcon size={100}/>
                                        </div>
                                        <div className="text-[18px] font-medium mt-[50px]">Ketua</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">{organisasi?.ketua}</div>
                                   </div>
                                   <div className="bg-white shadow w-[205px] h-[270px] flex flex-col justify-between  items-center">
                                        <div className="mt-8">
                                             <WakilIcon size={100}/>
                                        </div>
                                        <div className="text-[18px] font-medium mt-[50px]">Wakil Ketua</div>
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">{organisasi?.wakil_ketua}</div>
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
                                        <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">{organisasi?.bendahara}</div>
                                   </div>
                              </div>
                         </div>
                         <div className="flex justify-center mt-8">
                              <div className="bg-[#E13A3A] text-white w-[150px] text-[18px] text-center p-2">{organisasi?.jumlah_anggota} Anggota</div>
                         </div>


                    </div>
               </Layout>
          </div>
     )
}
