import React from 'react'

interface UserIconProps {
  className?: string
}

export const UserIcon: React.FC<UserIconProps> = ({ className = '' }) => {
  return (
    <svg className={className} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_ii_14_9339)">
        <path d="M7.75 0C5.6789 0 4 1.6789 4 3.75C4 5.8211 5.6789 7.5 7.75 7.5C9.8211 7.5 11.5 5.8211 11.5 3.75C11.5 1.6789 9.8211 0 7.75 0Z" fill="currentColor"/>
        <path d="M3.75 9.5C1.6789 9.5 0 11.1789 0 13.25V14.4383C0 15.1915 0.545901 15.8337 1.2893 15.9551C5.5681 16.6537 9.9319 16.6537 14.2107 15.9551C14.9541 15.8337 15.5 15.1915 15.5 14.4383V13.25C15.5 11.1789 13.8211 9.5 11.75 9.5H11.4091C11.2246 9.5 11.0413 9.5292 10.8659 9.5864L10.0004 9.8691C8.5381 10.3465 6.9619 10.3465 5.4996 9.8691L4.6341 9.5864C4.4587 9.5292 4.2754 9.5 4.0909 9.5H3.75Z" fill="currentColor"/>
      </g>
      <defs>
        <filter id="filter0_ii_14_9339" x="-1" y="0" width="17.5" height="17.4791" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-1" dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.0980392 0 0 0 0 0.0627451 0 0 0 0.3 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_14_9339"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="1"/>
          <feGaussianBlur stdDeviation="0.5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.7 0 0 0 0 0.7 0 0 0 0 0.7 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_14_9339" result="effect2_innerShadow_14_9339"/>
        </filter>
      </defs>
    </svg>
  )
}

