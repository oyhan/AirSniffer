import React, { useEffect } from 'react'
import { Popup } from 'react-leaflet';

import Humidity from '../icons/humidity';
import Pressure from '../icons/pressure';
import GasTable from './gastable';
import Temperature from '../icons/temperature';
import { Grid, Chip, Tooltip, Typography, CardMedia } from '@material-ui/core';
import { divIcon } from 'leaflet';
import Wind from '../icons/wind';
import NorthDirection from '../icons/northdirection';
import PopupSkeleton from './popupSkleton';
const classes = {
    popup: {

        minWidth: '600px',
        height: '300px'
    },
    popupHeader: {
        width: '115%',
        margin: '-7px -12px 8px -12px'
    },
}
const MarkerPopup = ({ sniffer, loading, image }) => {
    // 
    // 
    //    var imgSrc=  JSON.parse(image).name;
    const { pressure, temperature, humidity, horizontalWind, windDirection } = sniffer;

    const renderImages = () => {
        if (image) {
            const imageObj = JSON.parse(image);


            return imageObj.map(i => {

                const imageUrl = `http://snifferbot.co.uk/${i.name}`;

                return (
                    <Grid style={{
                        borderRadius: '9px 9px 0 0',
                        background: `url(${imageUrl}) no-repeat center`,
                        backgroundSize: 'cover',
                        height: '150px'
                    }} item xs={12}>
                        {/* <CardMedia
                            // className={classes.media}
                            image={imageUrl}
                        // title="Paella dish"
                        /> */}
                        {/* <img src={imageUrl}/>  */}
                    </Grid>
                )

            })
        } else
            return null;
    }



    const tempertureContent = <Typography>
        {`${temperature}`} &#8451;
    </Typography>
    return (
        <Popup maxWidth={300}>

            {(loading && <PopupSkeleton />) ||
                (<Grid container justify='center' spacing={2}>
                    <div className="popup-header" style={classes.popupHeader}>
                        {renderImages()}
                    </div>

                    <Grid item >
                        <Tooltip placement='top' title="temperature in degrees celsius">
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
                        <Tooltip placement='top' title="Horizontal Wind Direction ">
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