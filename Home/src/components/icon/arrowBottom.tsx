import React from "react";
import { FC } from "react";
interface ArrowProps{
     size?:number,
     color?:string,

}

const ArrowBottomIcon : FC<ArrowProps> = ({size,color}) =>(
     <svg 
          style={{
               width: size? `${size}px` : '24px',
               height:'auto'
          }}
      viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
<path d="M16 10.3662L12 14.1711L8 10.3662" stroke="#0369A1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

)

export default ArrowBottomIcon;