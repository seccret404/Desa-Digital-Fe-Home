import Layout from '../../components/layout/Layout'
import CalenderICon from '../../components/icon/calenderIcon'
import Button from '../../components/ui/button'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Agenda } from '../../interfaces/agenda'
import { getAgendaById, getLaporanAgenda } from '../../services/desaServices'
import { Laporan } from '../../interfaces/laporan'

export default function DetailAgenda() {
     const { id } = useParams();
     const [agenda,setAgenda] = useState<Agenda | null>(null);
     const [laporanAgenda, setLaporanAgenda] = useState<Laporan[]>([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState<string | null>(null);
     useEffect(() => {
          const fetchAgenda = async () => {
            try {
              if (!id) {
                return;
              }
              const data = await getAgendaById(id);
              setAgenda(data);
            } catch (error) {
              console.error('Error fetching pengumuman:', error);
              setError((error as Error).message);
            } finally {
              setLoading(false);
            }
          };
          fetchAgenda();
        }, [id]);
        useEffect(() => {
          async function fetchLaporanAgenda() {
            try {
              const data = await getLaporanAgenda();
              setLaporanAgenda(data);
            } catch (error) {
              console.error('Error fetching agenda report:', error);
            }
          }
          fetchLaporanAgenda();
        }, []);
        
  if (loading) {
     return <div>Loading...</div>;
   }
 
   if (error) {
     return <div>Error: {error}</div>;
   }
 
   if (!agenda) {
     return <div>No data found</div>;
   }
     return (
          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Detail Agenda</div>
                    <div className="bg-white ml-[56px] mr-[56px] mt-[27px] mt-[17px] p-[20px] rounded-[10px] mb-[20px]">
                         <div className="text-[20px] font-bold">{agenda.nama_kegiatan}</div>
                         <div className="flex items-center mt-2">
                              <CalenderICon size={28} />
                              <div className="text-12 ">{new Date(agenda.tanggal_kegiatan).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })} - {agenda.lokasi}</div>
                         </div>
                         <div className="mt-4">
                         {laporanAgenda.filter(item => item.id_agenda === agenda.id).length > 0 ? (
                          <Button bgColor='#0D9276' width={192} height={33} rounded={5} color='white'>
                                  <Link to={`/detail-laporan/${agenda.id}`}>Lihat Laporan</Link>
                              </Button>
                        ) : (
                          <Link to={''}>Belum Ada Laporan</Link>
                        )}
                              
                         </div>
                         <div className="text-[18px] font-medium mt-4">Tujuan :</div>
                         <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-[5px]">
                              <div className="text-[18px] text-white p-4 text-justify" dangerouslySetInnerHTML={{ __html: (agenda.tujuan_kegiatan) }}>
                              
                              </div>
                         </div>
                         <div className="text-justify text-[16px] mt-4" dangerouslySetInnerHTML={{ __html: (agenda.deskripsi_kegiatan) }}>
                         </div>
                    </div>
               </Layout>
          </div>
     )
}
