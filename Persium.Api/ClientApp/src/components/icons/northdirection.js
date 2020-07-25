import React from 'react'
import withIcon from './withIcon'
import { SvgIcon } from '@material-ui/core';
import MySvgIcon from './MySvgIcon';


export default function NorthDirection(props) {
    return (

        <MySvgIcon {...props}>

            <path d="M12 0L8 9L12 7L16 9 Z M 8 3.90625C5.375 5.261719 3.414063 7.851563 3.0625 11L0 11L0 13L3.03125 13C3.484375 17.203125 6.796875 20.515625 11 20.96875L11 24L13 24L13 20.96875C17.203125 20.515625 20.515625 17.203125 20.96875 13L24 13L24 11L20.9375 11C20.585938 7.851563 18.621094 5.261719 15.90625 3.90625L17 6.5C18.5 7.898438 19.40625 9.800781 19.40625 12C19.40625 16.101563 16.007813 19.5 11.90625 19.5C7.804688 19.5 4.5 16.101563 4.5 12C4.5 9.800781 5.40625 7.898438 6.90625 6.5Z" />


        </MySvgIcon>

        // <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 26">
        // </svg>
    )
}
