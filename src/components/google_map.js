import React from 'react';
import { compose, withProps } from "recompose";
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps'

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCVAlUzZ1k5prPpzPytuVRMcZ0-QA18o4s&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.lat, lng: props.lon}} />
));

export default MyMapComponent;