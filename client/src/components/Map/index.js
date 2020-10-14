import React, { useState, useEffect, useContext } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import DropOffContext from "../../utils/DropOffContext";
import UserLocationsContext from "../../utils/UserLocationsContext";
import mapStyles from "./mapStyles";


function Map(){
  const [selectedDropOffLocation, setSelectedDropOffLocation] = useState(null); 

  const dropOffData = useContext(DropOffContext);
  const userLocationData = useContext(UserLocationsContext);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedDropOffLocation(null); 
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  if(userLocationData) {
    return(
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{
          lat: userLocationData.lat, 
          lng: userLocationData.lng 
        }}
        defaultOptions={{ styles: mapStyles}}
      >
        {dropOffData.map((location, i) => {
          return(
            <Marker
              key={i}
              position={{
                lat: location.latitude,
                lng: location.longitude
              }}
              onClick={() => {
                setSelectedDropOffLocation(location);
              }}
            />
          )
        })}
        {selectedDropOffLocation && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedDropOffLocation(null);
            }}
            position={{
              lat: selectedDropOffLocation.latitude,
              lng: selectedDropOffLocation.longitude
            }}
          >
            <div>
              <h2>{selectedDropOffLocation.address.locationName}</h2>
              <h4>{selectedDropOffLocation.address.line1 + " " + selectedDropOffLocation.address.city + "," + " " + selectedDropOffLocation.address.state + " " + selectedDropOffLocation.address.zip}</h4>
              <p>{selectedDropOffLocation.notes}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  } else {
  return <div>Loading...</div>
  }
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function PollMap() {
  return (
    <div style={{ width: "75vw", height: "75vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB3Mumu8O6cU5_iwSU6KqjeNT1tn8XVP0Q`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
