import React, { useEffect } from 'react'
import { Popup } from 'react-leaflet';

import Humidity from '../icons/humidity';
import Pressure from '../icons/pressure';
import GasTable from './gastable';
import Temperature from '../icons/temperature';
import { Grid, Chip, Tooltip, Typography } from '@material-ui/core';
import { divIcon } from 'leaflet';
import Wind from '../icons/wind';
import NorthDirection from '../icons/northdirection';
import PopupSkeleton from './popupSkleton';
const classes = {
    popup: {

        minWidth: '600px',
        height: '300px'
    }
}
const MarkerPopup = ({ sniffer,loading }) => {

    const {  pressure, temperature, humidity, horizontalWind, windDirection } = sniffer;
    
    



    const tempertureContent = <Typography>
        {`${temperature}`} &#8451;
    </Typography>
    return (
        <Popup minWidth={350} >

            {(loading && <PopupSkeleton />) ||
               ( <Grid container justify='center' spacing={2}>


                    <Grid item >
                        <Tooltip placement='top' title="temperature in Celsius degrees">
                            <Chip
                                label={tempertureContent}
                                icon={<Temperature />}
                            />
                        </Tooltip>
                    </Grid>
                    <Grid item >
                        <Tooltip placement='top' title="pressure in hecto pascal">
                            <Chip label={<Typography noWrap >
                                {pressure} hPa
                    </Typography>} icon={<Pressure />} />
                        </Tooltip>
                    </Grid>

                    <Grid item>
                        <Tooltip placement='top' title="humidity in percent">
                            <Chip label={<Typography>
                                {humidity} %
                </Typography>} icon={<Humidity />} />

                        </Tooltip>
                    </Grid>
                    <Grid item >
                        <Tooltip placement='top' title="Horisontal wind ">
                            <Chip label={<Typography>
                                {horizontalWind} m/s
                </Typography>} icon={<Wind />} />

                        </Tooltip>
                    </Grid>

                    <Grid item >
                        <Tooltip placement='top' title="Wind direction ">
                            <Chip label={<Typography>
                                {windDirection} <sup>&deg;</sup>
                            </Typography>} icon={<NorthDirection />} />

                        </Tooltip>
                    </Grid>

                    <Grid item xs={12}>
                        <GasTable sniffer={sniffer} />

                    </Grid>

                </Grid>)

            }





        </Popup>
    )


}

export default MarkerPopup;