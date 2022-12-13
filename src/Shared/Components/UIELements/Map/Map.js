import React, { useEffect, useRef, useState } from "react";
import Map from "ol/Map";

// import ReactMapGl, { Marker } from "react-map-gl";
import "./Map.css";
import Tile from "ol/Tile";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM";
// import ReactMapGl from "react-map-gl";
// function Map(props) {
//   const [viewport, setViewport] = useState({
//     latitude: 45.4211,
//     longitude: -75.4211,
//     width: "50vw",
//     height: "100vh",
//     zoom: 10,
//   });
//   return (
//     <div>
//       <ReactMapGl
//         {...viewport}
//         mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//       ></ReactMapGl>
//     </div>
//   );
// }

// function Map(props) {
//   const [viewport, setViewport] = useState({
//     latitude: 45.4211,
//     longitude: -75.4211,
//     width: "50vw",
//     height: "100vh",
//     zoom: 10,
//   });
//   return (
//     <div className="map">
//       <ReactMapGl
//         {...viewport}
//         mapboxAccessToken=""
//         onViewportChange={(viewport) => {
//           setViewport(viewport);
//         }}
//         // style={{ width: 100, height: 100 }}
//       >
//         <Marker
//           latitude={viewport.latitude}
//           longitude={viewport.longitude}
//         ></Marker>
//       </ReactMapGl>
//     </div>
//   );
// }

// export default Map;
// function Map(props) {
//   const mapRef = useRef();
//   const { center, zoom } = props;
//   useEffect(() => {
//     const map = new window.google.maps.Map(mapRef.current, {
//       center: center,
//       zoom: zoom,
//     });
//     new window.google.maps.Marker({ position: center, map: map });
//   }, [center, zoom]);
//   return (
//     <div
//       ref={mapRef}
//       className={`map ${props.className}`}
//       style={props.style}
//     ></div>
//   );
// }

// export default Map;
const PlaceMap = (props) => {
  // const mapRef = useRef();

  // const { center, zoom } = props;

  // useEffect(() => {
  //   new Map({
  //     layers: [
  //       new Tile({
  //         source: new OSM(),
  //       }),
  //     ],
  //     target: mapRef.current.id,
  //     view: new View({
  //       center: fromLonLat([center.lng, center.lat]),
  //       zoom: zoom,
  //     }),
  //   });
  // }, [center, zoom]);

  return (
    <div
      // ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};

export default PlaceMap;
