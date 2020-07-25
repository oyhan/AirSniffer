

import React from 'react'
import withIcon from './withIcon'
import { SvgIcon } from '@material-ui/core';
import MySvgIcon from './MySvgIcon';


function Pressure(props) {
    return (

        <MySvgIcon {...props}>

            <path d="M12 2C7.5935666 2 4 5.5935666 4 10C4 14.067304 7.0633895 17.436276 11 17.931641L11 20L3 20L3 22L21 22L21 20L13 20L13 17.931641C16.93661 17.436276 20 14.067304 20 10C20 5.5935666 16.406433 2 12 2 z M 12 4C15.325553 4 18 6.6744469 18 10C18 13.325553 15.325553 16 12 16C8.6744469 16 6 13.325553 6 10C6 6.6744469 8.6744469 4 12 4 z M 14.292969 6.2929688L10.59375 9.9921875L12.007812 11.40625L15.707031 7.7070312L14.292969 6.2929688 z" />

        </MySvgIcon>

        // <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 26">
        // </svg>
    )
}

// const Temperature = withIcon(temperatureSvg);
export default Pressure;
