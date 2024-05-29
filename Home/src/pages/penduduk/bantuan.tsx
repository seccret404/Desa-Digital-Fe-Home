import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { Profil } from '../../interfaces/profil';
import { getProfil, getPenerimaBantuan, getPenduduk } from '../../services/desaServices';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Penerima } from '../../interfaces/penerimaBantuan';
import { PendudukDesa } from '../../interfaces/penduduk';

export default function BantuanPage() {
  const [profil, setProfil] = useState<Profil | null>(null);
  const [penerimaBantuan, setPenerimaBantuan] = useState<Penerima[]>([]);
  const [pendudukData, setPendudukData] = useState<PendudukDesa[]>([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    async function fetchData() {
      try {
        const profilData = await getProfil();
        setProfil(profilData[0]);
        const penerimaBantuanData = await getPenerimaBantuan();
        setPenerimaBantuan(penerimaBantuanData);
        const pendudukData = await getPenduduk(); 
        setPendudukData(pendudukData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const filterByJenisBantuan = (jenis: string) => {
    return penerimaBantuan.filter(penerima => penerima.jenis_bantuan === jenis);
  };

  const countByJenisKelamin = (data: Penerima[], jenisKelamin: string) => {
    const pendudukByJenisKelamin = pendudukData.filter(penduduk => penduduk.jenis_kelamin === jenisKelamin);
    return data.filter(penerima => pendudukByJenisKelamin.some(penduduk => penduduk.id === penerima.id_penduduk)).length;
  };

  const dataPemerintah = filterByJenisBantuan('Pemerintah').map(item => ({ name: item.nama_bantuan, value: countByJenisKelamin(filterByJenisBantuan('Pemerintah'), 'Laki-laki') + countByJenisKelamin(filterByJenisBantuan('Pemerintah'), 'Perempuan') }));
  const gatherDataDesa = () => {
    const filteredData = filterByJenisBantuan('Desa');
    const uniqueBantuans: { [key: string]: number } = {};

    filteredData.forEach(item => {
      if (!uniqueBantuans[item.nama_bantuan]) {
        uniqueBantuans[item.nama_bantuan] = countByJenisKelamin(filteredData, 'Laki-laki') + countByJenisKelamin(filteredData, 'Perempuan');
      }
    });

    return Object.keys(uniqueBantuans).map(name => ({ name, value: uniqueBantuans[name] }));
  };

  const dataDesa = gatherDataDesa();


  const COLORS = ['#0369A1', '#1D6FE9', '#E9871D'];

  return (
    <div className="bg-[#F8F2F2]">
      <Layout>
        <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Statistik Penduduk  - Bantuan</div>
        <div className="bg-white p-4 rounded-[8px] ml-[56px] mr-[56px] mt-4">
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-900 w-[300px] p-3 rounded-[5px] text-white text-center">
              Data Statistik Penerima Bantuan {profil?.nama_desa} - {currentYear}
            </div>
          </div>
          <div className="flex justify-between ml-[100px] mr-[100px] mt-8">
            <div>
              <div className="bg-[#E9871D] w-[200px] rounded-[7px] mt-4 ml-[50px]">
                <div className="text-white text-center p-2"> Data Diagram</div>
              </div>
              <PieChart width={400} height={300} margin={{ top: 20, right: 0, left: -40, bottom: 5 }}>
                <Pie
                  data={dataPemerintah}
                  cx={200}
                  cy={100}
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataPemerintah.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="vertical" align="right" verticalAlign="top" wrapperStyle={{ marginLeft: 30 }} />
              </PieChart>
            </div>
            <div>
              <div className="bg-[#0369A1] w-[200px] rounded-[7px] mt-4 mb-3 items-none">
                <div className="text-white text-center p-2"> Data Table</div>
              </div>
              <Table className='border border-2 border-[#525252] w-[450px]' style={{ borderRadius: '5px' }}>
                <TableHeader className='text-black bg-[#FFFFFF] text-center' style={{ borderBottom: '#5D5D5E solid' }}>
                  <TableHead >Bantuan</TableHead>
                  <TableHead className='text-center'>Laki-laki</TableHead>
                  <TableHead className='text-center'>Perempuan</TableHead>
                </TableHeader>
                <TableBody>
                  {dataPemerintah.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell className='text-center'>{countByJenisKelamin(filterByJenisBantuan('Pemerintah'), 'Laki-laki')}</TableCell>
                      <TableCell className='text-center'>{countByJenisKelamin(filterByJenisBantuan('Pemerintah'), 'Perempuan')}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="flex justify-between ml-[100px] mr-[100px] mt-8">
            <div>
              <div className="bg-[#E9871D] w-[200px] rounded-[7px] mt-4 ml-[50px]">
                <div className="text-white text-center p-2"> Data Diagram</div>
              </div>
              <PieChart width={400} height={300} margin={{ top: 20, right: 0, left: -40, bottom: 5 }}>
                <Pie
                  data={dataDesa}
                  cx={200}
                  cy={100}
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataDesa.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="vertical" align="right" verticalAlign="top" wrapperStyle={{ marginLeft: 30 }} />
              </PieChart>
            </div>
            <div>
              <div className="bg-[#0369A1] w-[200px] rounded-[7px] mt-4 mb-3 items-none">
                <div className="text-white text-center p-2"> Data Table</div>
              </div>
              <Table className='border border-2 border-[#525252] w-[450px]' style={{ borderRadius: '5px' }}>
                <TableHeader className='text-black bg-[#FFFFFF] text-center' style={{ borderBottom: '#5D5D5E solid' }}>
                  <TableHead >Bantuan</TableHead>
                  <TableHead className='text-center'>Laki-laki</TableHead>
                  <TableHead className='text-center'>Perempuan</TableHead>
                </TableHeader>
                <TableBody>
                  {dataDesa.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell className='text-center'>{countByJenisKelamin(filterByJenisBantuan('Desa'), 'Laki-laki')}</TableCell>
                      <TableCell className='text-center'>{countByJenisKelamin(filterByJenisBantuan('Desa'), 'Perempuan')}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
