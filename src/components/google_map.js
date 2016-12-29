import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

//this is fuctional component.
//the only purpose is to show a map.

export default (props) => {
  return (
    <GoogleMapLoader
      containerElement= { <div style={{height: '100%'}} /> }
      googleMapElement= {
        <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}}
        />
      }
    />
  );
}
