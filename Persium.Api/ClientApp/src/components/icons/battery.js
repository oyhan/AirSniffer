import React from 'react'
import { divIcon } from 'leaflet'


export default function Battery() {

    const classes = {
        battery: {
            width: "20px",
            height: "20px",
            position: 'relative'
        }
    }
    return (

        <svg style={classes.battery} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M8 0L8 3L4 3L4 24L19 24L19 3L15 3L15 0 Z M 10 2L13 2L13 5L17 5L17 13L6 13L6 5L10 5Z" fill="#376137" />
      </svg>

    )
}