
import React from 'react';


export default function (Component){

    const classes = {
        icon: {
            width: "20px",
            height: "20px",
            position : 'relative'
        }
    }
   return ()=>{
       return <Component style={classes.icon}/>
   }
}