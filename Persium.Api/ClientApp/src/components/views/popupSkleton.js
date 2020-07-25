import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Popup } from 'react-leaflet';
import { Grid } from '@material-ui/core';


export default function PopupSkeleton() {

    return (
        // <Popup minWidth={430} >

        <Grid container justify='center' spacing={2}>


            <Grid item >
                <Skeleton variant="rect" width={100} height={32} />

            </Grid>
            <Grid item >
                <Skeleton variant="rect" width={100} height={32} />

            </Grid>

            <Grid item>
                <Skeleton variant="rect" width={100} height={32} />

            </Grid>
            <Grid item >
                <Skeleton variant="rect" width={100} height={32} />

            </Grid>

            <Grid item >
                <Skeleton variant="rect" width={100} height={32} />

            </Grid>

            <Grid item xs={12}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />

            </Grid>

        </Grid>

        // <div>
        //     <Skeleton variant="text" />
        //     <Skeleton variant="circle" width={40} height={40} />
        //     <Skeleton variant="rect" width={100} height={32} />
        // </div>

        // </Popup>

    )
}

