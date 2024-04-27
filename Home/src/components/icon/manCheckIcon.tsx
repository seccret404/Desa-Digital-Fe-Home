import { FC } from "react";
import React from "react";
interface ManCheckProps {
     size?: number
}

const ManCheckIcon: FC<ManCheckProps> = ({ size }) => (
     <svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M3.125 19.7917C3.125 17.4905 5.92322 15.625 9.375 15.625C12.8268 15.625 15.625 17.4905 15.625 19.7917" stroke="#5B5B5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M21.875 10.4165L17.7083 14.5832L15.625 12.4998" stroke="#5B5B5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M9.375 12.4998C11.6762 12.4998 13.5417 10.6344 13.5417 8.33317C13.5417 6.03198 11.6762 4.1665 9.375 4.1665C7.07381 4.1665 5.20833 6.03198 5.20833 8.33317C5.20833 10.6344 7.07381 12.4998 9.375 12.4998Z" stroke="#5B5B5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>

)

export default ManCheckIcon;