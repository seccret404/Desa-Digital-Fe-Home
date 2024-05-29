import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { getDusun, getPenduduk, getProfil } from '../../services/desaServices';
import { Profil } from '../../interfaces/profil';
import { Link } from 'react-router-dom';
import { Dusun } from '../../interfaces/dusun';
import { PendudukDesa } from '../../interfaces/penduduk';

export default function DusunPage() {
     const [profil, setProfil] = useState<Profil | null>(null);
     const [dusun, setDusun] = useState<Dusun[]>([]);
     const [penduduk, setPenduduk] = useState<PendudukDesa[]>([]);
     const [jumlahPendudukPerDusun, setJumlahPendudukPerDusun] = useState<{ dusunId: string; jumlahPenduduk: number; }[]>([]);
 
     const currentYear = new Date().getFullYear();
  useEffect(() => {
    async function fetchProfil() {
      try {
        const data = await getProfil();
        setProfil(data[0])
      } catch (error) {
        console.log(error)
      }
    }
    fetchProfil();
  }, [])

  useEffect(() =>{
     async function fetchPenduduk(){
       try{
         const data = await getPenduduk();
         setPenduduk(data);
   
         const jumlahPendudukPerDusun = dusun.map(dusunItem => {
           const pendudukDusun = penduduk.filter(penduduk => penduduk.id_dusun === dusunItem.id);
           return {
             dusunId: dusunItem.id || '', 
             jumlahPenduduk: pendudukDusun.length
           };
         });
   
         setJumlahPendudukPerDusun(jumlahPendudukPerDusun);
       }catch(error){
         console.log(error)
       }
     }
     fetchPenduduk();
   },[])
   

  useEffect(() =>{
     async function fetchDusun(){
          try{
               const data =  await getDusun();
               setDusun(data);
          }catch(error){
               console.log(error)
          }
     }
     fetchDusun();
  },[])
     return (
          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Data Dusun</div>
                    <div className="bg-white mt-4 mb-4 ml-[56px] mr-[56px] rounded-[10px] p-6">
                         <div className="font-bold text-center text-[20px]">Data Dusun {profil?.nama_desa} - {currentYear}</div>
                         <div className="grid grid-cols-4 gap-20 mt-4">
                              {dusun.map((item,index) =>
                              
                              <div className="bg-gradient-to-r from-blue-600 to-blue-900 flex flex-col justify-between shadow rounded-[5px]">
                              <div className="text-center text-[20px] text-white font-bold p-4">{item.nama_dusun}</div>
                              <div className="text-center text-[18px] text-white font-medium p-2">{jumlahPendudukPerDusun.find(penduduk => penduduk.dusunId === item.id)?.jumlahPenduduk || 0} Jiwa</div>
                              <div className="text-center text-[16px] text-[#E9871D] bg-white p-1"><Link to={`/dusun/${item.id}`}>Lihat Detail</Link></div>
                         </div>
                              )}
                         </div>
                    </div>
               </Layout>
          </div>
     )
}
