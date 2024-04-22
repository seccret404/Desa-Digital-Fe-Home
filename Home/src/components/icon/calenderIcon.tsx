import { FC } from "react";
import React from "react";

interface CalenderProps {
     size?: number,

}

const CalenderICon: FC<CalenderProps> = ({ size }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4Z" stroke="#E9871D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 16H16.002V16.002H16V16Z" stroke="#E9871D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 16H12.002V16.002H12V16Z" stroke="#E9871D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 16H8.002V16.002H8V16Z" stroke="#E9871D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 12H16.002V12.002H16V12Z" stroke="#E9871D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 12H12.002V12.002H12V12Z" stroke="#E9871D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 12H8.002V12.002H8V12Z" stroke="#E9871D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 8H20" stroke="#E9871D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 2V4" stroke="#E9871D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 2V4" stroke="#E9871D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
     </svg>

)

export default CalenderICon;