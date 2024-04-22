import React from 'react'
import Navbar from '../ui/navbar'
import Footer from '../ui/footer'


export default function Layout({
  children,
}:{
  children: React.ReactNode
}) {
  
  return (
   <>
    <div className="flex flex-col w-full ">
      <Navbar/>
      <div className="">{children}</div>
      <Footer/>
    </div>
   </>
  )
}
