import React from 'react'

interface CalendarIconProps {
  className?: string
}

export const CalendarIcon: React.FC<CalendarIconProps> = ({ className = '' }) => {
  return (
    <svg className={className} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_ii_14_9113)">
        <path d="M14.2684 0.363375C9.93329 -0.121125 5.55769 -0.121125 1.22259 0.363375C0.144194 0.483975 -0.375107 1.74847 0.307393 2.59207L4.07639 7.25118C5.15629 8.58608 5.74549 10.2512 5.74549 11.9682V15.1108C5.74549 15.3497 5.85929 15.5744 6.05199 15.7156L8.82249 17.7474C9.20559 18.0283 9.74549 17.7547 9.74549 17.2796V11.9682C9.74549 10.2512 10.3347 8.58608 11.4146 7.25118L15.1836 2.59207C15.8661 1.74847 15.3468 0.483975 14.2684 0.363375Z" fill="currentColor"/>
      </g>
      <defs>
        <filter id="filter0_ii_14_9113" x="-1" y="0" width="17.491" height="18.8607" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-1" dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.0980392 0 0 0 0 0.0627451 0 0 0 0.3 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_14_9113"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="1"/>
          <feGaussianBlur stdDeviation="0.5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.7 0 0 0 0 0.7 0 0 0 0 0.7 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_14_9113" result="effect2_innerShadow_14_9113"/>
        </filter>
      </defs>
    </svg>
  )
}

