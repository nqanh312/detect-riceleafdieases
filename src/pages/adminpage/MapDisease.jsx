import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Sidebar from '../../components/admin/sidebar/Sidebar';
import "./list/list.scss"

const containerStyle = {
  width: '1300px',
  height: '650px'
};

const center = {
  lat: 10.745,
  lng: 105.523
};

class MapDisease extends Component {
  render() {
    return (
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <LoadScript
            googleMapsApiKey="AIzaSyC3mZg6P7r2AzeOdm4XiQTmHora9Zs3fGQ"
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              { /* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
      </div>




    )
  }
}

export default React.memo(MapDisease)