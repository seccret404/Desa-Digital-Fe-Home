import { FC } from "react";
import React from "react";
interface MapProps {
     size?: number
}

const MapIcon: FC<MapProps> = ({ size }) => (
     <svg width={size} height={size} viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 16.9582C17.4728 16.9582 18.6667 15.5777 18.6667 13.8748C18.6667 12.172 17.4728 10.7915 16 10.7915C14.5272 10.7915 13.3333 12.172 13.3333 13.8748C13.3333 15.5777 14.5272 16.9582 16 16.9582Z" stroke="#5B5B5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 32.375C16 32.375 25.3333 24.9038 25.3333 15.2981C25.3333 12.4674 24.35 9.75266 22.5997 7.75107C20.8493 5.74948 18.4754 4.625 16 4.625C13.5247 4.625 11.1507 5.74948 9.40034 7.75107C7.65 9.75266 6.66667 12.4674 6.66667 15.2981C6.66667 24.9038 16 32.375 16 32.375Z" stroke="#5B5B5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
     </svg>

)

export default MapIcon;