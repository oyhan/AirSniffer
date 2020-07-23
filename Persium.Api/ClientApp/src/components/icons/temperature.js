import React from 'react'
import withIcon from './withIcon'


 function temperatureSvg(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 26">
            <path d="M13 0.09375C10.789063 0.09375 9 1.882813 9 4.09375L9 13.5C7.296875 14.738281 6.1875 16.730469 6.1875 19C6.1875 22.765625 9.234375 25.8125 13 25.8125C16.765625 25.8125 19.8125 22.765625 19.8125 19C19.8125 16.734375 18.703125 14.738281 17 13.5L17 11L19 11C19.359375 11.003906 19.695313 10.816406 19.878906 10.503906C20.058594 10.191406 20.058594 9.808594 19.878906 9.496094C19.695313 9.183594 19.359375 8.996094 19 9L17 9L17 7L19 7C19.359375 7.003906 19.695313 6.816406 19.878906 6.503906C20.058594 6.191406 20.058594 5.808594 19.878906 5.496094C19.695313 5.183594 19.359375 4.996094 19 5L17 5L17 4.09375C17 1.882813 15.210938 0.09375 13 0.09375 Z M 13 1.9375C14.101563 1.9375 15 2.835938 15 3.9375L15 5L13 5L13 5.6875C12.941406 5.882813 12.941406 6.085938 13 6.28125L13 9.6875C12.941406 9.882813 12.941406 10.085938 13 10.28125L13 14.09375C13 15.027344 12.597656 15.261719 12.40625 15.34375C10.992188 15.960938 9 17.738281 9 19C9 19.277344 8.777344 19.5 8.5 19.5C8.222656 19.5 8 19.277344 8 19C8 17.195313 8.964844 15.625 10.40625 14.75C10.597656 14.636719 11 14.363281 11 13.6875L11 3.9375C11 2.835938 11.898438 1.9375 13 1.9375Z" fill="#376137" />
        </svg>
    )
}

const Temperature = withIcon(temperatureSvg);
export default Temperature;