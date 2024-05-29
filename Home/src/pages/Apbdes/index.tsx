import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { Anggaran } from '../../interfaces/anggaran';
import { useParams } from 'react-router-dom';
import { getAnggaranById } from '../../services/desaServices';
export default function ApbdesPage() {
     const { id } = useParams();
     const [anggaran, setAnggaran] = useState<Anggaran|null>(null);
     useEffect(() => {
          const fetchAnggaran = async () => {
            try {
              if (!id) {
                return;
              }
              const data = await getAnggaranById(id);
              setAnggaran(data);
            } catch (error) {
          console.error('Error fetching anggaran:', error);
            } 
          };
          fetchAnggaran();
        }, [id]);
     
     const formatRupiah = (number) => {
          return new Intl.NumberFormat('id-ID', {
               style: 'currency',
               currency: 'IDR',
               minimumFractionDigits: 0
          }).format(number);
     };

     const tooltipFormatter = (value) => formatRupiah(value);


      const rencanaPendapatan = Number(anggaran?.rencana_hasilaset) + Number(anggaran?.rencana_hasilusaha) + Number(anggaran?.rencana_swadia) +
      Number(anggaran?.rencana_danadesa) + Number(anggaran?.rencana_hasilpajak) + Number(anggaran?.rencana_alokasidana) +
      Number(anggaran?.rencana_bantuankeuangankabupaten) + Number(anggaran?.rencana_bantuankeuanganprovinsi) + Number(anggaran?.rencana_hibah) +
      Number(anggaran?.rencana_sumbanganpihakketiga) + Number(anggaran?.rencana_pendapatanlain);
  
    const realisasiPendapatan = Number(anggaran?.realisasi_hasilaset) + Number(anggaran?.realisasi_hasilusaha) + Number(anggaran?.realisasi_swadia) +
      Number(anggaran?.realisasi_danadesa) + Number(anggaran?.realisasi_hasilpajak) + Number(anggaran?.realisasi_alokasidana) +
      Number(anggaran?.realisasi_bantuankeuangankabupaten) + Number(anggaran?.realisasi_bantuankeuanganprovinsi) + Number(anggaran?.realisasi_hibah) +
      Number(anggaran?.realisasi_sumbanganpihakketiga) + Number(anggaran?.realisasi_pendapatanlain);
  
    const rencanaBelanja = Number(anggaran?.rencana_penyelenggaraanpemerintah) + Number(anggaran?.rencana_pembangunandesa) +
      Number(anggaran?.rencana_pembinaanmasyarakat) + Number(anggaran?.rencana_pemerdayaanmasyarakat) +
      Number(anggaran?.rencana_belanjatakterduga);
  
    const realisasiBelanja = Number(anggaran?.realisasi_penyelenggaraanpemerintah) + Number(anggaran?.realisasi_pembangunandesa) +
      Number(anggaran?.realisasi_pembinaanmasyarakat) + Number(anggaran?.realisasi_pemerdayaanmasyarakat) +
      Number(anggaran?.realisasi_rencanatakterduga);
  
    const rencanaPembiayaan = Number(anggaran?.rencana_silpa) + Number(anggaran?.rencana_pencairandanacadangan) +
      Number(anggaran?.rencana_hasilpenjualan) + Number(anggaran?.rencana_pembentukandanacadangan) +
      Number(anggaran?.rencana_penyertaanmodaldesa);
  
    const realisasiPembiayaan = Number(anggaran?.realisasi_silpa) + Number(anggaran?.realisasi_pencairandanacadangan) +
      Number(anggaran?.realisasi_hasilpenjualan) + Number(anggaran?.realisasi_pembentukandanacadangan) +
      Number(anggaran?.realisasi_penyertaanmodaldesa);
  

const dataRencana = [
{ name: 'Pendapatan Desa', value: rencanaPendapatan },
{ name: 'Belanja Desa', value: rencanaBelanja },
{ name: 'Pembiayaan Desa', value: rencanaPembiayaan },
];

const dataRealisasi = [
{ name: 'Pendapatan Desa', value: realisasiPendapatan },
{ name: 'Belanja Desa', value: realisasiBelanja },
{ name: 'Pembiayaan Desa', value: realisasiPembiayaan },
];
    

     const COLORS = ['#0369A1', '#1D6FE9', '#E9871D'];

     return (
          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Detail APBDes</div>
                    <div className="bg-white p-4 rounded-[8px] ml-[56px] mr-[56px] mt-4">
                         <div className="flex justify-center">
                              <div className="bg-gradient-to-r from-blue-600 to-blue-900 w-[200px] p-3 rounded-[5px] text-white text-center">
                                   APBDes {anggaran?.tahun_anggaran}
                              </div>
                         </div>
                         <div className="">
                              <div className="bg-[#E9871D] w-[200px] rounded-[17px] mt-4 ml-[50px]">
                                   <div className="text-white text-center p-2"> Data Diagram</div>
                              </div>
                              <div className="flex justify-center">
                                   <div className="">
                                        <div className="text-center">Rencana Anggaran</div>
                                       <PieChart width={400} height={250}>
                                        <Pie
                                             data={dataRencana}
                                             cx={200}
                                             cy={100}
                                             labelLine={false}
                                             outerRadius={80}
                                             fill="#8884d8"
                                             dataKey="value"
                                        >
                                             {dataRencana.map((entry, index) => (
                                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                             ))}
                                        </Pie>
                                        <Tooltip formatter={tooltipFormatter}/>
                                        <Legend />
                                   </PieChart> 
                                   </div>
                                   <div className="">
                                        <div className="text-center">Realisasi Anggaran</div>
                                            <PieChart width={400} height={250}>
                                        <Pie
                                             data={dataRealisasi}
                                             cx={200}
                                             cy={100}
                                             labelLine={false}
                                             outerRadius={80}
                                             fill="#8884d8"
                                             dataKey="value"
                                        >
                                             {dataRealisasi.map((entry, index) => (
                                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                             ))}
                                        </Pie>
                                        <Tooltip formatter={tooltipFormatter}/>
                                        <Legend />
                                   </PieChart>
                                   </div>
                               
                              </div>
                              <div className="">
                                   
                                   <div className="ml-[50px] mr-[50px] mt-4"  >
                                        <Tabs defaultValue="pendapatan" className="w-full">
                                             <TabsList className='bg-[#F7F6F6] w-full text-white flex justify-between p-4'>
                                                  <TabsTrigger className='bg-[#0369A1] w-[200px] rounded-[5px] p-2 hover:bg-white hover:text-black radix-state-active:bg-white radix-state-active:text-black' value="pendapatan">Pendapatan Desa</TabsTrigger>
                                                  <TabsTrigger className='bg-[#1D6FE9] w-[200px] rounded-[5px] p-2 hover:bg-white hover:text-black radix-state-active:bg-white radix-state-active:text-black' value="belanja">Belanja Desa</TabsTrigger>
                                                  <TabsTrigger className='bg-[#E9871D] w-[200px] rounded-[5px] p-2 hover:bg-white hover:text-black radix-state-active:bg-white radix-state-active:text-black' value="pembiayaan">Pembiayaan Desa</TabsTrigger>
                                             </TabsList>


                                             <TabsContent value="pendapatan">
                                                  <div className="">
                                                       <div className="">
                                                            <Table className='border border-2 border-[#0890EA]'>
                                                                 <TableHeader className='text-white bg-[#0890EA] text-center' style={{
                                                                      borderBottom: '#0890EA solid',
                                                                 }}>
                                                                      <TableHead >Jenis Pendapatan</TableHead>
                                                                      <TableHead className='text-'>Rencana Anggaran</TableHead>
                                                                      <TableHead className='text-'> Realisasi Anggaran</TableHead>

                                                                 </TableHeader>
                                                                 <TableBody>
                                                                      <TableRow >
                                                                           <TableCell className='text-[#0890ea] font-bold'>Pendapatan Hasil Usaha</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Hasil Aset</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.rencana_hasilaset)}</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.realisasi_hasilaset)}</TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Hasil Usaha</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.rencana_hasilusaha)}</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.realisasi_hasilusaha)}</TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Swadiya, Partisipasi, Gotong Royong</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.rencana_swadia)}</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.realisasi_swadia)}</TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell className='text-[#0890ea] font-bold'>Pendapata Transfer</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>

                                                                      <TableRow >
                                                                           <TableCell>Dana Desa</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.rencana_danadesa)}</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.realisasi_danadesa)}</TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Bagi Hasil Pajak & Retribusi</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.rencana_hasilpajak)}</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.realisasi_hasilpajak)}</TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Alokasi Dana Desa</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.rencana_alokasidana)}</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.realisasi_alokasidana)}</TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Bantuan Keuangan Kabupaten</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.rencana_bantuankeuangankabupaten)}</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.realisasi_bantuankeuangankabupaten)}</TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Bantuan Keuangan Provinsi</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.rencana_bantuankeuanganprovinsi)}</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.realisasi_bantuankeuanganprovinsi)}</TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell className='text-[#0890ea] font-bold'>Pendapata Lain-lain</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Hibah</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.rencana_hibah)}</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.realisasi_hibah)}</TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Sumbangan Pihak ketiga</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.rencana_sumbanganpihakketiga)}</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.realisasi_sumbanganpihakketiga)}</TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Pendapatan Lain-lain</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.rencana_pendapatanlain)}</TableCell>
                                                                           <TableCell>{formatRupiah(anggaran?.realisasi_pendapatanlain)}</TableCell>
                                                                      </TableRow>
                                                                 </TableBody>
                                                            </Table>
                                                       </div>
                                                  </div>
                                             </TabsContent>
                                             <TabsContent value="belanja">
                                                  <Table className='border border-2 border-[#0890EA]'>
                                                       <TableHeader className='text-white bg-[#0890EA] text-center' style={{
                                                            borderBottom: '#0890EA solid',
                                                       }}>
                                                            <TableHead >Jenis Pendapatan</TableHead>
                                                            <TableHead className='text-center'>Rencana Anggaran</TableHead>
                                                            <TableHead className='text-center'> Realisasi Anggaran</TableHead>

                                                       </TableHeader>
                                                       <TableBody>

                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PENYELENGGARAAN PEMERINTAHAN DESA</TableCell>
                                                                 <TableCell>{formatRupiah(anggaran?.rencana_penyelenggaraanpemerintah)} </TableCell>
                                                                 <TableCell> {formatRupiah(anggaran?.realisasi_penyelenggaraanpemerintah)}</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PELAKSANAAN PEMBANGUNAN DESA</TableCell>
                                                                 <TableCell>{formatRupiah(anggaran?.rencana_pembangunandesa)} </TableCell>
                                                                 <TableCell>{formatRupiah(anggaran?.realisasi_pembangunandesa)} </TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PEMBINAAN KEMASYARAKATAN DESA</TableCell>
                                                                 <TableCell> {formatRupiah(anggaran?.rencana_pembinaanmasyarakat)}</TableCell>
                                                                 <TableCell>{formatRupiah(anggaran?.realisasi_pembinaanmasyarakat)} </TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PEMBERDAYAAN KEMASYARAKATAN DESA</TableCell>
                                                                 <TableCell> {formatRupiah(anggaran?.rencana_pemerdayaanmasyarakat)}</TableCell>
                                                                 <TableCell> {formatRupiah(anggaran?.realisasi_pemerdayaanmasyarakat)}</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>BELANJA TAK TERDUGA</TableCell>
                                                                 <TableCell> {formatRupiah(anggaran?.rencana_belanjatakterduga)}</TableCell>
                                                                 <TableCell> {formatRupiah(anggaran?.realisasi_rencanatakterduga)}</TableCell>
                                                            </TableRow>


                                                       </TableBody>
                                                  </Table>
                                             </TabsContent>
                                             <TabsContent value="pembiayaan">
                                                  <Table className='border border-2 border-[#0890EA]'>
                                                       <TableHeader className='text-white bg-[#0890EA] text-center' style={{
                                                            borderBottom: '#0890EA solid',
                                                       }}>
                                                            <TableHead >Jenis Pendapatan</TableHead>
                                                            <TableHead className='text-center'>Rencana Anggaran</TableHead>
                                                            <TableHead className='text-center'> Realisasi Anggaran</TableHead>

                                                       </TableHeader>
                                                       <TableBody>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PENERIMAAN PEMBIAYAAN</TableCell>
                                                                 <TableCell>{formatRupiah(anggaran?.rencana_pembinaanmasyarakat)}</TableCell>
                                                                 <TableCell>{formatRupiah(anggaran?.realisasi_pembinaanmasyarakat)}</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>SiLPA</TableCell>
                                                                 <TableCell>{formatRupiah(anggaran?.rencana_silpa)} </TableCell>
                                                                 <TableCell>{formatRupiah(anggaran?.realisasi_silpa)} </TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Pencairan Dana Cadangan</TableCell>
                                                                 <TableCell>{formatRupiah(anggaran?.rencana_pencairandanacadangan)} </TableCell>
                                                                 <TableCell> {formatRupiah(anggaran?.realisasi_pencairandanacadangan)}</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Hasil penjualan kekayaan Desa yang dipisahkan</TableCell>
                                                                 <TableCell> {formatRupiah(anggaran?.rencana_hasilpenjualan)}</TableCell>
                                                                 <TableCell> {formatRupiah(anggaran?.realisasi_hasilpenjualan)}</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>Pendapatan Transfer</TableCell>
                                                                 <TableCell></TableCell>
                                                                 <TableCell></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Pembentukan Dana Cadangan</TableCell>
                                                                 <TableCell> {formatRupiah(anggaran?.rencana_pembentukandanacadangan)}</TableCell>
                                                                 <TableCell> {formatRupiah(anggaran?.realisasi_pembentukandanacadangan)}</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Penyertaan Modal Desa</TableCell>
                                                                 <TableCell>{formatRupiah(anggaran?.rencana_penyertaanmodaldesa)} </TableCell>
                                                                 <TableCell>{formatRupiah(anggaran?.realisasi_penyertaanmodaldesa)} </TableCell>
                                                            </TableRow>


                                                       </TableBody>
                                                  </Table>
                                             </TabsContent>
                                        </Tabs>
                                   </div>
                              </div>
                         </div>
                    </div>
               </Layout>
          </div>
     );
}
