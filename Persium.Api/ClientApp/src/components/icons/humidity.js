import React from 'react'
import { divIcon } from 'leaflet'


export default function Humidity() {

    const classes = {
        humidity: {
            width: "20px",
            height: "20px",
            position: 'relative'
        }
    }
    return (
        
        <svg style={classes.humidity} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M12.84375 0C12.578125 0.0429688 12.34375 0.1875 12.1875 0.40625C12.1875 0.40625 10.1875 3.113281 8.15625 6.5C6.125 9.886719 4 13.847656 4 17C4 20.152344 6.1875 22.917969 8.1875 25.59375C10.1875 28.269531 12 30.851563 12 33C12 35.148438 10.125 39.179688 8.15625 42.46875C6.1875 45.757813 4.1875 48.40625 4.1875 48.40625C3.859375 48.855469 3.957031 49.484375 4.40625 49.8125C4.855469 50.140625 5.484375 50.042969 5.8125 49.59375C5.8125 49.59375 7.8125 46.886719 9.84375 43.5C11.875 40.113281 14 36.152344 14 33C14 29.847656 11.8125 27.082031 9.8125 24.40625C7.8125 21.730469 6 19.148438 6 17C6 14.851563 7.875 10.820313 9.84375 7.53125C11.8125 4.242188 13.8125 1.59375 13.8125 1.59375C14.0625 1.265625 14.089844 0.816406 13.875 0.464844C13.660156 0.113281 13.25 -0.0742188 12.84375 0 Z M 28.84375 0C28.578125 0.0429688 28.34375 0.1875 28.1875 0.40625C28.1875 0.40625 26.1875 3.113281 24.15625 6.5C22.125 9.886719 20 13.847656 20 17C20 20.152344 22.1875 22.917969 24.1875 25.59375C26.1875 28.269531 28 30.851563 28 33C28 35.148438 26.125 39.179688 24.15625 42.46875C22.1875 45.757813 20.1875 48.40625 20.1875 48.40625C19.859375 48.855469 19.957031 49.484375 20.40625 49.8125C20.855469 50.140625 21.484375 50.042969 21.8125 49.59375C21.8125 49.59375 23.8125 46.886719 25.84375 43.5C27.875 40.113281 30 36.152344 30 33C30 29.847656 27.8125 27.082031 25.8125 24.40625C23.8125 21.730469 22 19.148438 22 17C22 14.851563 23.875 10.820313 25.84375 7.53125C27.8125 4.242188 29.8125 1.59375 29.8125 1.59375C30.0625 1.265625 30.089844 0.816406 29.875 0.464844C29.660156 0.113281 29.25 -0.0742188 28.84375 0 Z M 44.84375 0C44.578125 0.0429688 44.34375 0.1875 44.1875 0.40625C44.1875 0.40625 42.1875 3.113281 40.15625 6.5C38.125 9.886719 36 13.847656 36 17C36 20.152344 38.1875 22.917969 40.1875 25.59375C42.1875 28.269531 44 30.851563 44 33C44 35.148438 42.125 39.179688 40.15625 42.46875C38.1875 45.757813 36.1875 48.40625 36.1875 48.40625C35.859375 48.855469 35.957031 49.484375 36.40625 49.8125C36.855469 50.140625 37.484375 50.042969 37.8125 49.59375C37.8125 49.59375 39.8125 46.886719 41.84375 43.5C43.875 40.113281 46 36.152344 46 33C46 29.847656 43.8125 27.082031 41.8125 24.40625C39.8125 21.730469 38 19.148438 38 17C38 14.851563 39.875 10.820313 41.84375 7.53125C43.8125 4.242188 45.8125 1.59375 45.8125 1.59375C46.0625 1.265625 46.089844 0.816406 45.875 0.464844C45.660156 0.113281 45.25 -0.0742188 44.84375 0Z" fill="#82E9F9" />
        </svg>
    )
}