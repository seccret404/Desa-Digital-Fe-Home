import React from "react";
import { FC } from "react";


interface ArrowIconProps {
     width?: number
     height?: number
}

const ArrowIcon: FC<ArrowIconProps> = ({ width, height }) => (
     <svg width={width} height={height} viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0.75L5.29289 4.54289C5.62623 4.87623 5.79289 5.04289 6 5.04289C6.20711 5.04289 6.37377 4.87623 6.70711 4.54289L10.5 0.75" stroke="#1C1A20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
     </svg>
)

export default ArrowIcon;