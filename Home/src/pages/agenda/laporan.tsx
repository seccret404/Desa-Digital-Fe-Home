import Layout from "../../components/layout/Layout"
import Button from "../../components/ui/button"
import CalenderICon from "../../components/icon/calenderIcon"
import ManCheckIcon from "../../components/icon/manCheckIcon"
import MoneyIcon from "../../components/icon/mondeyIcon"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Agenda } from "../../interfaces/agenda"
import { Laporan } from "../../interfaces/laporan"
import { getAgendaById, getLaporanAgenda } from "../../services/desaServices"
export default function LaporanAgenda() {
     const { id } = useParams<{ id: string }>();
     const [agenda, setAgenda] = useState<Agenda | null>(null);
     const [laporan, setLaporan] = useState<Laporan[]>([]);

     useEffect(() => {
          async function fetchData() {
               try {
                    if (!id) {
                         return;
                    }
                    // Fetch agenda by ID
                    const agendaData = await getAgendaById(id);
                    setAgenda(agendaData);

                    // Fetch all laporan
                    const allLaporan = await getLaporanAgenda();

                    // Filter laporan based on id_agenda
                    const filteredLaporan = allLaporan.filter((lap: Laporan) => lap.id_agenda === agendaData.id);
                    setLaporan(filteredLaporan);
               } catch (error) {
                    console.error('Error fetching data:', error);
               }
          }

          if (id) {
               fetchData();
          }
     }, [id]);

     if (!agenda) {
          return <div>Loading...</div>;
     }
     const formatRupiah = (number) => {
          return new Intl.NumberFormat('id-ID', {
               style: 'currency',
               currency: 'IDR',
               minimumFractionDigits: 0
          }).format(number);
     };

     return (
          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Detail Agenda</div>
                    <div className="bg-white ml-[56px] mr-[56px] mt-[27px] mt-[17px] p-[29px] rounded-[10px] mb-[20px]">
                         <div className="text-[20px] font-bold">{agenda.nama_kegiatan}</div>
                         <div className="flex items-center mt-2">
                              <CalenderICon size={28} />
                              <div className="text-12 ml-2">{new Date(agenda.tanggal_kegiatan).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })} - {agenda.lokasi}</div>
                         </div>
                         <div className="flex items-center mt-2">
                              <ManCheckIcon size={28} />
                              {laporan.map((lap) => (
                                   <div className="text-12 ml-2" key={lap.id}>Koordinator - {lap.koordinator} </div>
                              ))}
                         </div>
                         <div className="mt-4">
                              {laporan.map((lap) => (
                                   <Button key={lap.id} bgColor='#0D9276' width={192} height={33} rounded={5} color='white'>
                                        {lap.jumlah_peserta} Peserta
                                   </Button>
                              ))}
                         </div>
                         <div className="text-[18px] font-medium mt-4">Tujuan :</div>
                         <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-[5px]">
                              <div className="text-[18px] text-white p-4 text-justify" dangerouslySetInnerHTML={{ __html: (agenda.tujuan_kegiatan) }}>
                              </div>
                         </div>
                         <div className="text-justify text-[16px] mt-4" dangerouslySetInnerHTML={{ __html: (agenda.deskripsi_kegiatan) }}>
                         </div>
                         <div className="text-[18px] font-medium mt-4">Dokumentasi :</div>
                         <div className="grid grid-cols-3 gap-4">
                         {laporan.map((lap) => (
                                  <img src={`${lap.dokumentasi}`} alt="" />
                              ))}
                             
                         </div>
                         <div className="text-[18px] font-medium mt-4">Administrasi</div>
                         <div className="flex items-center justify-center mt-4">
                              <div className="grid grid-cols-2 gap-10">
                                   <div className="bg-white w-[305px] shadow rounded-[5px]">
                                        <div className="flex justify-between pl-2">
                                             <div className="text-[#E9871D] text-[18px] font-medium uderline w-[130px] mt-4">
                                                  Anggaran Desa
                                                  <div className="bg-[#0369A1] h-1"></div>
                                             </div>
                                             <div className="bg-[#0369A1] flex items-center pl-4 pr-4 rounded-tr-[5px]">
                                                  <MoneyIcon size={32} />
                                             </div>
                                        </div>
                                        {laporan.map((lap) => (
                                             <div className="text-[24px] font-medium mt-6 p-2" key={lap.id}>

                                                  {formatRupiah(lap.anggaran_desa)}
                                             </div>
                                        ))}

                                   </div>
                                   <div className="bg-white w-[305px] shadow rounded-[5px]">
                                        <div className="flex justify-between pl-2">
                                             <div className="text-[#0369A1] text-[18px] font-medium uderline w-[70px] mt-4">
                                                  Donasi
                                                  <div className="bg-[#E9871D] h-1"></div>
                                             </div>
                                             <div className="bg-[#E9871D] flex items-center pl-4 pr-4 rounded-tr-[5px]">
                                                  <MoneyIcon size={32} />
                                             </div>
                                        </div>
                                        {laporan.map((lap) => (
                                             <div className="text-[24px] font-medium mt-6 p-2" key={lap.id}>

                                                  {formatRupiah(lap.donasi)}
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>

                    </div>
               </Layout>
          </div>
     )
}
