import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '1300px', 
  height: '730px'
};

const center = {
  lat: 10.745,
  lng: 105.523
};

class MapDisease extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyC3mZg6P7r2AzeOdm4XiQTmHora9Zs3fGQ"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default React.memo(MapDisease)