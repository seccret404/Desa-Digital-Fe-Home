import React from "react";
import { FC } from "react";

interface MenuIconProps{
     width?:number,
     height?:number,
     color?:string,
}

const MenuIcon: FC<MenuIconProps>= ({width,height})=>(

     <svg  width={width} height={height}
         viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M4 5L20 5" stroke="#1C1A20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M4 12L20 12" stroke="#1C1A20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M4 19L20 19" stroke="#1C1A20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>
);

export default MenuIcon;