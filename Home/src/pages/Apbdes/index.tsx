import React from 'react';
import Layout from '../../components/layout/Layout';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
export default function ApbdesPage() {
     const data = [
          { name: 'Pendapatan Desa', value: 10 },
          { name: 'Belanja Desa', value: 15 },
          { name: 'Pembiayaan Desa', value: 20 },
     ];

     const COLORS = ['#0369A1', '#1D6FE9', '#E9871D'];

     return (
          <div className="bg-[#F8F2F2]">
               <Layout>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">Detail APBDes</div>
                    <div className="bg-white p-4 rounded-[8px] ml-[56px] mr-[56px] mt-4">
                         <div className="flex justify-center">
                              <div className="bg-gradient-to-r from-blue-600 to-blue-900 w-[200px] p-3 rounded-[5px] text-white text-center">
                                   APBDes
                              </div>
                         </div>
                         <div className="">
                              <div className="bg-[#E9871D] w-[200px] rounded-[17px] mt-4 ml-[50px]">
                                   <div className="text-white text-center p-2"> Data Diagram</div>
                              </div>
                              <div className="flex justify-center">
                                   <PieChart width={400} height={350}>
                                        <Pie
                                             data={data}
                                             cx={200}
                                             cy={200}
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
                                        <Legend />
                                   </PieChart>
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
                                                                      <TableHead className='text-center'>Rencana Anggaran</TableHead>
                                                                      <TableHead className='text-center'> Realisasi Anggaran</TableHead>

                                                                 </TableHeader>
                                                                 <TableBody>
                                                                      <TableRow >
                                                                           <TableCell className='text-[#0890ea] font-bold'>Pendapata Hasil Usaha</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Hasil Aset</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Hasil Usaha</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Swadiya, Partisipasi, Gotong Royong</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell className='text-[#0890ea] font-bold'>Pendapata Transfer</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>

                                                                      <TableRow >
                                                                           <TableCell>Dana Desa</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Bagi Hasil Pajak & Retribusi</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Alokasi Dana Desa</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Bantuan Keuangan Kabupaten</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Bantuan Keuangan Provinsi</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell className='text-[#0890ea] font-bold'>Pendapata Lain-lain</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Hibah</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Sumbangan Pihak ketiga</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Pendapatan Lain-lain</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
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
                                                                 <TableCell> </TableCell>
                                                                 <TableCell> </TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PELAKSANAAN PEMBANGUNAN DESA</TableCell>
                                                                 <TableCell> </TableCell>
                                                                 <TableCell> </TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PEMBINAAN KEMASYARAKATAN DESA</TableCell>
                                                                 <TableCell> </TableCell>
                                                                 <TableCell> </TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PEMBERDAYAAN KEMASYARAKATAN DESA</TableCell>
                                                                 <TableCell> </TableCell>
                                                                 <TableCell> </TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>BELANJA TAK TERDUGA</TableCell>
                                                                 <TableCell> </TableCell>
                                                                 <TableCell> </TableCell>
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
                                                                 <TableCell></TableCell>
                                                                 <TableCell></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>SiLPA</TableCell>
                                                                 <TableCell> </TableCell>
                                                                 <TableCell> </TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Pencairan Dana Cadangan</TableCell>
                                                                 <TableCell> </TableCell>
                                                                 <TableCell> </TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Hasil penjualan kekayaan Desa yang dipisahkan</TableCell>
                                                                 <TableCell> </TableCell>
                                                                 <TableCell> </TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>Pendapatan Transfer</TableCell>
                                                                 <TableCell></TableCell>
                                                                 <TableCell></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Pembentukan Dana Cadangan</TableCell>
                                                                 <TableCell> </TableCell>
                                                                 <TableCell> </TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Penyertaan Modal Desa</TableCell>
                                                                 <TableCell> </TableCell>
                                                                 <TableCell> </TableCell>
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
