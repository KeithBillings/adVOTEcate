import React, { useState, useEffect, useContext } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import DropOffContext from "../../utils/DropOffContext";
import mapStyles from "./mapStyles";


function Map(){
  const [dropOffLocations, setDropOffLocations] = useState([]); 
  const [selectedDropOffLocation, setSelectedDropOffLocation] = useState(null); 

  const dropOffData = useContext(DropOffContext);
  console.log("drop off data (context) is: ", dropOffData);

  useEffect(() => {
    setDropOffLocations(dropOffData);
    console.log("Drop off locations in the state are: ", dropOffLocations);

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

  return(
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 44.039200, lng: -123.099258 }}
      defaultOptions={{ styles: mapStyles}}
    >
      <Marker
        position={{
          lat: 44.039200,
          lng: -123.099260
        }}
      />

      {dropOffData.map((location, i) => {
        console.log(location.latitude);
        return(
          <Marker
          key={i}
          position={{
            lat: location.latitude,
            lng: location.longitude
          }}
        />
        )
      })}
    </GoogleMap>
  );
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
