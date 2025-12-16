import React from 'react'

interface HelpIconProps {
  className?: string
}

export const HelpIcon: React.FC<HelpIconProps> = ({ className = '' }) => {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_ii_14_9170)">
        <path d="M9.95 16C10.3 16 10.596 15.879 10.838 15.637C11.08 15.395 11.2007 15.0993 11.2 14.75C11.2 14.4 11.0793 14.104 10.838 13.862C10.5967 13.62 10.3007 13.4993 9.95 13.5C9.6 13.5 9.3043 13.621 9.063 13.863C8.8217 14.105 8.7007 14.4007 8.7 14.75C8.7 15.1 8.821 15.396 9.063 15.638C9.305 15.88 9.6007 16.0007 9.95 16ZM9.05 12.15H10.9C10.9 11.6 10.9627 11.1667 11.088 10.85C11.2133 10.5333 11.5673 10.1 12.15 9.55C12.5833 9.1167 12.925 8.704 13.175 8.312C13.425 7.92 13.55 7.4493 13.55 6.9C13.55 5.9667 13.2083 5.25 12.525 4.75C11.8417 4.25 11.0333 4 10.1 4C9.15 4 8.3793 4.25 7.788 4.75C7.1967 5.25 6.784 5.85 6.55 6.55L8.2 7.2C8.2833 6.9 8.471 6.575 8.763 6.225C9.055 5.875 9.5007 5.7 10.1 5.7C10.6333 5.7 11.0333 5.846 11.3 6.138C11.5667 6.43 11.7 6.7507 11.7 7.1C11.7 7.4333 11.6 7.746 11.4 8.038C11.2 8.33 10.95 8.6007 10.65 8.85C9.9167 9.5 9.4667 9.9917 9.3 10.325C9.1333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.6167 20 7.3167 19.7377 6.1 19.213C4.8833 18.6883 3.825 17.9757 2.925 17.075C2.025 16.175 1.3127 15.1167 0.788 13.9C0.2633 12.6833 0.0007 11.3833 0 10C0 8.6167 0.2627 7.3167 0.788 6.1C1.3133 4.8833 2.0257 3.825 2.925 2.925C3.825 2.025 4.8833 1.3127 6.1 0.788C7.3167 0.2633 8.6167 0.0007 10 0C11.3833 0 12.6833 0.2627 13.9 0.788C15.1167 1.3133 16.175 2.0257 17.075 2.925C17.975 3.825 18.6877 4.8833 19.213 6.1C19.7383 7.3167 20.0007 8.6167 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6867 15.1167 17.9743 16.175 17.075 17.075C16.175 17.975 15.1167 18.6877 13.9 19.213C12.6833 19.7383 11.3833 20.0007 10 20Z" fill="currentColor"/>
      </g>
      <defs>
        <filter id="filter0_ii_14_9170" x="-1" y="0" width="22" height="21" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-1" dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.0980392 0 0 0 0 0.0627451 0 0 0 0.3 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_14_9170"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="1"/>
          <feGaussianBlur stdDeviation="0.5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.7 0 0 0 0 0.7 0 0 0 0 0.7 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_14_9170" result="effect2_innerShadow_14_9170"/>
        </filter>
      </defs>
    </svg>
  )
}

