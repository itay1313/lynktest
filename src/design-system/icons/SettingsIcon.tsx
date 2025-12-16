import React from 'react'

interface SettingsIconProps {
  className?: string
}

export const SettingsIcon: React.FC<SettingsIconProps> = ({ className = '' }) => {
  return (
    <svg className={className} viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_ii_14_9371)">
        <path d="M10.628 3H0.75C0.3358 3 0 2.6642 0 2.25C0 1.8358 0.3358 1.5 0.75 1.5H10.628C10.9369 0.6261 11.7703 0 12.75 0C13.7297 0 14.5631 0.6261 14.872 1.5H16.75C17.1642 1.5 17.5 1.8358 17.5 2.25C17.5 2.6642 17.1642 3 16.75 3H14.872C14.5631 3.8739 13.7297 4.5 12.75 4.5C11.7703 4.5 10.9369 3.8739 10.628 3Z" fill="currentColor"/>
        <path d="M16.75 11C17.1642 11 17.5 10.6642 17.5 10.25C17.5 9.8358 17.1642 9.5 16.75 9.5H6.872C6.5631 8.6261 5.7297 8 4.75 8C3.7703 8 2.9369 8.6261 2.628 9.5H0.75C0.3358 9.5 0 9.8358 0 10.25C0 10.6642 0.3358 11 0.75 11H2.628C2.9369 11.8739 3.7703 12.5 4.75 12.5C5.7297 12.5 6.5631 11.8739 6.872 11H16.75Z" fill="currentColor"/>
      </g>
      <defs>
        <filter id="filter0_ii_14_9371" x="-1" y="0" width="19.5" height="13.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-1" dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.0980392 0 0 0 0 0.0627451 0 0 0 0.3 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_14_9371"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="1"/>
          <feGaussianBlur stdDeviation="0.5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.7 0 0 0 0 0.7 0 0 0 0 0.7 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_14_9371" result="effect2_innerShadow_14_9371"/>
        </filter>
      </defs>
    </svg>
  )
}

