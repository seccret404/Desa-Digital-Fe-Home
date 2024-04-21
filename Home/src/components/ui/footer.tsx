import React from 'react'
import logo from '../../assets/real.png'
export default function Footer() {
  return (
    <div className="">
          <div className="bg-[#0369A1] flex items-center h-[147px]">
          <div className="ml-[89px] text-white">
          <img src={logo} alt="unilah.jpg"
                         width={130} height={74} className='p-4 md:mr-35' />
                         <div className="text-[18px] font-medium">Desa Sosor Dolok</div>
          </div>
          </div>
          <div className="bg-white justify-center h-[52px] flex items-center font-medium">Copyright © Desa Digital - Sosor Dolok - 2024 </div>
    </div>
  )
}
