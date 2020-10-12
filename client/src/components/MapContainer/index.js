import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: '50%',
  height: '50%'
};

export function MapContainer({google, dropOffLocationsByCity}) {
  console.log("drop of locations by city from the map container component is: ", dropOffLocationsByCity);


  dropOffLocationsByCity.map((location) => {
    return (
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        defaultCenter={
          {
            lat: location.latitude,
            lng: location.longitude
          }
        }
      >
        <Marker/>
      </Map>
    );
})};

export default GoogleApiWrapper({
  apiKey: API_KEY_HERE
})(MapContainer);