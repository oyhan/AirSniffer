import React, { PureComponent, useState, useEffect } from 'react'
import { TileLayer, Popup, Marker, Map } from 'react-leaflet';
import { UserService, MainService } from "rhq-infrastructure";

// import Battery from './icons/battery';
import LocateControl from "./LocationControl"
import Battery from './icons/battery';
import Temperature from './icons/temperature';
import MarkerPopup from './views/markerpopup';
import snifferMarker from './icons/marker';
import PopupSkeleton from './views/popupSkleton';
const containerStyle = {
  width: '600px',
  height: '400px'
};

const center = {
  lat: 53.542212,
  lng: -0.164806
};




const RenderMarker = ({ sniffers }) => {

  const markerClick = (sniffer) => (e) => {
    setLoading(true);
    MainService.Get(`sniffer/data?deviceid=${sniffer.deviceID}`).then(response => {
      setData(response);
      setLoading(false);
    })

  }

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  return sniffers.map(sniffer => {

    const position = [sniffer.latitude, sniffer.longitude];

    return (
      < Marker
        icon={snifferMarker}
        onclick={markerClick(sniffer)}
        position={position} >

        {data && <MarkerPopup loading={loading} sniffer={data} />}
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

    MainService.Get("sniffer/listsniffers").then(list => {

      state.sniffers = list;
      setState({ ...state, sniffers: list });
    })
  }, [])

  const locateOptions = {
    position: 'topright',
    strings: {
      title: 'Show me where I am, yo!'
    },
    onActivate: () => { } // callback before engine starts retrieving locations
  }

  const position = [state.lat, state.lng]

  return (
    <Map center={position} zoom={state.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocateControl options={locateOptions} startDirectly />
      <RenderMarker sniffers={state.sniffers} />

    </Map>
  )

}
