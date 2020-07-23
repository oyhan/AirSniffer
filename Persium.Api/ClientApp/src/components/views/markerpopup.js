import React from 'react'
import { Popup } from 'react-leaflet';

import Humidity from '../icons/humidity';
import Pressure from '../icons/pressure';
import GasTable from './gastable';
import Temperature from '../icons/temperature';
import { Grid } from '@material-ui/core';
const classes = {
    popup: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        height: '300px'
    }
}
const MarkerPopup = (sniffer) => {
    console.log('sniffer: ', sniffer);
    const { battery, pressure, temperature, humidity } = sniffer;
    return (
        <Popup>

            <Grid container spacing={1}>


                <Grid item xs={4}>
                    <Temperature />  {temperature} &#8451;
                </Grid>
                <Grid item xs={4}>
                    <Pressure />  {pressure} hPa
                </Grid>
                <Grid item xs={4}>
                    <Humidity />  {humidity} %
                </Grid>



                <Grid item xs={12}>
                    <GasTable sniffer={sniffer} />

                </Grid>

            </Grid>





            {/* <div style={classes.popup}>

                <div>
                    <Temperature /> : {temperature}
                </div>
                <div>
                    <Pressure /> : {pressure}

                </div>
                <div>
                    <Humidity /> : {humidity}
                </div>

                <div>
                    <GasTable sniffer={sniffer} />
                </div>

            </div> */}

        </Popup>
    )


}

export default MarkerPopup;