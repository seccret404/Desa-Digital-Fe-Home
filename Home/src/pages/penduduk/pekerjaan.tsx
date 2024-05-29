import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Profil } from '../../interfaces/profil'
import { getProfil } from '../../services/desaServices';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'

export default function PekerjaanPage() {
  const [profil, setProfil] = useState<Profil | null>(null);
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

  const data = [
    { name: 'PNS', value: 10 },
    { name: 'Petani', value: 15 },
    { name: 'Wiraswasta', value: 20 },
  ];

  const COLORS = ['#0369A1', '#1D6FE9', '#E9871D'];
  return (
    <div className="bg-[#F8F2F2]">
      <Layout>
        <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Statistik Penduduk  - Pekerjaan</div>
        <div className="bg-white p-4 rounded-[8px] ml-[56px] mr-[56px] mt-4">
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-900 w-[300px] p-3 rounded-[5px] text-white text-center">
              Data Statistik Pendidikan Pekerjaan {profil?.nama_desa} - {currentYear}
            </div>
          </div>
          <div className="flex  justify-between ml-[100px] mr-[100px] mt-8">
            <div className="">
              <div className="bg-[#E9871D] w-[200px] rounded-[7px] mt-4 ml-[50px]">
                <div className="text-white text-center p-2"> Data Diagram</div>
              </div>
              <PieChart width={400} height={300} margin={{ top: 20, right: 0, left: -40, bottom: 5 }}>
                <Pie
                  data={data}
                  cx={200}
                  cy={100}
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
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
                  <TableHead >Pekerjaan</TableHead>
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
        </div>
      </Layout>
    </div>
  )
}
