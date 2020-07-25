

import React from 'react'
import { SvgIcon } from '@material-ui/core'

export default function MySvgIcon(props){
    return(
        <SvgIcon color='error' style={{position:'relative'}} {...props}>
            {props.children}
        </SvgIcon>
    )
}