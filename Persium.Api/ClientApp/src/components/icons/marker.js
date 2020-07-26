import L from 'leaflet';
import markerIcon from '../../assets/marker.png'
import markerShadow from '../../assets/marker-shadow.png'
const snifferMarker = new L.Icon({
    // iconUrl: require('../../assets/marker.png'),
    // // iconRetinaUrl: require('../../assets/marker.png'),
    // iconSize:     [38, 95], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    // popupAnchor:  [-3, -76],
    // shadowUrl : require("../../assets/shadow.png"),
    // // iconSize: new L.Point(60, 75),
    // className: 'leaflet-div-icon'

    iconUrl: markerIcon,
    shadowUrl: markerShadow,

    iconSize:     [29, 41], // size of the icon
    shadowSize:   [35, 50], // size of the shadow
    iconAnchor:   [23, 8], // point of the icon which will correspond to marker's location
    shadowAnchor: [19, 16],  // the same for the shadow
    popupAnchor:  [-8, -16] // point from which the popup should open relative to the iconAnchor
});

export default snifferMarker;