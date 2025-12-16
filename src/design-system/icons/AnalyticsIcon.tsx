import React from 'react'

interface AnalyticsIconProps {
  className?: string
}

export const AnalyticsIcon: React.FC<AnalyticsIconProps> = ({ className = '' }) => {
  return (
    <svg className={className} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_ii_14_8956)">
        <path d="M8.75 0.197905C8.75 0.0813051 8.6501 -0.0106953 8.5341 0.00100472C3.7411 0.485005 0 4.53191 0 9.45251C0 14.6992 4.2533 18.9525 9.5 18.9525C12.1367 18.9525 14.5227 17.8779 16.2434 16.144C16.3256 16.0612 16.3165 15.9259 16.2258 15.8525L9.0286 10.0358C8.8524 9.8934 8.75 9.679 8.75 9.45251V0.197905Z" fill="currentColor"/>
        <path d="M17.1695 14.6866C17.2601 14.7599 17.3942 14.7404 17.458 14.6428C18.2671 13.4047 18.7952 11.9659 18.9515 10.4179C18.9632 10.3019 18.8712 10.2025 18.7546 10.2025H12.1868C11.9983 10.2025 11.9145 10.4395 12.0611 10.558L17.1695 14.6866Z" fill="currentColor"/>
        <path d="M18.7546 8.70251C18.8712 8.70251 18.9632 8.60271 18.9515 8.48671C18.4996 4.01121 14.9413 0.452905 10.4658 0.00100472C10.3498 -0.0106953 10.25 0.0813051 10.25 0.197905V8.40251C10.25 8.56821 10.3843 8.70251 10.55 8.70251H18.7546Z" fill="currentColor"/>
      </g>
      <defs>
        <filter id="filter0_ii_14_8956" x="-1" y="0" width="20.9525" height="19.9525" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-1" dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.0980392 0 0 0 0 0.0627451 0 0 0 0.3 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_14_8956"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="1"/>
          <feGaussianBlur stdDeviation="0.5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.7 0 0 0 0 0.7 0 0 0 0 0.7 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_14_8956" result="effect2_innerShadow_14_8956"/>
        </filter>
      </defs>
    </svg>
  )
}

