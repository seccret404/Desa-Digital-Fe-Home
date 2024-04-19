import { Link } from 'react-router-dom'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { useState } from "react";
import MenuIcon from "./MenuIcon";
import ArrowIcon from "./ArrowIcon";
import React from "react";
import logo from "../../assets/logo.png"


export default function Navbar() {
     const [navbar, setNavbar] = useState(false);
     return (
          <div className="flex flex-wrap bg-[#0369A1] items-center justify-between pl-4 pr-4  text-[12px] z-[9] text-white        ">
               <div className="md:flex p-4 justify-between md:items w-full">
                    <div className="flex mb-2 md:mr-20  items-center justify-between align-items-start">
                         <img src={logo} alt="unilah.jpg"
                              width={70} height={132} className='p-4 md:mr-35 ' />
                         <div className="md:hidden flex mt-5  justify-end self-end "style={{ alignSelf: 'flex-start' }}>

                              <button onClick={() => setNavbar(!navbar)}>
                                   {navbar ? (
                                        <MenuIcon width={32} height={24} color={'white'} />
                                   ) : (
                                        <MenuIcon width={32} height={24} color={'white'} />
                                   )}
                              </button>
                         </div>
                    </div>
                    <div className="mb-6  items-center flex pl-3 self-end">
                         <div className={`flex flex-col gap-5 text-left md:text-right font-normal text-[15px] md:flex md:items-center space-x-0 md:space-x-12 space-y-2 w-full  md:pt-0 md:flex-row ${navbar ? "flex" : "hidden"
                              }`}>
                                   <Link to={''}>
                                        Beranda
                                   </Link>
                                   <DropdownMenu>
                                        <DropdownMenuTrigger className="flex items-center">Pemerintahan &nbsp;<ArrowIcon width={12} height={6}/></DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                             <DropdownMenuItem>Menu 1</DropdownMenuItem>
                                             <DropdownMenuItem>Menu 2</DropdownMenuItem>
                                             <DropdownMenuItem>Menu 3</DropdownMenuItem>
                                             <DropdownMenuItem>Menu 4</DropdownMenuItem>
                                        </DropdownMenuContent>
                                   </DropdownMenu>
                                   <DropdownMenu>
                                        <DropdownMenuTrigger className="flex items-center">Informasi Publik &nbsp;<ArrowIcon width={12} height={6}/></DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                             <DropdownMenuItem>Menu 1</DropdownMenuItem>
                                             <DropdownMenuItem>Menu 2</DropdownMenuItem>
                                             <DropdownMenuItem>Menu 3</DropdownMenuItem>
                                             <DropdownMenuItem>Menu 4</DropdownMenuItem>
                                        </DropdownMenuContent>
                                   </DropdownMenu>
                                   <DropdownMenu>
                                        <DropdownMenuTrigger className="flex items-center">Data Desa &nbsp;<ArrowIcon width={12} height={6}/></DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                             <DropdownMenuItem>Menu 1</DropdownMenuItem>
                                             <DropdownMenuItem>Menu 2</DropdownMenuItem>
                                             <DropdownMenuItem>Menu 3</DropdownMenuItem>
                                             <DropdownMenuItem>Menu 4</DropdownMenuItem>
                                        </DropdownMenuContent>
                                   </DropdownMenu>
                                   <DropdownMenu>
                                        <DropdownMenuTrigger className="flex items-center">Lembaga Masyarakat &nbsp;<ArrowIcon width={12} height={6}/></DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                             <DropdownMenuItem>Menu 1</DropdownMenuItem>
                                             <DropdownMenuItem>Menu 2</DropdownMenuItem>
                                             <DropdownMenuItem>Menu 3</DropdownMenuItem>
                                             <DropdownMenuItem>Menu 4</DropdownMenuItem>
                                        </DropdownMenuContent>
                                   </DropdownMenu>
                              <div className="mb-4">
                                   <Link to={''}>
                                        Potensi desa
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
