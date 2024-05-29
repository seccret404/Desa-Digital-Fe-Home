import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Profil } from '../../interfaces/profil'
import { getPenduduk, getProfil } from '../../services/desaServices';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { PendudukDesa } from '../../interfaces/penduduk';

export default function PendidikanPage() {
  const [profil, setProfil] = useState<Profil | null>(null);
  const [penduduk, setPenduduk] = useState<PendudukDesa[]>([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    async function fetchProfil() {
      try {
        const data = await getProfil();
        setProfil(data[0]);
        const pendudukData = await getPenduduk();
        setPenduduk(pendudukData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProfil();
  }, []);

  const pendidikanCategories = ["SD", "SMP", "SMA", "D4", "S1"];
  const pendidikanLabels = {
    SD: "Sekolah Dasar",
    SMP: "Sekolah Menengah Pertama",
    SMA: "Sekolah Menengah Atas",
    D4: "Diploma",
    S1: "Sarjana"
  };

  const pendidikanData = pendidikanCategories.map(category => {
    const lakiLaki = penduduk.filter(p => p.pendidikan_terakhir === category && p.jenis_kelamin === 'Laki-laki').length;
    const perempuan = penduduk.filter(p => p.pendidikan_terakhir === category && p.jenis_kelamin === 'Perempuan').length;
    return {
      name: pendidikanLabels[category],
      lakiLaki,
      perempuan
    };
  });

  const pieData = pendidikanData.map(item => ({ name: item.name, value: item.lakiLaki + item.perempuan }));

  const COLORS = ['#0369A1', '#1D6FE9', '#E9871D','#F61616','#0D9276','#834C10','#0C3510'];

  return (
    <div className="bg-[#F8F2F2]">
      <Layout>
        <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">
          Statistik Penduduk  - Pendidikan
        </div>
        <div className="bg-white p-4 rounded-[8px] ml-[56px] mr-[56px] mt-4">
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-900 w-[300px] p-3 rounded-[5px] text-white text-center">
              Data Statistik Pendidikan Penduduk {profil?.nama_desa} - {currentYear}
            </div>
          </div>
          <div className="flex  justify-between ml-[100px] mr-[100px] mt-8">
            <div className="">
              <div className="bg-[#E9871D] w-[200px] rounded-[7px] mt-4 ml-[50px]">
                <div className="text-white text-center p-2"> Data Diagram</div>
              </div>
              <PieChart width={400} height={300} margin={{ top: 20, right: 0, left: -90, bottom: 5 }}>
                <Pie
                  data={pieData}
                  cx={200}
                  cy={100}
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="vertical" align="right" verticalAlign="top" wrapperStyle={{ marginLeft: 30 }} />
              </PieChart>
            </div>
            <div className="">
              <div className="bg-[#0369A1] w-[200px] rounded-[7px] mt-4 mb-3 items-none">
                <div className="text-white text-center p-2"> Data Table</div>
              </div>
              <Table className='border border-2 border-[#525252]' style={{ borderRadius: '5px' }}>
                <TableHeader className='text-black bg-[#FFFFFF] text-center' style={{
                  borderBottom: '#5D5D5E solid',
                }}>
                  <TableHead >Pendidikan</TableHead>
                  <TableHead className='text-center'>Laki-laki</TableHead>
                  <TableHead className='text-center'>Perempuan</TableHead>
                </TableHeader>
                <TableBody>
                  {pendidikanData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className={index === 0 ? 'text-[#0890ea] font-bold' : ''}>{item.name}</TableCell>
                      <TableCell className='text-center'>{item.lakiLaki}</TableCell>
                      <TableCell className='text-center'>{item.perempuan}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}