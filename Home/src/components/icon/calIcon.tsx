
import { FC } from "react";
import React from "react";
interface CalProps {
     size?: number
}

const CalIcon: FC<CalProps> = ({ size }) => (
     <svg width={size} height={size}viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M4.16667 9.6665H20.8333" stroke="#5B5B5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M19.7917 4.8335H5.20834C4.63304 4.8335 4.16667 5.37449 4.16667 6.04183V22.9585C4.16667 23.6258 4.63304 24.1668 5.20834 24.1668H19.7917C20.367 24.1668 20.8333 23.6258 20.8333 22.9585V6.04183C20.8333 5.37449 20.367 4.8335 19.7917 4.8335Z" stroke="#5B5B5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M15.625 14.5L11.4583 19.3333L9.375 16.9167" stroke="#5B5B5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M16.6667 2.4165V4.83317" stroke="#5B5B5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M8.33333 2.4165V4.83317" stroke="#5B5B5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>

)

export default CalIcon;