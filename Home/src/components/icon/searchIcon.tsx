import { FC } from "react";
import React from "react";
interface SearchProps {
     size?: number
}

const SearchIcon: FC<SearchProps> = ({ size }) => (
     <svg width={size} height={size} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M11.25 19.125C15.5992 19.125 19.125 15.5992 19.125 11.25C19.125 6.90076 15.5992 3.375 11.25 3.375C6.90076 3.375 3.375 6.90076 3.375 11.25C3.375 15.5992 6.90076 19.125 11.25 19.125Z" stroke="#0369A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M16.875 16.875L23.625 23.625" stroke="#0369A1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>

)

export default SearchIcon;