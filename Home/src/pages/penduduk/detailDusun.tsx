import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Profil } from '../../interfaces/profil'
import { getDusun, getProfil, getDusunById,getPenduduk } from '../../services/desaServices';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Dusun } from '../../interfaces/dusun';
import { useParams } from 'react-router-dom';
import { PendudukDesa } from '../../interfaces/penduduk';

export default function DusunDetailPage() {
  const { id } = useParams();
  const [profil, setProfil] = useState<Profil | null>(null);
  const [dusun, setDusun] = useState<Dusun | null>(null);
  const [penduduk, setPenduduk] =   useState<PendudukDesa []> ([])
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

  useEffect(() => {
    async function fetchDusunById() {
      try {
        if(!id){
          return;
        }
        const data = await getDusunById(id); 
        setDusun(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDusunById();
  }, [id]);
  

  useEffect(() => {
    async function fetchPendudukByDusunId() {
      try {
        if (!id || !dusun) { // Periksa apakah dusun telah didefinisikan
          return;
        }
        
        const pendudukData = await getPenduduk();
        
        const filteredPenduduk = pendudukData.filter(person => person.id_dusun === dusun.id);
        setPenduduk(filteredPenduduk);
        console.log(dusun.nama_dusun); // Pastikan bahwa dusun telah didefinisikan dan memiliki nilai
    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    if (id) {
      fetchPendudukByDusunId();
    }
  }, [id, dusun]);
  
  
  const agamaCategories = ["Kristen Protestan", "Khatolik", "Islam", "Budha", "Hindu", "Konghucu"];
  const dataAgama = agamaCategories.map(category => {
    const lakiLaki = penduduk.filter(p => p.agama === category && p.jenis_kelamin === 'Laki-laki').length;
    const perempuan = penduduk.filter(p => p.agama === category && p.jenis_kelamin === 'Perempuan').length;
    return {
      name: category,
      lakiLaki,
      perempuan
    };
  });
  const pieData = dataAgama.map(item => ({ name: item.name, value: item.lakiLaki + item.perempuan }));
  const pekerjaanCategories = ["PNS", "Petani", "Wiraswasta"];

  const pekerjaanData = pekerjaanCategories.map(category => {
    const lakiLaki = penduduk.filter(p => p.pekerjaan === category && p.jenis_kelamin === 'Laki-laki').length;
    const perempuan = penduduk.filter(p => p.pekerjaan === category && p.jenis_kelamin === 'Perempuan').length;
    return {
      name: category,
      lakiLaki,
      perempuan
    };
  });

  const pieDatakerja = pekerjaanData.map(item => ({ name: item.name, value: item.lakiLaki + item.perempuan }));

  const COLORS =['#0369A1', '#1D6FE9', '#E9871D','#F61616','#0D9276','#834C10','#0C3510'];

 
  const calculateAgeCategory = (tanggal_lahir: string): string => {
    const birthYear = new Date(tanggal_lahir).getFullYear();
    const age = currentYear - birthYear;
    if (age >= 5 && age <= 11) {
      return 'Anak-anak (5 - 11 tahun)';
    } else if (age >= 12 && age <= 25) {
      return 'Remaja (12 - 25 tahun)';
    } else if (age >= 26 && age <= 45) {
      return 'Dewasa (26 - 45 tahun)';
    } else if (age >= 46 && age <= 65) {
      return 'Lansia (46 - 65 tahun)';
    } else {
      return 'Usia tidak sesuai kategori';
    }
  };

  const data = [
    { name: 'Anak-anak (5 - 11 tahun)', value: penduduk.filter(p => calculateAgeCategory(p.tanggal_lahir) === 'Anak-anak (5 - 11 tahun)').length },
    { name: 'Remaja (12 - 25 tahun)', value: penduduk.filter(p => calculateAgeCategory(p.tanggal_lahir) === 'Remaja (12 - 25 tahun)').length },
    { name: 'Dewasa (26 - 45 tahun)', value: penduduk.filter(p => calculateAgeCategory(p.tanggal_lahir) === 'Dewasa (26 - 45 tahun)').length },
    { name: 'Lansia (46 - 65 tahun)', value: penduduk.filter(p => calculateAgeCategory(p.tanggal_lahir) === 'Lansia (46 - 65 tahun)').length },
  ];
 
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

  const pendidikan = pendidikanData.map(item => ({ name: item.name, value: item.lakiLaki + item.perempuan }));

  return (
    <div className="bg-[#F8F2F2]">
      <Layout>
        <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Detail Data  - {dusun?.nama_dusun}</div>
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
                  data={pieData}
                  cx={200}
                  cy={130}
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
                <Legend layout="vertical" align="right" verticalAlign='middle' wrapperStyle={{ marginLeft: 30 }} />
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
                {dataAgama.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell className='text-center'>{item.lakiLaki}</TableCell>
                      <TableCell className='text-center'>{item.perempuan}</TableCell>
                    </TableRow>
                  ))}
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
                  data={pieDatakerja}
                  cx={200}
                  cy={100}
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieDatakerja.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
                {pekerjaanData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell className='text-center'>{item.lakiLaki}</TableCell>
                      <TableCell className='text-center'>{item.perempuan}</TableCell>
                    </TableRow>
                  ))}
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
             
            <Table className='border border-2 border-[#525252]' style={{ borderRadius: '5px' }}>
                <TableHeader className='text-black bg-[#FFFFFF] text-center' style={{
                  borderBottom: '#5D5D5E solid',
                }}>
                  <TableHead >Usia</TableHead>
                  <TableHead className='text-center'>Laki-laki</TableHead>
                  <TableHead className='text-center'>Perempuan</TableHead>

                </TableHeader>
                <TableBody>
                {data.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell className='text-center'>
                        {penduduk.filter(p => calculateAgeCategory(p.tanggal_lahir) === item.name && p.jenis_kelamin === 'Laki-laki').length}
                      </TableCell>
                      <TableCell className='text-center'>
                        {penduduk.filter(p => calculateAgeCategory(p.tanggal_lahir) === item.name && p.jenis_kelamin === 'Perempuan').length}
                      </TableCell>
                    </TableRow>
                  ))}

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
                  data={pendidikan}
                  cx={200}
                  cy={100}
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pendidikan.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
