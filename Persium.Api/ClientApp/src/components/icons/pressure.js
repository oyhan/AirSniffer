


import React from 'react'
import { divIcon } from 'leaflet'


export default function Pressure() {

    const classes = {
        pressure: {
            width: "20px",
            height: "20px",
            position: 'relative'
        }
    }
    return (
        <svg style={classes.pressure} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path d="M25 2C12.308594 2 2 12.308594 2 25C2 37.691406 12.308594 48 25 48C37.691406 48 48 37.691406 48 25C48 12.308594 37.691406 2 25 2 Z M 25 4C36.609375 4 46 13.390625 46 25C46 36.609375 36.609375 46 25 46C13.390625 46 4 36.609375 4 25C4 13.390625 13.390625 4 25 4 Z M 25 8C24.449219 8 24 8.449219 24 9C24 9.550781 24.449219 10 25 10C25.550781 10 26 9.550781 26 9C26 8.449219 25.550781 8 25 8 Z M 18.875 9.21875C18.746094 9.21875 18.628906 9.226563 18.5 9.28125C17.988281 9.492188 17.726563 10.082031 17.9375 10.59375C18.148438 11.105469 18.738281 11.367188 19.25 11.15625C19.761719 10.945313 20.023438 10.355469 19.8125 9.84375C19.652344 9.460938 19.265625 9.222656 18.875 9.21875 Z M 31.125 9.21875C30.734375 9.222656 30.347656 9.460938 30.1875 9.84375C29.976563 10.355469 30.238281 10.945313 30.75 11.15625C31.261719 11.367188 31.820313 11.105469 32.03125 10.59375C32.242188 10.082031 32.011719 9.492188 31.5 9.28125C31.371094 9.226563 31.253906 9.21875 31.125 9.21875 Z M 13.6875 12.6875C13.429688 12.6875 13.164063 12.773438 12.96875 12.96875C12.578125 13.359375 12.578125 14.015625 12.96875 14.40625C13.359375 14.796875 14.015625 14.796875 14.40625 14.40625C14.796875 14.015625 14.796875 13.359375 14.40625 12.96875C14.210938 12.773438 13.945313 12.6875 13.6875 12.6875 Z M 36.3125 12.6875C36.054688 12.6875 35.789063 12.773438 35.59375 12.96875C35.203125 13.359375 35.203125 14.015625 35.59375 14.40625C35.984375 14.796875 36.640625 14.796875 37.03125 14.40625C37.421875 14.015625 37.421875 13.359375 37.03125 12.96875C36.835938 12.773438 36.570313 12.6875 36.3125 12.6875 Z M 34 16L29.0625 17.03125L30.3125 18.25L26.25 22.3125C25.863281 22.132813 25.449219 22 25 22C23.355469 22 22 23.355469 22 25C22 25.460938 22.125 25.890625 22.3125 26.28125L19.3125 29.28125C18.953125 29.109375 18.546875 29.019531 18.15625 29C17.917969 28.988281 17.671875 29.015625 17.4375 29.0625C17.40625 29.0625 17.375 29.0625 17.34375 29.0625C16.800781 29.191406 16.464844 29.738281 16.59375 30.28125C16.722656 30.824219 17.269531 31.160156 17.8125 31.03125C18.007813 30.992188 18.21875 30.992188 18.40625 31.0625C18.5 31.3125 18.691406 31.515625 18.9375 31.625C19 31.804688 19.003906 32 18.96875 32.1875C18.863281 32.730469 19.222656 33.253906 19.765625 33.359375C20.308594 33.464844 20.832031 33.105469 20.9375 32.5625C21.058594 31.941406 20.957031 31.296875 20.6875 30.71875L23.71875 27.6875C24.109375 27.875 24.539063 28 25 28C26.644531 28 28 26.644531 28 25C28 24.550781 27.867188 24.136719 27.6875 23.75L31.75 19.6875L32.96875 20.9375 Z M 10.21875 17.875C9.828125 17.878906 9.441406 18.117188 9.28125 18.5C9.070313 19.011719 9.332031 19.601563 9.84375 19.8125C10.355469 20.023438 10.945313 19.761719 11.15625 19.25C11.367188 18.738281 11.105469 18.148438 10.59375 17.9375C10.464844 17.882813 10.347656 17.875 10.21875 17.875 Z M 39.78125 17.875C39.652344 17.875 39.535156 17.882813 39.40625 17.9375C38.894531 18.148438 38.632813 18.738281 38.84375 19.25C39.054688 19.761719 39.644531 20.023438 40.15625 19.8125C40.667969 19.601563 40.929688 19.011719 40.71875 18.5C40.558594 18.117188 40.171875 17.878906 39.78125 17.875 Z M 9 24C8.449219 24 8 24.449219 8 25C8 25.550781 8.449219 26 9 26C9.550781 26 10 25.550781 10 25C10 24.449219 9.550781 24 9 24 Z M 25 24C25.28125 24 25.539063 24.101563 25.71875 24.28125C25.730469 24.292969 25.738281 24.300781 25.75 24.3125C25.910156 24.488281 26 24.734375 26 25C26 25.5625 25.5625 26 25 26C24.4375 26 24 25.5625 24 25C24 24.4375 24.4375 24 25 24 Z M 41 24C40.449219 24 40 24.449219 40 25C40 25.550781 40.449219 26 41 26C41.550781 26 42 25.550781 42 25C42 24.449219 41.550781 24 41 24 Z M 10.21875 30.125C10.089844 30.125 9.972656 30.132813 9.84375 30.1875C9.332031 30.398438 9.070313 30.988281 9.28125 31.5C9.492188 32.011719 10.082031 32.242188 10.59375 32.03125C11.105469 31.820313 11.367188 31.261719 11.15625 30.75C10.996094 30.367188 10.609375 30.128906 10.21875 30.125 Z M 39.78125 30.125C39.390625 30.128906 39.003906 30.367188 38.84375 30.75C38.632813 31.261719 38.894531 31.820313 39.40625 32.03125C39.917969 32.242188 40.507813 32.011719 40.71875 31.5C40.929688 30.988281 40.667969 30.398438 40.15625 30.1875C40.027344 30.132813 39.910156 30.125 39.78125 30.125 Z M 13.6875 35.3125C13.429688 35.3125 13.164063 35.398438 12.96875 35.59375C12.578125 35.984375 12.578125 36.640625 12.96875 37.03125C13.359375 37.421875 14.015625 37.421875 14.40625 37.03125C14.796875 36.640625 14.796875 35.984375 14.40625 35.59375C14.210938 35.398438 13.945313 35.3125 13.6875 35.3125 Z M 36.3125 35.3125C36.054688 35.3125 35.789063 35.398438 35.59375 35.59375C35.203125 35.984375 35.203125 36.640625 35.59375 37.03125C35.984375 37.421875 36.640625 37.421875 37.03125 37.03125C37.421875 36.640625 37.421875 35.984375 37.03125 35.59375C36.835938 35.398438 36.570313 35.3125 36.3125 35.3125 Z M 18.875 38.78125C18.484375 38.785156 18.128906 39.023438 17.96875 39.40625C17.757813 39.917969 17.988281 40.507813 18.5 40.71875C19.011719 40.929688 19.601563 40.667969 19.8125 40.15625C20.023438 39.644531 19.761719 39.054688 19.25 38.84375C19.121094 38.789063 19.003906 38.78125 18.875 38.78125 Z M 31.125 38.78125C30.996094 38.78125 30.878906 38.789063 30.75 38.84375C30.238281 39.054688 29.976563 39.644531 30.1875 40.15625C30.398438 40.667969 30.988281 40.929688 31.5 40.71875C32.011719 40.507813 32.273438 39.917969 32.0625 39.40625C31.902344 39.023438 31.515625 38.785156 31.125 38.78125Z" fill="#9E3D1D" />
      </svg>

    )
}

