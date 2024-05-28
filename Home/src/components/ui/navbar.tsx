import React from 'react';
import { Link } from 'react-router-dom'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { useState, useEffect } from "react";
import MenuIcon from "./MenuIcon";
import logo from "../../assets/real.png";
import {
     Menubar, MenubarContent,
     MenubarItem,
     MenubarMenu,
     MenubarSeparator,
     MenubarTrigger,
} from '@radix-ui/react-menubar';
import ArrowBottomIcon from '../icon/arrowBottom';
import { Anggaran } from '../../interfaces/anggaran';
import { getAnggaran } from '../../services/desaServices';

export default function Navbar() {
     const [navbar, setNavbar] = useState(false);
     const [date, setDate] = useState(new Date());
     const [anggaran, setAnggaran] = useState<Anggaran[]>([]);

     useEffect(() =>{
          async function fetchAnggaran(){
               try{
                    const data  = await getAnggaran();
                    setAnggaran(data)
               }catch(error){
                    console.log('gagar munulkan')
               }
          }
          fetchAnggaran();
     },[])
     useEffect(() => {
          const timerID = setInterval(() => tick(), 1000);

          return function cleanup() {
               clearInterval(timerID);
          };
     });

     function tick() {
          setDate(new Date());
     }

     const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
     const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

     const dayName = days[date.getDay()];
     const monthName = months[date.getMonth()];
     const year = date.getFullYear();
     const day = date.getDate();
     const hours = date.getHours();
     const minutes = date.getMinutes();
     const seconds = date.getSeconds();
     return (
          <div className="">
               <div className="bg-gradient-to-r from-blue-600 to-blue-900 flex items-center justify-between  ">
                    <img src={logo} alt="unilah.jpg"
                         width={130} height={74} className='p-4 md:mr-35 ml-[89px]' />
                    <div className="text-[#FFD233] font-medium text-[24px]">Desa Sosor Dolok</div>
                    <div className="mr-[89px]">
                         <div className='text-[18px] text-white font-semibold' >{dayName}, {day} {monthName} {year}</div>
                         <div className='text-white grid grid-cols-5 items-center'>
                              <div className="bg-white bg-opacity-40 text-white rounded-[5px] w-[35px] h-[31px] flex justify-center items-center">{hours < 10 ? '0' + hours : hours}</div>
                              <div className="flex justify-center font-bold text-[20px]">:</div>
                              <div className="bg-white bg-opacity-40 text-white rounded-[5px] w-[35px] h-[31px] flex justify-center items-center"> {minutes < 10 ? '0' + minutes : minutes}</div>
                              <div className="flex justify-center font-bold text-[20px]">:</div>
                              <div className="bg-white bg-opacity-40 text-white rounded-[5px] w-[35px] h-[31px] flex justify-center items-center">{seconds < 10 ? '0' + seconds : seconds}</div></div>
                    </div>
               </div>
               <div className="flex flex-wrap bg-[#ffffff] items-center justify-center  text-[12px] z-[9] text-[#0369A1]  border-b-2 border-blue-600 ">
                    <div className="md:flex flex w-full ">
                         <div className="flex mb-2 md:mr-20  items-center justify-between align-items-start ">

                              <div className="md:hidden flex mt-5  justify-end self-end " style={{ alignSelf: 'flex-start' }}>

                                   <button onClick={() => setNavbar(!navbar)}>
                                        {navbar ? (
                                             <MenuIcon width={32} height={24} color={'white'} />
                                        ) : (
                                             <MenuIcon width={32} height={24} color={'white'} />
                                        )}
                                   </button>
                              </div>
                         </div>
                         <div className="flex justify-center mb-2 mt-2 items-center">
                              <div className={`flex flex-col items-center justify-center gap-4  md:text-right font-normal text-[15px] md:flex md:items-center space-x-0 md:space-x-12  w-full  md:pt-0 md:flex-row ${navbar ? "flex" : "hidden"
                                   }`}>
                                   <Menubar>
                                        <MenubarMenu>
                                             <MenubarTrigger className='flex hover:bg-[#0890EA]  hover:bg-opacity-20 rounded-[5px] p-2 transition-colors duration-300'><Link to='/'>Beranda</Link> </MenubarTrigger>
                                        </MenubarMenu>
                                   </Menubar>
                                   <Menubar>
                                        <MenubarMenu>
                                             <MenubarTrigger className='flex hover:bg-[#0890EA]  hover:bg-opacity-20 rounded-[5px] p-2 transition-colors duration-300'>Informasi Publik <ArrowBottomIcon /> </MenubarTrigger>
                                             <MenubarContent className='bg-[#0369A1] bg-opacity-80  text-white rounded-[5px] p-2 w-[140px] text-start ' style={{ zIndex: 50 }}>
                                                   <MenubarItem><Link to='/berita' className='hover:text-[#020B10] rounded-[5px] p-2 transition-colors duration-300 w-full'>Berita Desa</Link></MenubarItem>
                                           
                                                  <MenubarItem><Link to='/pengumuman' className='hover:text-[#020B10] rounded-[5px] p-2 transition-colors duration-300 w-full'>Pengumuman </Link></MenubarItem>
                                                  <MenubarSeparator />
                                                  <MenubarItem><Link to='/agenda' className='hover:text-[#020B10] rounded-[5px] p-2 transition-colors duration-300 w-full'>Agenda Desa</Link></MenubarItem>
                                                  <MenubarItem><Link to='/bantuan' className='hover:text-[#020B10] rounded-[5px] p-2 transition-colors duration-300 w-full'>Bantuan Desa</Link></MenubarItem>
                                                  <MenubarSeparator />
                                                   
                                             </MenubarContent>
                                        </MenubarMenu>
                                   </Menubar>
                                   <Menubar>
                                        <MenubarMenu>
                                             <MenubarTrigger className='flex hover:bg-[#0890EA]  hover:bg-opacity-20 rounded-[5px] p-2 transition-colors duration-300'>Pemerintahan Desa <ArrowBottomIcon /> </MenubarTrigger>
                                             <MenubarContent className='bg-[#0369A1]  bg-opacity-80 text-white rounded-[5px] p-2 w-[180px] text-start' style={{ zIndex: 50 }}>
                                                  <MenubarItem>
                                                      <Link  to={'/profil'} className='hover:text-[#020B10] rounded-[5px] p-2 transition-colors duration-300 w-full'>Profil Desa</Link>
                                                  </MenubarItem>
                                                  <MenubarItem>
                                                       <Link to={'/pemerintahan'} className='hover:text-[#020B10] rounded-[5px] p-2 transition-colors duration-300 w-full'>
                                                       Struktur Pemerintahan
                                                       </Link>
                                                       </MenubarItem>
                                                  <MenubarSeparator />
                                                  <MenubarItem>
                                                       <Link to={'/tugas'} className='hover:text-[#020B10] rounded-[5px] p-2 transition-colors duration-300 w-full'>
                                                       Tugas Dan Wewenang
                                                       </Link>
                                                  </MenubarItem>
                                                  
                                             </MenubarContent>
                                        </MenubarMenu>
                                   </Menubar>

                                   <Menubar>
                                        <MenubarMenu>
                                             <MenubarTrigger className='flex hover:bg-[#0890EA]  hover:bg-opacity-20 rounded-[5px] p-2 transition-colors duration-300'>APBDes<ArrowBottomIcon /> </MenubarTrigger>
                                             <MenubarContent className='bg-[#0369A1]  bg-opacity-80 text-white rounded-[5px] p-2 text-start' style={{ zIndex: 50 }}>
                                                  {anggaran.map((item,index) =>
                                                  <MenubarItem>
                                                       <Link to={`/apbdes/${item.id}`} className='hover:text-[#020B10] rounded-[5px] p-2 transition-colors duration-300 w-full'>
                                                       APBDes {item.tahun_anggaran}
                                                       </Link>
                                                  </MenubarItem>
                                                  )}
                                             </MenubarContent>
                                        </MenubarMenu>
                                   </Menubar>
                                   <Menubar>
                                        <MenubarMenu>
                                             <MenubarTrigger className='flex hover:bg-[#0890EA]  hover:bg-opacity-20 rounded-[5px] p-2 transition-colors duration-300'>Data Statistik<ArrowBottomIcon /> </MenubarTrigger>
                                             <MenubarContent className='bg-[#0369A1]  bg-opacity-80 text-white rounded-[5px] p-2 text-start' style={{ zIndex: 50 }}>
                                                  <MenubarItem><Link to={'/pendidikan'} className='hover:text-[#020B10] rounded-[5px] p-2 transition-colors duration-300 w-full'>Statistik Pendidikan</Link></MenubarItem>
                                             </MenubarContent>
                                        </MenubarMenu>
                                   </Menubar>
                                   <div className='flex hover:bg-[#0890EA]  hover:bg-opacity-20 rounded-[5px] p-2 transition-colors duration-300' style={{ zIndex: 50 }}>
                                        <Link to={'/organisasi'}>
                                            Organisasi Desa
                                        </Link>
                                   </div>

                                  
                                   <div className='flex hover:bg-[#0890EA]  hover:bg-opacity-20 rounded-[5px] p-2 transition-colors duration-300' style={{ zIndex: 50 }}>
                                        <Link to={''}>
                                             Potensi desa
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
