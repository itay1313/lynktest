import React from 'react'

interface QuestionsIconProps {
  className?: string
}

export const QuestionsIcon: React.FC<QuestionsIconProps> = ({ className = '' }) => {
  return (
    <svg className={className} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_ii_14_9036)">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 0.25C10 0.1119 9.8881 0 9.75 0H2.75C1.2312 0 0 1.2312 0 2.75V16.75C0 18.2688 1.2312 19.5 2.75 19.5H12.75C14.2688 19.5 15.5 18.2688 15.5 16.75V6.8971C15.5 6.759 15.3881 6.6471 15.25 6.6471H10.75C10.3358 6.6471 10 6.3113 10 5.8971V0.25ZM10.75 10C11.1642 10 11.5 10.3358 11.5 10.75C11.5 11.1642 11.1642 11.5 10.75 11.5H4.75C4.3358 11.5 4 11.1642 4 10.75C4 10.3358 4.3358 10 4.75 10H10.75ZM10.75 14C11.1642 14 11.5 14.3358 11.5 14.75C11.5 15.1642 11.1642 15.5 10.75 15.5H4.75C4.3358 15.5 4 15.1642 4 14.75C4 14.3358 4.3358 14 4.75 14H10.75Z" fill="currentColor"/>
        <path d="M11.5 0.574101C11.5 0.389601 11.6926 0.272501 11.8362 0.388401C11.9571 0.486001 12.0658 0.600401 12.1585 0.729501L15.1717 4.9274C15.2403 5.023 15.166 5.1471 15.0483 5.1471H11.75C11.6119 5.1471 11.5 5.0351 11.5 4.8971V0.574101Z" fill="currentColor"/>
      </g>
      <defs>
        <filter id="filter0_ii_14_9036" x="-1" y="0" width="17.5" height="20.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-1" dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.0980392 0 0 0 0 0.0627451 0 0 0 0.3 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_14_9036"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="1"/>
          <feGaussianBlur stdDeviation="0.5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.7 0 0 0 0 0.7 0 0 0 0 0.7 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_14_9036" result="effect2_innerShadow_14_9036"/>
        </filter>
      </defs>
    </svg>
  )
}

