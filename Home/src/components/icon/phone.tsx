import { FC } from "react";
import React from "react";
interface PhoneProps {
     size?: number
}

const PhoneIcon: FC<PhoneProps> = ({ size }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.64593 3H4.89474C3.8483 3 3 3.8483 3 4.89474C3 13.7894 10.2106 21 19.1053 21C20.1517 21 21 20.1517 21 19.1053V16.3541C21 15.5363 20.5021 14.8008 19.7428 14.4971L17.1071 13.4428C16.4251 13.17 15.6483 13.2931 15.084 13.7634L14.4031 14.3307C13.6084 14.993 12.44 14.94 11.7085 14.2085L9.79148 12.2915C9.06004 11.56 9.00704 10.3916 9.66925 9.5969L10.2366 8.91603C10.7069 8.35169 10.83 7.57495 10.5572 6.89288L9.50289 4.25722C9.19916 3.4979 8.46374 3 7.64593 3Z" stroke="#5B5B5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
     </svg>

)

export default PhoneIcon;