import React from 'react'

export default ({ position }) => {
  return (
    <g transform={`translate(${position[0]}, ${position[1]})`}>
      <g transform="translate(61, -121) scale(0.3)">
        <path
          fill="#77de51"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-205,420.3c-26.7,0-48.4-7-48.4-15.5c0-3,2.7-5.8,7.3-8.2
          c-0.7,1-1.1,2-1.1,3c0,7.4,18.9,13.5,42.2,13.5s42.2-6,42.2-13.5c0-1-0.4-2-1.1-3c4.6,2.4,7.3,5.2,7.3,8.2
          C-156.6,413.4-178.3,420.3-205,420.3z M-185,389.2c10.5,1.9,17.5,5.4,17.5,9.3c0,6.1-16.8,11-37.4,11s-37.4-4.9-37.4-11
          c0-3.9,7-7.3,17.5-9.3c2.7-8.4,10.6-14.5,20-14.5S-187.8,380.7-185,389.2z M-226,396.7c0-0.3,0-0.7,0-1c0-0.4,0-0.7,0-1.1
          c-5.1,1-8.2,2.3-8.2,3.8c0,3,13.1,5.5,29.2,5.5s29.2-2.5,29.2-5.5c0-1.5-3.2-2.8-8.2-3.8c0,0.4,0,0.7,0,1.1c0,0.3,0,0.7,0,1
          c-6.6,2.3-13.6,3.6-21,3.6S-219.4,399-226,396.7z"
        />
      </g>
    </g>
  )
}
