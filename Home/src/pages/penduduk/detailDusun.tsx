import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Profil } from '../../interfaces/profil'
import { getDusun, getProfil } from '../../services/desaServices';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Dusun } from '../../interfaces/dusun';

export default function DusunDetailPage() {
  const [profil, setProfil] = useState<Profil | null>(null);
  const [dusun, setDusun] = useState<Dusun | null>(null);
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
     async function fetchDusun(){
          try{
               const data =  await getDusun();
               setDusun(data[0]);
          }catch(error){
               console.log(error)
          }
     }
     fetchDusun();
  },[])

  const dataAgama = [
     { name: 'Kristen Protestan', value: 10 },
     { name: 'Khatolik', value: 15 },
     { name: 'Islam', value: 20 },
     { name: 'Hindu', value: 20 },
     { name: 'Budha', value: 20 },
     { name: 'Konghucu', value: 20 },
  ];

  const COLORSAgama =['#0369A1', '#1D6FE9', '#E9871D','#F61616','#0D9276','#834C10','#0C3510'];

  const dataPekerjaan = [
     { name: 'PNS', value: 10 },
     { name: 'Petani', value: 15 },
     { name: 'Wiraswasta', value: 20 },
   ];
 
   const COLORSPekerjaan = ['#0369A1', '#1D6FE9', '#E9871D'];

   const dataUsia = [
     { name: 'Anak-anak (5 - 11 tahun)', value: 10 },
     { name: 'Remaja (12 - 25 tahun)', value: 15 },
     { name: 'Dewasa (26 - 45 tahun)', value: 20 },
     { name: 'Lansia (46 - 65 tahun)', value: 20 },
   ];
 
   const COLORSUsia = ['#0369A1', '#1D6FE9', '#E9871D','#0D9276'];

   const dataPendidikan = [
     { name: 'SD', value: 10 },
     { name: 'SMP', value: 15 },
     { name: 'SMA', value: 20 },
     { name: 'Sarjana', value: 20 },
     { name: 'Diploma', value: 20 },
   ];
 
   const COLORSPendidikan = ['#0369A1', '#1D6FE9', '#E9871D','#F61616','#0D9276'];

   

  return (
    <div className="bg-[#F8F2F2]">
      <Layout>
        <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Detail Data  - Dusun {dusun?.nama_dusun}</div>
        <div className="bg-white p-4 rounded-[8px] ml-[56px] mr-[56px] mt-4">
        <div className="bg-[#0369A1] w-[200px] rounded-[7px] mt-4 mb-3 items-none">
                <div className="text-white text-center p-2"> {dusun?.nama_dusun}</div>
              </div>
          <div className="flex  justify-between items-center ml-[100px] mr-[100px] mt-8">
            <div className="">
            <div className="bg-[#0D9276] w-[200px] rounded-[7px] mt-4 mb-3 items-none">
                <div className="text-white text-center p-2"> Data Agama</div>
              </div>
              <PieChart width={400} height={300} margin={{ top: 20, right: 0, left: -40, bottom: 5 }}>
                <Pie
                  data={dataAgama}
                  cx={200}
                  cy={100}
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataAgama.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORSAgama[index % COLORSAgama.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="vertical" align="right" verticalAlign="top" wrapperStyle={{ marginLeft: 30 }} />
              </PieChart>
            </div>
            <div className="">
             
            <Table className='border border-2 border-[#525252]' style={{ borderRadius: '5px' }}>
                <TableHeader className='text-black bg-[#FFFFFF] text-center' style={{
                  borderBottom: '#5D5D5E solid',
                }}>
                  <TableHead >Agama</TableHead>
                  <TableHead className='text-center'>Laki-laki</TableHead>
                  <TableHead className='text-center'>Perempuan</TableHead>

                </TableHeader>
                <TableBody>
                  <TableRow >
                    <TableCell>Kristen Protestan</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Khatolik</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Islam</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Budha</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Hindu</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Konghucu</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </div>
          </div>
         
          <div className="flex  justify-between items-center ml-[100px] mr-[100px] mt-8">
            <div className="">
            <div className="bg-[#0D9276] w-[200px] rounded-[7px] mt-4 mb-3 items-none">
                <div className="text-white text-center p-2"> Data Pekerjaan</div>
              </div>
              <PieChart width={400} height={300} margin={{ top: 20, right: 0, left: -40, bottom: 5 }}>
                <Pie
                  data={dataPekerjaan}
                  cx={200}
                  cy={100}
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataPekerjaan.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORSPekerjaan[index % COLORSPekerjaan.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="vertical" align="right" verticalAlign="top" wrapperStyle={{ marginLeft: 30 }} />
              </PieChart>
            </div>
            <div className="">
             
            <Table className='border border-2 border-[#525252]' style={{ borderRadius: '5px' }}>
                <TableHeader className='text-black bg-[#FFFFFF] text-center' style={{
                  borderBottom: '#5D5D5E solid',
                }}>
                  <TableHead >Pekejaan</TableHead>
                  <TableHead className='text-center'>Laki-laki</TableHead>
                  <TableHead className='text-center'>Perempuan</TableHead>

                </TableHeader>
                <TableBody>
                  <TableRow >
                    <TableCell >PNS</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Petani</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Wiraswasta</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Sarjana</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </div>
          </div>
          <div className="flex  justify-between items-center ml-[100px] mr-[100px] mt-8">
            <div className="">
            <div className="bg-[#0D9276] w-[200px] rounded-[7px] mt-4 mb-3 items-none">
                <div className="text-white text-center p-2"> Data Usia</div>
              </div>
              <PieChart width={400} height={300} margin={{ top: 20, right: 0, left: -40, bottom: 5 }}>
                <Pie
                  data={dataUsia}
                  cx={200}
                  cy={100}
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataUsia.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORSUsia[index % COLORSUsia.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="vertical" align="right" verticalAlign="top" wrapperStyle={{ marginLeft: 30 }} />
              </PieChart>
            </div>
            <div className="">
             
            <Table className='border border-2 border-[#525252]' style={{ borderRadius: '5px' }}>
                <TableHeader className='text-black bg-[#FFFFFF] text-center' style={{
                  borderBottom: '#5D5D5E solid',
                }}>
                  <TableHead >Usia</TableHead>
                  <TableHead className='text-center'>Laki-laki</TableHead>
                  <TableHead className='text-center'>Perempuan</TableHead>

                </TableHeader>
                <TableBody>
                  <TableRow >
                    <TableCell >Anak-anak (5 - 11 tahun)</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Remaja (12 - 25 tahun)</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Dewasa (26 - 45 tahun)</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Lansia (46 - 65 tahun)</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </div>
          </div>
          <div className="flex  justify-between items-center ml-[100px] mr-[100px] mt-8">
            <div className="">
            <div className="bg-[#0D9276] w-[200px] rounded-[7px] mt-4 mb-3 items-none">
                <div className="text-white text-center p-2"> Data Pendidikan</div>
              </div>
              <PieChart width={400} height={300} margin={{ top: 20, right: 0, left: -40, bottom: 5 }}>
                <Pie
                  data={dataPendidikan}
                  cx={200}
                  cy={100}
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataPendidikan.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORSPendidikan[index % COLORSPendidikan.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="vertical" align="right" verticalAlign="top" wrapperStyle={{ marginLeft: 30 }} />
              </PieChart>
            </div>
            <div className="">
             
            <Table className='border border-2 border-[#525252]' style={{ borderRadius: '5px' }}>
                <TableHeader className='text-black bg-[#FFFFFF] text-center' style={{
                  borderBottom: '#5D5D5E solid',
                }}>
                  <TableHead >Pendidikan</TableHead>
                  <TableHead className='text-center'>Laki-laki</TableHead>
                  <TableHead className='text-center'>Perempuan</TableHead>

                </TableHeader>
                <TableBody>
                  <TableRow >
                    <TableCell>Sekolah Dasar</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Sekolah Menengah Pertama</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Sekolah Menengah Akhir</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Sarjana</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
