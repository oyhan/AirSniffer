import React from 'react'
import withIcon from './withIcon'
import { SvgIcon } from '@material-ui/core';
import MySvgIcon from './MySvgIcon';


 function Temperature(props) {
    return (
        
            <MySvgIcon   {...props}>
                        <path d="M12 0C9.789063 0 8 1.789063 8 4L8 11.4375C6.222656 12.699219 5 14.691406 5 17C5 20.84375 8.15625 24 12 24C15.84375 24 19 20.84375 19 17C19 14.691406 17.777344 12.699219 16 11.4375L16 10L18 10L18 8L16 8L16 7L18 7L18 5L16 5L16 4C16 1.789063 14.210938 0 12 0 Z M 12 2C13.191406 2 14 2.808594 14 4L14 12.375L14.5 12.6875C15.96875 13.503906 17 15.164063 17 17C17 19.753906 14.753906 22 12 22C9.246094 22 7 19.753906 7 17C7 15.164063 8.03125 13.503906 9.5 12.6875L10 12.375L10 4C10 2.808594 10.808594 2 12 2 Z M 11 5L11 13.65625C9.550781 14.085938 8.5 15.414063 8.5 17C8.5 18.933594 10.066406 20.5 12 20.5C13.933594 20.5 15.5 18.933594 15.5 17C15.5 15.414063 14.449219 14.085938 13 13.65625L13 5Z"/>

            </MySvgIcon>
         
        // <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 26">
        // </svg>
    )
}

// const Temperature = withIcon(temperatureSvg);
export default Temperature;

// function HomeIcon(props) {
//     return (
//       <SvgIcon {...props}>
//         <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//       </SvgIcon>
//     );
//   }