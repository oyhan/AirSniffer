import React, { PureComponent, useState, useEffect } from 'react'
import { TileLayer, Popup, Marker, Map } from 'react-leaflet';
import { UserService, MainService } from "rhq-infrastructure";
import Humidity from './icons/humidity';
import Pressure from './icons/pressure';
import Battery from './icons/battery';
import LocateControl from "./LocationControl"
const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 53.542212,
  lng: -0.164806
};
const classes = {
  popup : {
    display : 'flex',
    flexDirection : 'column'
  }
}
const markerPopUp = (sniffer) => {
  const { battery, chipT, dateTime, dateTimeRcvd, devID, humidity, pressure, recNo, rssi,
    temperature, vref } = sniffer;
  return (
    <Popup>
      <div style={classes.popup}>

        <div>
          <Battery/> : {battery}
        </div>
        <div>
          <Pressure/> : {pressure}

        </div>
        <div>
          <Humidity /> : {pressure}
        </div>
      </div>

    </Popup>
  )
}


const renderMarker = (sniffers) => {



  return sniffers.map(sniffer => {

    const position = [sniffer.latitude ,sniffer.longitude];

    return (
      < Marker position={position} >
        {markerPopUp(sniffer)}
      </Marker >
    )

  }

  )


}

export default function MyGoogleMap() {
  const [state, setState] = useState({
    lat: 51.98827,
    lng: -0.305613,
    zoom: 13,
    sniffers: []
  })


  useEffect(() => {

    MainService.Get("sniffer/list").then(list => {

      state.sniffers = list;
      setState({ ...state, sniffers: list });
    })
  }, [])

  const locateOptions = {
    position: 'topright',
    strings: {
        title: 'Show me where I am, yo!'
    },
    onActivate: () => {} // callback before engine starts retrieving locations
}

  const position = [state.lat, state.lng]

  return (
    <Map center={position} zoom={state.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       <LocateControl options={locateOptions} startDirectly/>
      {renderMarker(state.sniffers)}

    </Map>
  )

}
